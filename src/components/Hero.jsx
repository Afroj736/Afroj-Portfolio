import { useEffect, useState } from "react";
import { HERO, IMAGES, PROFILE } from "../data/portfolio.js";
import ScrollPortrait from "./ScrollPortrait.jsx";
import { GlowCard, ShinyText, TerminalBar } from "./ui.jsx";

function useRotatingWord(words, interval = 2600) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);
  return [words[index], index];
}

// Types each command, then prints its output, then moves to the next; loops forever.
function useTypedSession(script, start) {
  const [done, setDone] = useState([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (!start) return;
    let cancelled = false;
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    (async () => {
      while (!cancelled) {
        setDone([]);
        for (const { cmd, out } of script) {
          for (let i = 1; i <= cmd.length && !cancelled; i++) {
            setTyping(cmd.slice(0, i));
            await sleep(55);
          }
          await sleep(300);
          if (cancelled) return;
          setTyping("");
          setDone((prev) => [...prev, { cmd, out }]);
          await sleep(700);
        }
        await sleep(3500);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [script, start]);

  return { done, typing };
}

export default function Hero({ ready }) {
  const [word, wordIndex] = useRotatingWord(HERO.rotating);
  const { done, typing } = useTypedSession(HERO.terminal, ready);
  const enter = (delay) => ({
    className: `transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`,
    style: { transitionDelay: `${delay}ms` },
  });

  return (
    <section id="hero" className="min-h-[100dvh] pt-20 sm:pt-24 md:pt-32 pb-12 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
          <div className="flex-1 w-full max-w-2xl relative z-10">
            <div {...enter(100)}>
              <div className="mb-6 sm:mb-8">
                <p className="text-xs sm:text-sm md:text-base text-primary font-mono mb-2 tracking-widest uppercase">
                  <ShinyText speed={3}>{HERO.eyebrow}</ShinyText>
                </p>
                <p className="font-display font-black leading-none tracking-tight text-6xl sm:text-8xl md:text-9xl mb-4 -ml-1 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] hover:[-webkit-text-stroke:1px_#8b5cf6] transition-all">
                  {PROFILE.name}
                </p>
                <h1 className="text-[20px] xs:text-[22px] sm:text-5xl md:text-7xl font-black tracking-tighter text-muted/70 whitespace-nowrap">
                  {HERO.lead}
                </h1>
                <div className="h-[26px] xs:h-[28px] sm:h-[54px] md:h-[78px] overflow-hidden relative mt-1 sm:mt-2">
                  <span
                    key={wordIndex}
                    className="word-in block text-[20px] xs:text-[22px] sm:text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-none whitespace-nowrap pb-2"
                  >
                    {word}
                  </span>
                </div>
              </div>
            </div>

            <div {...enter(250)}>
              <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-md leading-relaxed mb-6 sm:mb-8 font-medium">
                {HERO.summary}
              </p>
              <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                <a
                  href="#projects"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-center shrink-0"
                >
                  View Work
                </a>
                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors backdrop-blur-sm text-center shrink-0"
                >
                  <ShinyText className="text-white">View Resume</ShinyText>
                </a>
              </div>
            </div>

            <div className="w-full max-w-xl" {...enter(400)}>
              <GlowCard radius={12} bg="#050505" className="w-full">
                <TerminalBar title={PROFILE.handle} />
                <div className="p-3.5 sm:p-6 font-mono text-xs sm:text-sm space-y-2.5 sm:space-y-4 min-h-[170px] sm:min-h-[280px]">
                  {done.map(({ cmd, out }) => (
                    <div key={cmd}>
                      <div>
                        <span className="text-primary mr-2">$</span>
                        <span className="text-white font-medium">{cmd}</span>
                      </div>
                      {out.map((line) => (
                        <p key={line} className={`pl-4 ${line.startsWith("BUILD") ? "text-green-400" : "text-muted"}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                  <div>
                    <span className="text-primary mr-2">$</span>
                    <span className="text-white font-medium">{typing}</span>
                    <span className="w-2 h-4 bg-primary/80 animate-pulse inline-block align-middle ml-1" />
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>

          <div className="hidden md:flex md:relative md:flex-1 md:w-full justify-end items-end -mt-16 h-[720px] pointer-events-none z-10">
            <div className="absolute bottom-24 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-[100px] opacity-40 -z-10 animate-pulse" />
            <ScrollPortrait src={IMAGES.portrait} ready={ready} />
          </div>
        </div>
      </div>
    </section>
  );
}
