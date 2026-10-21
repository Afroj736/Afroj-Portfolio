function BeetleIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 72 44"
      width="56"
      height="34"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Short stubby beetle legs */}
      <g stroke="#ffb4ab" strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path className="beetle-leg" d="M22 30 L12 38" />
        <path className="beetle-leg beetle-leg-delay" d="M32 32 L28 40" />
        <path className="beetle-leg" d="M42 30 L48 38" />
        <path className="beetle-leg beetle-leg-delay" d="M22 18 L10 12" />
        <path className="beetle-leg" d="M32 16 L30 6" />
        <path className="beetle-leg beetle-leg-delay" d="M42 18 L52 10" />
      </g>

      {/* Hard wing shells (elytra) — round beetle body */}
      <ellipse cx="30" cy="22" rx="20" ry="15" fill="#7f1d1d" stroke="#ffb4ab" strokeWidth="1.5" />
      {/* Elytra split down the middle */}
      <path d="M30 8 L30 36" stroke="#450a0a" strokeWidth="1.5" opacity="0.7" />
      {/* Shell spots — classic beetle look */}
      <circle cx="22" cy="18" r="2.4" fill="#450a0a" opacity="0.55" />
      <circle cx="20" cy="26" r="1.8" fill="#450a0a" opacity="0.45" />
      <circle cx="38" cy="17" r="2.2" fill="#450a0a" opacity="0.55" />
      <circle cx="39" cy="25" r="1.6" fill="#450a0a" opacity="0.45" />
      {/* Shell highlight */}
      <path d="M16 16 Q30 10 44 16" stroke="#ffb4ab" strokeWidth="1.2" fill="none" opacity="0.35" />

      {/* Broad beetle thorax */}
      <ellipse cx="48" cy="22" rx="8" ry="9" fill="#991b1b" stroke="#ffb4ab" strokeWidth="1.3" />

      {/* Wide beetle head */}
      <ellipse cx="58" cy="22" rx="7" ry="7.5" fill="#b91c1c" stroke="#ffb4ab" strokeWidth="1.3" />

      {/* Eyes on front of head */}
      <circle cx="61" cy="18" r="1.8" fill="#0c1324" />
      <circle cx="61" cy="26" r="1.8" fill="#0c1324" />
      <circle cx="61.5" cy="17.5" r="0.55" fill="#8ed5ff" />
      <circle cx="61.5" cy="25.5" r="0.55" fill="#8ed5ff" />

      {/* Mouth / mandibles facing front (right) */}
      <path d="M64 19 Q70 18 67 22" stroke="#ffb4ab" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M64 25 Q70 26 67 22" stroke="#ffb4ab" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Short clubbed beetle antennae */}
      <path d="M60 16 Q64 8 68 6" stroke="#ffb4ab" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M60 28 Q64 36 68 38" stroke="#ffb4ab" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="68" cy="6" r="2" fill="#ffb4ab" />
      <circle cx="68" cy="38" r="2" fill="#ffb4ab" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t border-white/10 bg-surface-container-lowest overflow-hidden">
      <div className="relative h-16 px-margin-mobile lg:px-margin-desktop">
        <div className="bug-crawl absolute top-1/2 text-error" aria-hidden="true">
          <BeetleIcon className="bug-crawl-icon drop-shadow-[0_0_10px_rgba(255,180,171,0.5)]" />
        </div>
        <p className="absolute inset-0 flex items-center justify-center font-code-sm text-code-sm text-outline/40 pointer-events-none">
          hunting defects…
        </p>
      </div>
    </footer>
  );
}
