import { useEffect, useRef } from "react";

const GAP = 28;
const RADIUS = 160;

// Fixed full-screen dot grid; dots near the cursor brighten, grow and get pushed away.
export default function DotField() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let raf;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const force = Math.max(0, 1 - dist / RADIUS);
          const push = force * 10;
          const px = dist ? x + (dx / dist) * push : x;
          const py = dist ? y + (dy / dist) * push : y;
          ctx.beginPath();
          ctx.arc(px, py, 0.9 + force * 1.4, 0, Math.PI * 2);
          ctx.fillStyle = force
            ? `rgba(${139 + (255 - 139) * force * 0.2}, ${92 + 60 * force}, 246, ${0.12 + force * 0.6})`
            : "rgba(255,255,255,0.07)";
          ctx.fill();
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (glowRef.current) {
        glowRef.current.setAttribute("cx", event.clientX);
        glowRef.current.setAttribute("cy", event.clientY);
        glowRef.current.style.opacity = "1";
      }
      if (reduced) draw();
    };

    const onLeave = () => {
      mouse.x = mouse.y = -9999;
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="dot-field-glow">
            <stop offset="0%" stopColor="#1a0f2b" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle
          ref={glowRef}
          cx="-9999"
          cy="-9999"
          r="220"
          fill="url(#dot-field-glow)"
          style={{ opacity: 0, transition: "opacity 0.4s" }}
        />
      </svg>
    </div>
  );
}
