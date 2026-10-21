import { useEffect, useState } from "react";
import useInView from "../hooks/useInView.js";
import { ABOUT, STATS } from "../data/portfolio.js";
import { GlowCard, Reveal, SectionHeading, ShinyText } from "./ui.jsx";

function CountUp({ value, suffix = "", start }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    const began = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - began) / 1600, 1);
      setCurrent(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}

export default function About() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        <SectionHeading index="01" title="About Me" subtitle="who i am & what i do" />

        <div
          ref={statsRef}
          data-reveal="up"
          className={`grid grid-cols-2 md:grid-cols-4 border border-white/5 rounded-2xl overflow-hidden mb-12 md:mb-20 ${
            statsInView ? "is-visible" : ""
          }`}
        >
          {STATS.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center py-6 px-3 sm:py-10 sm:px-6 text-center border-white/5 hover:bg-white/[0.02] transition-colors group ${
                i % 2 === 0 ? "border-r" : "md:border-r"
              } ${i < 2 ? "border-b md:border-b-0" : ""} ${i === STATS.length - 1 ? "md:border-r-0" : ""}`}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                <CountUp value={value} suffix={suffix} start={statsInView} />
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-muted uppercase tracking-wider sm:tracking-widest">
                <ShinyText className="text-muted">{label}</ShinyText>
              </span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          <Reveal direction="left" className="md:col-span-3 space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mb-6">
                {ABOUT.title}
                <br />
                <span className="text-white/30">{ABOUT.titleMuted}</span>
              </h3>
              <p className="text-muted text-lg leading-relaxed">{ABOUT.paragraphs[0]}</p>
            </div>
            <p className="text-muted leading-relaxed">{ABOUT.paragraphs[1]}</p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-primary">
                <ShinyText className="text-primary">{ABOUT.status}</ShinyText>
              </span>
            </div>
          </Reveal>

          <Reveal direction="right" className="md:col-span-2 space-y-6">
            <GlowCard>
              <div className="p-6 text-left">
                <p className="text-[10px] font-mono tracking-widest text-muted uppercase mb-3">{ABOUT.education.label}</p>
                <p className="text-white font-bold text-lg leading-tight">{ABOUT.education.title}</p>
                <p className="text-muted text-sm mt-1">{ABOUT.education.org}</p>
                <p className="text-primary/70 text-xs font-mono mt-2">{ABOUT.education.period}</p>
              </div>
            </GlowCard>
            <GlowCard>
              <div className="p-6 text-left">
                <p className="text-[10px] font-mono tracking-widest text-muted uppercase mb-4">Currently learning</p>
                <div className="flex flex-wrap gap-2">
                  {ABOUT.learning.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1.5 rounded-full text-xs font-mono border border-white/5 text-white/60 hover:border-secondary/40 hover:text-secondary transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
