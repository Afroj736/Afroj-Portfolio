import { SKILL_ROWS } from "../data/portfolio.js";
import { SectionHeading } from "./ui.jsx";

const SPEEDS = ["45s", "55s", "50s"];

function MarqueeRow({ items, reverse, speed }) {
  // Duplicated so translateX(-50%) loops seamlessly.
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="relative flex overflow-x-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />
      <div
        className={`marquee-track flex whitespace-nowrap items-center gap-2.5 sm:gap-3 md:gap-4 py-1 pr-2.5 sm:pr-3 md:pr-4 ${reverse ? "reverse" : ""}`}
        style={{ "--speed": speed }}
      >
        {loop.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            aria-hidden={i >= items.length}
            className="px-4 sm:px-5 md:px-8 py-2 sm:py-3 md:py-4 bg-[#111] border border-white/5 rounded-full text-foreground/70 font-mono text-xs sm:text-sm md:text-base hover:border-primary/50 hover:text-primary transition-colors hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] shrink-0"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-primary/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl relative z-10 mb-8 sm:mb-12">
        <SectionHeading index="02" title="Skills" subtitle="technical proficiency" />
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
        {SKILL_ROWS.map((row, i) => (
          <MarqueeRow key={i} items={row} reverse={i % 2 === 1} speed={SPEEDS[i % SPEEDS.length]} />
        ))}
      </div>
    </section>
  );
}
