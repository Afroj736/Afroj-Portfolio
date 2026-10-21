import { useEffect, useState } from "react";
import { IMAGES, NAV, SOCIALS } from "../data/portfolio.js";

function useActiveSection() {
  const [active, setActive] = useState(NAV[0].id);

  useEffect(() => {
    const sections = NAV.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function DesktopNav({ ready, onOpenPalette }) {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pt-6 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-8 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "bg-black/60 border-white/10 shadow-2xl shadow-black/50" : "bg-black/20 border-white/5"
        } ${ready ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24"}`}
      >
        <a className="relative group flex items-center pl-2" href="#hero" aria-label="Home">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10 group-hover:border-primary/50 transition-colors shadow-2xl bg-black">
            <img src={IMAGES.logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </a>

        <div className="flex items-center gap-1 relative">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-colors duration-300 z-10 ${
                active === id ? "text-white" : "text-muted hover:text-white"
              }`}
            >
              <span
                className={`absolute inset-0 bg-white/10 border border-white/20 rounded-full -z-10 transition-all duration-300 ${
                  active === id ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 pr-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className="flex items-center justify-center font-mono text-[11px] font-bold text-muted hover:text-primary px-3 py-1.5 rounded-md border border-white/10 hover:border-white/20 bg-white/5 transition-all cursor-pointer"
            aria-label="Open command palette"
          >
            ⌘K
          </button>
        </div>
      </nav>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className={`md:hidden ${open ? "sm-open" : ""}`}>
      <header className="fixed top-0 inset-x-0 z-[60] flex items-center justify-between px-5 py-4">
        <img src={IMAGES.logo} alt="Logo" className="w-9 h-9 rounded-full border border-white/10 object-cover" />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-full backdrop-blur-md border transition-colors ${
            open ? "text-black bg-white border-white" : "text-white bg-black/30 border-white/10"
          }`}
        >
          <span className="relative h-5 overflow-hidden">
            <span className={`flex flex-col transition-transform duration-500 ${open ? "-translate-y-5" : ""}`}>
              <span className="h-5 leading-5">Menu</span>
              <span className="h-5 leading-5">Close</span>
            </span>
          </span>
          <span className={`relative w-3.5 h-3.5 transition-transform duration-500 ${open ? "rotate-[225deg]" : ""}`}>
            <span className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-current rounded" />
            <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-current rounded" />
          </span>
        </button>
      </header>

      <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div className="sm-layer absolute inset-y-0 right-0 w-full bg-[#18181b]" />
        <div className="sm-layer absolute inset-y-0 right-0 w-full bg-[#3f3f46]" style={{ transitionDelay: "0.07s" }} />
        <aside
          id="mobile-menu-panel"
          aria-hidden={!open}
          className="sm-layer absolute inset-y-0 right-0 w-full bg-[#020202] flex flex-col justify-between px-6 pt-28 pb-10"
          style={{ transitionDelay: "0.14s" }}
        >
          <ul className="space-y-1">
            {NAV.map(({ id, label, mobileLabel }, i) => (
              <li key={id} className="overflow-hidden">
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="sm-item group flex items-baseline gap-3 text-5xl font-black uppercase tracking-tight text-white hover:text-primary transition-colors"
                  style={{ transitionDelay: open ? `${0.3 + i * 0.06}s` : "0s" }}
                >
                  {mobileLabel || label}
                  <span className="text-xs font-mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="sm-item" style={{ transitionDelay: open ? "0.7s" : "0s" }}>
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Socials</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {SOCIALS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={open ? 0 : -1}
                    className="text-white/80 font-medium hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function Navbar({ ready, onOpenPalette }) {
  return (
    <>
      <MobileMenu />
      <DesktopNav ready={ready} onOpenPalette={onOpenPalette} />
    </>
  );
}
