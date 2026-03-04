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

    // Post-warp fade-in
    let fadeIn = false;
    let fadeInStart = 0;
    const FADE_IN_DURATION = 2000;

    const ACCEL_DURATION = 500;
    const CRUISE_DURATION = 1800;
    const DECEL_DURATION = 2000;

    // Exclusion zone: no stars rendered inside this radius from center during warp
    const EXCLUSION_RADIUS = 180;

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
      // Spawn just outside the exclusion zone
      const ringRadius = EXCLUSION_RADIUS + 20 + Math.random() * 100;
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
      fadeIn = false;

      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      for (const star of stars) {
        const dx = star.x - cx;
        const dy = star.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        // Stars inside the exclusion zone get moved to the ring
        if (dist < EXCLUSION_RADIUS) {
          placeOnRing(star);
        } else {
          star.dirX = dx / dist;
          star.dirY = dy / dist;
          star.speed = 1.5 + Math.random() * 3;
        }
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
          // Start fade-in
          fadeIn = true;
          fadeInStart = now;
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

      const warpSpeed = warpActive ? getWarpSpeed(time) : 0;
      const cx = w / 2;
      const cy = h / 2;

      // Post-warp fade-in multiplier
      let fadeAlpha = 1;
      if (fadeIn) {
        const fadeElapsed = time - fadeInStart;
        if (fadeElapsed >= FADE_IN_DURATION) {
          fadeIn = false;
          fadeAlpha = 1;
        } else {
          fadeAlpha = fadeElapsed / FADE_IN_DURATION;
        }
      }

      for (const star of stars) {
        if (warpActive) {
          // Move star outward (even during deceleration, just slower)
          star.x += star.dirX * star.speed * warpSpeed * 8;
          star.y += star.dirY * star.speed * warpSpeed * 8;

          // Respawn offscreen stars from ring
          if (star.x < -100 || star.x > w + 100 || star.y < -100 || star.y > h + 100) {
            placeOnRing(star);
          }

          // Skip stars inside the exclusion zone (clear center like Star Wars)
          const sdx = star.x - cx;
          const sdy = star.y - cy;
          const distFromCenter = Math.sqrt(sdx * sdx + sdy * sdy);
          if (distFromCenter < EXCLUSION_RADIUS) continue;

          // Streak length shrinks naturally with warpSpeed toward 0
          const streakLen = warpSpeed * 60 * star.speed;

          if (streakLen < 0.5) {
            // Streak too small — render as dot (seamless transition)
            ctx!.beginPath();
            ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx!.fillStyle = `rgba(255, 255, 255, ${star.opacity * Math.max(warpSpeed, 0.05)})`;
            ctx!.fill();
          } else {
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
          }
        } else {
          // Normal twinkling + slow rotation
          const twinkle =
            Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.5 + 0.5;

          // Rotate star position slowly around center
          const rotAngle = time * 0.00003; // ~1 full rotation per ~58 hours — very slow
          const relX = star.x - cx;
          const relY = star.y - cy;
          const cosA = Math.cos(rotAngle);
          const sinA = Math.sin(rotAngle);
          const drawX = cx + relX * cosA - relY * sinA;
          const drawY = cy + relX * sinA + relY * cosA;

          ctx!.beginPath();
          ctx!.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle * fadeAlpha})`;
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
