import { useState } from "react";
import useInView from "../hooks/useInView.js";

// The beetle from the previous design, recoloured to the violet theme.
function BeetleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 72 44" width="40" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="beetle-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <g stroke="#c4b5fd" strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path className="beetle-leg" d="M22 30 L12 38" />
        <path className="beetle-leg beetle-leg-delay" d="M32 32 L28 40" />
        <path className="beetle-leg" d="M42 30 L48 38" />
        <path className="beetle-leg beetle-leg-delay" d="M22 18 L10 12" />
        <path className="beetle-leg" d="M32 16 L30 6" />
        <path className="beetle-leg beetle-leg-delay" d="M42 18 L52 10" />
      </g>

      <ellipse cx="30" cy="22" rx="20" ry="15" fill="url(#beetle-shell)" stroke="#c4b5fd" strokeWidth="1.2" />
      <path d="M30 8 L30 36" stroke="#1e1b4b" strokeWidth="1.5" opacity="0.6" />
      <circle cx="22" cy="18" r="2.4" fill="#1e1b4b" opacity="0.5" />
      <circle cx="20" cy="26" r="1.8" fill="#1e1b4b" opacity="0.4" />
      <circle cx="38" cy="17" r="2.2" fill="#1e1b4b" opacity="0.5" />
      <circle cx="39" cy="25" r="1.6" fill="#1e1b4b" opacity="0.4" />
      <path d="M16 16 Q30 10 44 16" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.3" />

      <ellipse cx="48" cy="22" rx="8" ry="9" fill="#6d28d9" stroke="#c4b5fd" strokeWidth="1.2" />
      <ellipse cx="58" cy="22" rx="7" ry="7.5" fill="#7c3aed" stroke="#c4b5fd" strokeWidth="1.2" />

      <circle cx="61" cy="18" r="1.8" fill="#020202" />
      <circle cx="61" cy="26" r="1.8" fill="#020202" />
      <circle cx="61.5" cy="17.5" r="0.55" fill="#ffffff" />
      <circle cx="61.5" cy="25.5" r="0.55" fill="#ffffff" />

      <path d="M64 19 Q70 18 67 22" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M64 25 Q70 26 67 22" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      <path d="M60 16 Q64 8 68 6" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M60 28 Q64 36 68 38" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="68" cy="6" r="2" fill="#c4b5fd" />
      <circle cx="68" cy="38" r="2" fill="#c4b5fd" />
    </svg>
  );
}

// Divider between sections: when it scrolls into view the beetle "scans" the
// next section, lighting the line behind it, then reports a passing result.
export default function SectionDivider({ target }) {
  const [ref, inView] = useInView({ threshold: 0.9 });
  const [done, setDone] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative z-10 container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl py-6 ${inView ? "is-scanning" : ""} ${
        done ? "is-scanned" : ""
      }`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between mb-3 font-mono text-[10px] sm:text-xs tracking-wider">
        <span className="text-muted/60">
          <span className="text-primary">$</span> scan --section={target}
        </span>
        <span
          className={`flex items-center gap-2 transition-all duration-500 ${
            done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          <span className="text-muted/60">0 defects</span>
          <span className="px-2 py-0.5 rounded border border-green-500/30 bg-green-500/10 text-green-400 font-bold">✓ PASS</span>
        </span>
      </div>

      <div className="relative h-px bg-white/[0.06]">
        <div className="scan-line absolute inset-0 origin-left bg-gradient-to-r from-primary/10 via-primary to-secondary" />
        <div className="scan-bug absolute top-0" onAnimationEnd={(event) => event.animationName === "bug-scan" && setDone(true)}>
          <div className="absolute top-1/2 right-[85%] w-24 h-px bg-gradient-to-r from-transparent to-primary" />
          <BeetleIcon className="bug-crawl-icon drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
        </div>
      </div>
    </div>
  );
}
