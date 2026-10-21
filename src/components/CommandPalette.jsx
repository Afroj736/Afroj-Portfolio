import { useEffect, useMemo, useRef, useState } from "react";
import { NAV, PROFILE, SOCIALS } from "../data/portfolio.js";
import { SearchIcon } from "./icons.jsx";

const ACTIONS = [
  ...NAV.map(({ id, label }) => ({ group: "Navigate", label, href: `#${id}` })),
  ...SOCIALS.map(({ label, href }) => ({ group: "Links", label, href, external: true })),
  { group: "Links", label: "Resume (PDF)", href: PROFILE.resume, external: true },
];

export default function CommandPalette({ open, onClose, onToggle }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onToggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onToggle]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  const results = useMemo(
    () => ACTIONS.filter(({ label }) => label.toLowerCase().includes(query.trim().toLowerCase())),
    [query]
  );

  const run = (action) => {
    onClose();
    if (action.external) {
      window.open(action.href, "_blank", "noopener,noreferrer");
    } else {
      document.querySelector(action.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") onClose();
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    }
    if (event.key === "Enter" && results[index]) run(results[index]);
  };

  if (!open) return null;

  let lastGroup = null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-primary/10 overflow-hidden">
        <div className="flex items-center gap-3 px-4 border-b border-white/5">
          <SearchIcon className="w-4 h-4 text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setIndex(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent py-4 text-sm text-white placeholder:text-white/30 focus:outline-none"
          />
          <kbd className="text-[10px] font-mono text-muted border border-white/10 rounded px-1.5 py-0.5">ESC</kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No results.</li>}
          {results.map((action, i) => {
            const header = action.group !== lastGroup ? action.group : null;
            lastGroup = action.group;
            return (
              <li key={action.label}>
                {header && (
                  <p className="px-3 pt-3 pb-1 text-[10px] font-mono uppercase tracking-widest text-muted/60">{header}</p>
                )}
                <button
                  type="button"
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => run(action)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                    i === index ? "bg-primary/15 text-white" : "text-white/70"
                  }`}
                >
                  {action.label}
                  <span className="text-[10px] font-mono text-muted">{action.external ? "↗" : "↵"}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
