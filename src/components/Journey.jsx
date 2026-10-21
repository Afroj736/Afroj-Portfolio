import { useEffect, useRef, useState } from "react";
import { JOURNEY } from "../data/portfolio.js";
import { GlowCard, SectionHeading } from "./ui.jsx";

// Progress (0–1) of how far the viewport's midpoint has travelled through the element.
function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const mid = window.innerHeight / 2;
      setProgress(Math.min(Math.max((mid - rect.top) / rect.height, 0), 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
}

export default function Journey() {
  const listRef = useRef(null);
  const progress = useScrollProgress(listRef);
  const reached = Math.floor(progress * JOURNEY.length + 0.35);

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
        <SectionHeading index="04" title="Journey" subtitle="my story so far" />

        <div ref={listRef} className="relative">
          <div className="absolute top-3 bottom-3 left-4 md:left-1/2 w-[2px] bg-white/5 md:-translate-x-1/2" />
          <div
            className="absolute top-3 bottom-3 left-4 md:left-1/2 w-[2px] bg-gradient-to-b from-primary via-[#06b6d4] to-transparent md:-translate-x-1/2 origin-top"
            style={{ transform: `scaleY(${progress})` }}
          />

          <div className="space-y-6 md:space-y-0">
            {JOURNEY.map((item, i) => {
              const active = i < reached;
              const left = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className="relative pl-10 md:pl-0 md:flex md:items-center md:min-h-[160px] md:py-6 transition-all duration-700 ease-out"
                  style={{ opacity: active ? 1 : 0.2, transform: active ? "none" : "translateY(40px)" }}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-20">
                    <div
                      className="w-4 h-4 rounded-full border-2 bg-[#020202] flex items-center justify-center transition-all duration-300"
                      style={{
                        borderColor: active ? "rgba(139, 92, 246, 1)" : "rgba(255, 255, 255, 0.1)",
                        transform: `scale(${active ? 1.2 : 0.9})`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full transition-colors duration-300"
                        style={{ backgroundColor: active ? "rgba(139, 92, 246, 1)" : "rgba(255, 255, 255, 0.15)" }}
                      />
                    </div>
                  </div>

                  <div
                    className={`w-full md:w-[calc(50%-2rem)] md:flex ${
                      left ? "md:mr-auto md:pr-4 md:justify-end" : "md:ml-auto md:pl-4 md:justify-start"
                    }`}
                  >
                    <GlowCard className="w-full max-w-full md:max-w-md">
                      <div className="p-4 sm:p-5 text-left">
                        <span className="text-[10px] font-mono text-primary font-bold tracking-widest block mb-1">{item.year}</span>
                        <h3 className={`text-sm sm:text-base font-bold mb-2 ${item.current ? "text-primary" : "text-white"}`}>
                          {item.title}
                        </h3>
                        <p className="text-muted text-xs leading-relaxed">{item.text}</p>
                      </div>
                    </GlowCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
