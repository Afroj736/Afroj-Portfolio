// The beetle from the previous design, recoloured to the violet theme.
// It patrols the footer's top border line, turning around at each end.
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

export default function BugCrawler() {
  return (
    <div className="absolute top-0 inset-x-0 h-0 pointer-events-none" aria-hidden="true">
      <div className="bug-crawl absolute top-0">
        {/* Glowing trail left on the border; flips with the bug */}
        <div className="absolute top-1/2 right-[85%] w-32 h-px bg-gradient-to-r from-transparent to-primary/80" />
        <BeetleIcon className="bug-crawl-icon drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
      </div>
    </div>
  );
}
