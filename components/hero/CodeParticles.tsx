"use client";

import { useEffect, useRef } from "react";

const CODE_SYMBOLS = [
  "{ }", "</>", "=>", "( )", "[ ]", "//", "&&", "||",
  "===", "!=", "++", "fn()", "#", ";;", "**", "??",
  "::", "0x", "~", "%", "const", "let", "return",
  "import", "async", "await", "void", "<T>", "[]",
];

const NAVY = "#00296B";
const CONNECTION_DIST = 150; // px — max distance to draw a connecting line
const REPULSION_DIST = 120;  // px — cursor repulsion radius
const REPULSION_FORCE = 3.2;

interface Particle {
  x: number;
  y: number;
  vx: number; // current velocity x
  vy: number; // current velocity y
  baseVx: number; // natural drift vx
  baseVy: number; // natural drift vy (upward)
  symbol: string;
  size: number;
  opacity: number;
  sway: number;
  swaySpeed: number;
  swayOffset: number;
  burst: boolean; // true = spawned from a click burst
  life: number;   // 0–1, only used for burst particles
}

function createParticle(w: number, h: number, randomY = true): Particle {
  const speed = 0.25 + Math.random() * 0.55;
  return {
    x: Math.random() * w,
    y: randomY ? Math.random() * h : h + 20,
    vx: 0,
    vy: -speed,
    baseVx: 0,
    baseVy: -speed,
    symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
    size: 11 + Math.random() * 9,
    opacity: 0.07 + Math.random() * 0.13,
    sway: 18 + Math.random() * 25,
    swaySpeed: 0.25 + Math.random() * 0.45,
    swayOffset: Math.random() * Math.PI * 2,
    burst: false,
    life: 1,
  };
}

function createBurstParticle(x: number, y: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const spd = 1.5 + Math.random() * 3.5;
  return {
    x,
    y,
    vx: Math.cos(angle) * spd,
    vy: Math.sin(angle) * spd,
    baseVx: Math.cos(angle) * spd,
    baseVy: Math.sin(angle) * spd,
    symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
    size: 13 + Math.random() * 10,
    opacity: 0.55 + Math.random() * 0.3,
    sway: 0,
    swaySpeed: 0,
    swayOffset: 0,
    burst: true,
    life: 1,
  };
}

export default function CodeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const PARTICLE_COUNT = 80;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height, true)
      );
    };
    resize();
    window.addEventListener("resize", resize);

    // Track mouse relative to canvas
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    // Click burst
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const burst = Array.from({ length: 14 }, () => createBurstParticle(cx, cy));
      particles.push(...burst);
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("click", onClick);

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // --- Update positions ---
      for (const p of particles) {
        if (p.burst) {
          // Burst particles decelerate and fade
          p.vx *= 0.96;
          p.vy *= 0.96;
          p.life -= 0.018;
          p.x += p.vx;
          p.y += p.vy;
        } else {
          // Natural float + sway
          const sineX = Math.sin(t * p.swaySpeed + p.swayOffset) * p.sway * 0.008;
          p.vx = p.baseVx + sineX;
          p.vy = p.baseVy;

          // Cursor repulsion
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPULSION_DIST && dist > 0) {
            const force = ((REPULSION_DIST - dist) / REPULSION_DIST) * REPULSION_FORCE;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }

          p.x += p.vx;
          p.y += p.vy;

          // Respawn if off-screen
          if (p.y < -24 || p.x < -60 || p.x > canvas.width + 60) {
            Object.assign(p, createParticle(canvas.width, canvas.height, false));
          }
        }
      }

      // Remove dead burst particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].burst && particles[i].life <= 0) particles.splice(i, 1);
      }

      // --- Draw connection lines between nearby regular particles ---
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].burst) continue;
        for (let j = i + 1; j < particles.length; j++) {
          if (particles[j].burst) continue;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.strokeStyle = NAVY;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // --- Draw symbols ---
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const p of particles) {
        const edgeMargin = 50;
        let alpha = p.burst ? p.opacity * p.life : p.opacity;
        if (!p.burst) {
          if (p.y < edgeMargin) alpha *= p.y / edgeMargin;
          if (p.y > canvas.height - edgeMargin) alpha *= (canvas.height - p.y) / edgeMargin;
        }
        ctx.font = `bold ${p.size}px 'Courier New', monospace`;
        ctx.fillStyle = NAVY;
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fillText(p.symbol, p.x, p.y);
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute top-0 left-0 w-full h-full select-none"
      style={{ zIndex: 0, cursor: "crosshair", display: "block" }}
    />
  );
}
