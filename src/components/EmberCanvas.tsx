import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../lib/hooks";

interface Particle {
  x: number;
  y: number;
  r: number;
  vy: number;
  sway: number;
  phase: number;
  life: number;
  max: number;
  color: string;
}

const COLORS = ["#e8b34b", "#d96f32", "#f4d488", "#b0532b", "#eccf7e"];

export default function EmberCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const spawn = (initial: boolean): Particle => ({
      x: Math.random() * width,
      y: initial ? Math.random() * height : height + 12,
      r: 0.7 + Math.random() * 2.1,
      vy: 0.25 + Math.random() * 0.9,
      sway: 14 + Math.random() * 26,
      phase: Math.random() * Math.PI * 2,
      life: initial ? Math.random() * 300 : 0,
      max: 260 + Math.random() * 240,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const count = Math.max(36, Math.min(110, Math.floor((width * height) / 15000)));
    const particles = Array.from({ length: count }, () => spawn(true));

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      particles.slice(0, 42).forEach((p, i) => {
        ctx.globalAlpha = 0.12 + (i % 5) * 0.04;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y * 0.92, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    };

    if (reduced) {
      drawStatic();
      const onResize = () => {
        resize();
        drawStatic();
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += 1;
        p.y -= p.vy;
        const t = p.life / p.max;
        const alpha = Math.sin(Math.min(1, t) * Math.PI) * (0.45 + 0.4 * Math.sin(p.life * 0.18 + p.phase) * 0.5 + 0.2);
        const x = p.x + Math.sin(p.life * 0.02 + p.phase) * p.sway * 0.25;
        ctx.globalAlpha = Math.max(0.04, alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 7;
        ctx.beginPath();
        ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        if (p.y < -14 || p.life > p.max) particles[i] = spawn(false);
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" />;
}
