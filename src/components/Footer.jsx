import { SOCIALS } from "../data/portfolio.js";
import { SOCIAL_ICONS } from "./icons.jsx";
import BugCrawler from "./BugCrawler.jsx";
import { Reveal, ShinyText } from "./ui.jsx";

const HOVER = {
  GitHub: "hover:text-white hover:border-white/20 hover:bg-white/5",
  LinkedIn: "hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/10",
  Email: "hover:text-primary hover:border-primary/30 hover:bg-primary/10",
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-10 pb-8 relative z-10">
      <BugCrawler />
      <Reveal className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-white/20">© {new Date().getFullYear()} Afroj</p>
        <div className="flex items-center gap-5">
          {SOCIALS.map(({ label, href }) => {
            const Icon = SOCIAL_ICONS[label];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/40 transition-all duration-300 ${HOVER[label]}`}
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <p className="text-xs font-mono text-white/20">
          <ShinyText className="text-white/20">hunting defects since 2024</ShinyText>
        </p>
      </Reveal>
    </footer>
  );
}
