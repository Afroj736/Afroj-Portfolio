import { useEffect, useRef, useState } from "react";
import useInView from "../hooks/useInView.js";

export function ShinyText({ children, className = "", speed = 4 }) {
  return (
    <span className={`shiny-text ${className}`} style={{ animationDuration: `${speed}s` }}>
      {children}
    </span>
  );
}

export function Reveal({ as: Tag = "div", direction = "up", delay = 0, className = "", children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      data-reveal={direction}
      className={`${inView ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function GlowCard({ children, className = "", radius = 16, bg = "#0a0a0a", ...rest }) {
  const ref = useRef(null);

  const onMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => ref.current.style.setProperty("--glow", "1")}
      onPointerLeave={() => ref.current.style.setProperty("--glow", "0")}
      className={`glow-card ${className}`}
      style={{ "--radius": `${radius}px`, "--card-bg": bg }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function TiltCard({ children, className = "", max = 6 }) {
  const ref = useRef(null);

  const onMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `rotateX(${-y * max}deg) rotateY(${x * max}deg)`;
  };

  return (
    <div className="h-full" style={{ perspective: "1000px" }}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={() => (ref.current.style.transform = "none")}
        className={`h-full transition-transform duration-200 ease-out ${className}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_/[]{}=+*^?#";

export function ScrambleText({ text, start }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const total = text.length * 3;
    const id = setInterval(() => {
      frame++;
      setDisplay(
        text
          .split("")
          .map((char, i) => (char === " " || i < frame / 3 ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join("")
      );
      if (frame >= total) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [start, text]);

  return (
    <span className={`relative inline-block whitespace-nowrap transition-opacity duration-300 ${start ? "opacity-100" : "opacity-0"}`}>
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0" aria-hidden="true">
        {display}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}

export function SectionHeading({ index, title, subtitle }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div ref={ref} data-reveal="up" className={`mb-12 md:mb-16 select-none relative ${inView ? "is-visible" : ""}`}>
      <span className="text-7xl md:text-9xl font-black bg-gradient-to-b from-white/15 to-transparent bg-clip-text text-transparent absolute -top-8 md:-top-12 -left-4 font-mono pointer-events-none">
        {index}
      </span>
      <div className="relative pl-4 border-l-2 border-primary">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
          <ScrambleText text={title} start={inView} />
        </h2>
        <span className="text-xs font-mono text-muted tracking-widest block mt-2 uppercase">
          [ <ShinyText className="text-muted">{subtitle}</ShinyText> ]
        </span>
      </div>
    </div>
  );
}

export function TerminalBar({ title, className = "" }) {
  return (
    <div className={`flex items-center px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-white/5 bg-[#0a0a0a]/80 rounded-t-xl ${className}`}>
      <div className="flex gap-1.5 sm:gap-2">
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary" />
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500" />
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500" />
      </div>
      <div className="flex-1 text-center text-[10px] sm:text-xs font-mono text-muted/50 pr-10">{title}</div>
    </div>
  );
}
