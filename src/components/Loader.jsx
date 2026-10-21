import { useEffect, useState } from "react";
import { PROFILE } from "../data/portfolio.js";

const DURATION = 1800;

// Wavy fill line: everything below `level` (0–200 in SVG units) is filled.
function wavePath(level, phase) {
  const points = [];
  for (let x = 0; x <= 1000; x += 20) {
    points.push(`${x},${level + Math.sin(x / 60 + phase) * 8}`);
  }
  return `M0,200 L${points.join(" L")} L1000,200 Z`;
}

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.classList.add("is-loading");
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      setPhase(now / 180);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLeaving(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const id = setTimeout(() => {
      document.body.classList.remove("is-loading");
      onDone();
    }, 700);
    return () => clearTimeout(id);
  }, [leaving, onDone]);

  const level = 170 - (progress / 100) * 160;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center select-none pointer-events-none bg-black transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? "opacity-0 scale-110" : "opacity-100"
      }`}
    >
      <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0" style={{ aspectRatio: "5 / 1" }}>
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid meet">
          <defs>
            <clipPath id="loader-clip">
              <path d={wavePath(level, phase)} />
            </clipPath>
            <linearGradient id="loader-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <text
            id="loader-text"
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
            fontSize="150"
            fontWeight="900"
            fontFamily="Urbanist, system-ui, sans-serif"
            letterSpacing="0.08em"
          >
            {PROFILE.name}
          </text>
          <use href="#loader-text" fill="rgba(255,255,255,0.05)" />
          <use href="#loader-text" fill="url(#loader-grad)" clipPath="url(#loader-clip)" />
        </svg>
        <div className="absolute right-8 md:right-0 -bottom-4 md:bottom-0 text-xs md:text-sm font-mono font-medium text-white/60 tracking-wider">
          loading... <span className="inline-block w-[3ch] text-right">{progress}</span>%
        </div>
      </div>
    </div>
  );
}
