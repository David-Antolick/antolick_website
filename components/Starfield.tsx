"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  dirX: number;
  dirY: number;
  speed: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];

    // Warp state
    let warpActive = false;
    let warpPhase: "accelerate" | "cruise" | "decelerate" | "idle" = "idle";
    let warpStartTime = 0;

    // Post-warp fade: 0 = invisible, 1 = fully visible
    let fadeIn = 1;
    let fading = false;
    const FADE_DURATION = 2000;
    let fadeStartTime = 0;

    const ACCEL_DURATION = 500;
    const CRUISE_DURATION = 1800;
    const DECEL_DURATION = 1000;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      const count = Math.floor((canvas!.width * canvas!.height) / 5000);
      stars = Array.from({ length: count }, () => makeStar());
    }

    function makeStar(): Star {
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      const x = Math.random() * canvas!.width;
      const y = Math.random() * canvas!.height;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      return {
        x,
        y,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.003 + 0.001,
        twinkleOffset: Math.random() * Math.PI * 2,
        dirX: dx / dist,
        dirY: dy / dist,
        speed: 1.5 + Math.random() * 3,
      };
    }

    function placeOnRing(star: Star) {
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      const angle = Math.random() * Math.PI * 2;
      const ringRadius = 30 + Math.random() * 120;
      star.x = cx + Math.cos(angle) * ringRadius;
      star.y = cy + Math.sin(angle) * ringRadius;
      star.dirX = Math.cos(angle);
      star.dirY = Math.sin(angle);
      star.speed = 1.5 + Math.random() * 3;
    }

    function startWarp() {
      warpActive = true;
      warpPhase = "accelerate";
      warpStartTime = performance.now();
      fading = false;
      fadeIn = 1;

      // Keep stars where they are — just set their direction outward from center
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      for (const star of stars) {
        const dx = star.x - cx;
        const dy = star.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        star.dirX = dx / dist;
        star.dirY = dy / dist;
        star.speed = 1.5 + Math.random() * 3;
      }
    }

    function onWarp() {
      if (!warpActive) startWarp();
    }

    function getWarpSpeed(now: number): number {
      const elapsed = now - warpStartTime;

      if (warpPhase === "accelerate") {
        if (elapsed >= ACCEL_DURATION) {
          warpPhase = "cruise";
          warpStartTime = now;
          return 1;
        }
        const t = elapsed / ACCEL_DURATION;
        return t * t;
      }

      if (warpPhase === "cruise") {
        if (elapsed >= CRUISE_DURATION) {
          warpPhase = "decelerate";
          warpStartTime = now;
          return 1;
        }
        return 1;
      }

      if (warpPhase === "decelerate") {
        if (elapsed >= DECEL_DURATION) {
          warpPhase = "idle";
          warpActive = false;
          // Scatter stars back to random positions and start fade-in
          for (const star of stars) {
            star.x = Math.random() * canvas!.width;
            star.y = Math.random() * canvas!.height;
          }
          fadeIn = 0;
          fading = true;
          fadeStartTime = now;
          return 0;
        }
        const t = 1 - elapsed / DECEL_DURATION;
        return t * t;
      }

      return 0;
    }

    function draw(time: number) {
      const w = canvas!.width;
      const h = canvas!.height;

      ctx!.clearRect(0, 0, w, h);

      // Update post-warp fade
      if (fading) {
        const elapsed = time - fadeStartTime;
        fadeIn = Math.min(elapsed / FADE_DURATION, 1);
        if (fadeIn >= 1) fading = false;
      }

      const warpSpeed = warpActive ? getWarpSpeed(time) : 0;

      for (const star of stars) {
        if (warpActive && warpSpeed > 0.01) {
          // Move star outward
          star.x += star.dirX * star.speed * warpSpeed * 8;
          star.y += star.dirY * star.speed * warpSpeed * 8;

          // Respawn offscreen stars in ring
          if (star.x < -100 || star.x > w + 100 || star.y < -100 || star.y > h + 100) {
            placeOnRing(star);
          }

          // Draw streak
          const streakLen = warpSpeed * 60 * star.speed;
          const tailX = star.x - star.dirX * streakLen;
          const tailY = star.y - star.dirY * streakLen;

          const grad = ctx!.createLinearGradient(tailX, tailY, star.x, star.y);
          const a = star.opacity * warpSpeed;
          grad.addColorStop(0, `rgba(167, 139, 250, 0)`);
          grad.addColorStop(0.6, `rgba(200, 190, 255, ${a * 0.4})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${Math.min(a, 1)})`);

          ctx!.beginPath();
          ctx!.moveTo(tailX, tailY);
          ctx!.lineTo(star.x, star.y);
          ctx!.strokeStyle = grad;
          ctx!.lineWidth = star.radius * (0.6 + warpSpeed * 0.8);
          ctx!.lineCap = "round";
          ctx!.stroke();
        } else {
          // Normal twinkling (with fade-in multiplier)
          const twinkle =
            Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle * fadeIn})`;
          ctx!.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("warp", onWarp);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("warp", onWarp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
