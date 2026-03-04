"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  // Warp fields
  vx: number;
  vy: number;
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
    let baseCount = 0;

    // Warp state
    let warpActive = false;
    let warpPhase: "accelerate" | "cruise" | "decelerate" | "idle" = "idle";
    let warpStartTime = 0;

    const ACCEL_DURATION = 600;
    const CRUISE_DURATION = 2200;
    const DECEL_DURATION = 1200;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      baseCount = Math.floor((canvas!.width * canvas!.height) / 5000);
      stars = Array.from({ length: baseCount }, () => randomStar(false));
    }

    function randomStar(nearCenter: boolean): Star {
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      let x: number, y: number;

      if (nearCenter) {
        // Spawn near center for warp tunnel effect
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * 80;
        x = cx + Math.cos(angle) * r;
        y = cy + Math.sin(angle) * r;
      } else {
        x = Math.random() * canvas!.width;
        y = Math.random() * canvas!.height;
      }

      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const speed = 3 + Math.random() * 5;

      return {
        x,
        y,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        vx: (dx / dist) * speed,
        vy: (dy / dist) * speed,
      };
    }

    function startWarp() {
      warpActive = true;
      warpPhase = "accelerate";
      warpStartTime = performance.now();

      // Boost star count for density
      const warpExtra = Math.floor(baseCount * 1.5);
      for (let i = 0; i < warpExtra; i++) {
        stars.push(randomStar(true));
      }

      // Recalculate velocities from center for existing stars
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      for (const star of stars) {
        const dx = star.x - cx;
        const dy = star.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const speed = 3 + Math.random() * 5;
        star.vx = (dx / dist) * speed;
        star.vy = (dy / dist) * speed;
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
        return t * t * t; // cubic ease in for dramatic ramp
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
          // Trim back to base count
          stars = stars.slice(0, baseCount);
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
      const cx = w / 2;
      const cy = h / 2;

      ctx!.clearRect(0, 0, w, h);

      const warpSpeed = warpActive ? getWarpSpeed(time) : 0;
      const speedMult = warpSpeed * 20;

      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];

        if (warpActive && warpSpeed > 0.01) {
          // Move stars outward from center
          star.x += star.vx * speedMult;
          star.y += star.vy * speedMult;

          // Respawn stars that leave the screen near center
          if (star.x < -60 || star.x > w + 60 || star.y < -60 || star.y > h + 60) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.random() * 40;
            star.x = cx + Math.cos(angle) * r;
            star.y = cy + Math.sin(angle) * r;
            const dx = star.x - cx;
            const dy = star.y - cy;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const speed = 3 + Math.random() * 5;
            star.vx = (dx / dist) * speed;
            star.vy = (dy / dist) * speed;
          }

          // Streak length scales with speed and distance from center
          const distFromCenter = Math.sqrt((star.x - cx) ** 2 + (star.y - cy) ** 2);
          const streakLen = warpSpeed * (30 + distFromCenter * 0.15);
          const angle = Math.atan2(star.vy, star.vx);
          const tailX = star.x - Math.cos(angle) * streakLen;
          const tailY = star.y - Math.sin(angle) * streakLen;

          // Gradient from transparent purple tail to bright white head
          const grad = ctx!.createLinearGradient(tailX, tailY, star.x, star.y);
          const a = star.opacity * warpSpeed;
          grad.addColorStop(0, `rgba(139, 92, 246, 0)`);
          grad.addColorStop(0.3, `rgba(167, 139, 250, ${a * 0.3})`);
          grad.addColorStop(0.7, `rgba(220, 210, 255, ${a * 0.7})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${Math.min(a * 1.2, 1)})`);

          ctx!.beginPath();
          ctx!.moveTo(tailX, tailY);
          ctx!.lineTo(star.x, star.y);
          ctx!.strokeStyle = grad;
          ctx!.lineWidth = star.radius * (0.8 + warpSpeed * 1.5);
          ctx!.lineCap = "round";
          ctx!.stroke();
        } else {
          // Normal twinkling star
          const twinkle =
            Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
          ctx!.fill();
        }
      }

      // Subtle radial vignette during warp (bright center fading out)
      if (warpActive && warpSpeed > 0.3) {
        const vignette = ctx!.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.6);
        vignette.addColorStop(0, `rgba(139, 92, 246, ${warpSpeed * 0.04})`);
        vignette.addColorStop(0.5, `rgba(88, 60, 180, ${warpSpeed * 0.02})`);
        vignette.addColorStop(1, `rgba(0, 0, 0, 0)`);
        ctx!.fillStyle = vignette;
        ctx!.fillRect(0, 0, w, h);
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
