import { useEffect, useRef, useState } from "react";

const INTERACTIVE = "a, button, [role='button'], label, summary";
const TEXT_INPUT = "input, textarea, select";

// QA "inspector" cursor: a precise crosshair plus a trailing magnifying glass that
// zooms over clickable things and stamps a PASS on click. Fine pointers only.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState("default"); // default | hover | text
  const [pressed, setPressed] = useState(false);
  const [stamps, setStamps] = useState([]);
  const dotRef = useRef(null);
  const lensRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const target = { x: -100, y: -100 };
    const lens = { x: -100, y: -100 };
    let raf;

    const loop = () => {
      lens.x += (target.x - lens.x) * 0.2;
      lens.y += (target.y - lens.y) * 0.2;
      if (lensRef.current) lensRef.current.style.transform = `translate3d(${lens.x}px, ${lens.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      const el = event.target instanceof Element ? event.target : null;
      setMode(el?.closest(TEXT_INPUT) ? "text" : el?.closest(INTERACTIVE) ? "hover" : "default");
    };

    const onDown = (event) => {
      setPressed(true);
      const id = performance.now();
      setStamps((prev) => [...prev, { id, x: event.clientX, y: event.clientY }]);
      setTimeout(() => setStamps((prev) => prev.filter((stamp) => stamp.id !== id)), 700);
    };
    const onUp = () => setPressed(false);
    const onLeave = () => {
      target.x = target.y = -100;
      if (dotRef.current) dotRef.current.style.transform = "translate3d(-100px, -100px, 0)";
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  const lensScale = mode === "hover" ? 1.6 : mode === "text" ? 0.5 : 1;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100000]" aria-hidden="true">
      {/* Crosshair — exact pointer position */}
      <div ref={dotRef} className="absolute top-0 left-0 will-change-transform">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className={`-translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${mode === "text" ? "opacity-0" : "opacity-100"}`}
        >
          <path d="M9 1v5M9 12v5M1 9h5M12 9h5" stroke="#f5f5f5" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9" cy="9" r="1.4" fill="#8b5cf6" />
        </svg>
        {mode === "text" && <div className="-translate-x-1/2 -translate-y-1/2 w-[2px] h-5 bg-primary rounded" />}
      </div>

      {/* Magnifying glass — trails slightly behind */}
      <div ref={lensRef} className="absolute top-0 left-0 will-change-transform">
        <div
          className="relative transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translate(-50%, -50%) scale(${pressed ? lensScale * 0.85 : lensScale})` }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" className="overflow-visible">
            <circle
              cx="22"
              cy="22"
              r="15"
              fill={mode === "hover" ? "rgba(139,92,246,0.12)" : "transparent"}
              stroke={mode === "hover" ? "#8b5cf6" : "rgba(245,245,245,0.45)"}
              strokeWidth="1.2"
              className="transition-all duration-300"
            />
            <path
              d="M33 33 L41 41"
              stroke={mode === "hover" ? "#8b5cf6" : "rgba(245,245,245,0.45)"}
              strokeWidth="2.4"
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          </svg>
          <span
            className={`absolute left-1/2 top-full mt-1 -translate-x-1/2 text-[7px] font-mono font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap transition-opacity duration-200 ${
              mode === "hover" ? "opacity-100" : "opacity-0"
            }`}
          >
            inspect
          </span>
        </div>
      </div>

      {stamps.map(({ id, x, y }) => (
        <span
          key={id}
          className="cursor-pass absolute text-[10px] font-mono font-bold text-green-400 whitespace-nowrap"
          style={{ left: x, top: y - 18 }}
        >
          ✓ PASS
        </span>
      ))}
    </div>
  );
}
