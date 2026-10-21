import { FEATURED_PROJECTS, PROJECTS } from "../data/portfolio.js";
import { ExternalIcon } from "./icons.jsx";
import { GlowCard, Reveal, SectionHeading, TiltCard } from "./ui.jsx";

function Tag({ children }) {
  return (
    <span className="text-[10px] font-mono text-muted/60 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/5 bg-white/[0.02] group-hover:border-white/10 transition-colors">
      {children}
    </span>
  );
}

function Slug({ index, slug, accent }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <span className="text-xs font-mono text-muted/60">{String(index).padStart(2, "0")}</span>
      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary">/</span>
      <span className={`text-[10px] font-mono font-bold tracking-[0.2em] ${accent ? "text-primary" : "text-white/50"}`}>{slug}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        <SectionHeading index="03" title="Projects" subtitle="selected works" />

        <div className="grid md:grid-cols-2 gap-6 mb-6 sm:mb-4">
          {FEATURED_PROJECTS.map((project, i) => (
            <Reveal key={project.slug} direction={i === 0 ? "left" : "right"} delay={i * 100} className="h-full">
              <TiltCard>
                <GlowCard className="group h-full min-h-[260px] sm:min-h-[280px] flex flex-col">
                  <div className="flex items-center justify-between px-5 sm:px-6 pt-5 sm:pt-6">
                    <Slug index={i + 1} slug={project.slug} accent />
                    {project.link && (
                      <a href={project.link} className="p-2 -m-2 text-muted/50 hover:text-white transition-colors" aria-label="Project link">
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-end px-5 sm:px-6 pb-5 sm:pb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5 sm:mb-6 max-w-md">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 sm:mt-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100} className="h-full">
              <TiltCard>
                <GlowCard className="group h-full min-h-[200px] sm:min-h-[220px]">
                  <div className="flex flex-col h-full p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <Slug index={FEATURED_PROJECTS.length + i + 1} slug={project.slug} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                    <p className="text-sm text-muted/80 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
