const NAV_ITEMS = [
  { href: "#overview", icon: "dashboard", label: "Overview", active: true },
  { href: "#automation", icon: "settings_input_component", label: "Automation" },
  { href: "#api", icon: "api", label: "API Lab" },
  { href: "#database", icon: "database", label: "Database" },
  { href: "#performance", icon: "speed", label: "Performance" },
  { href: "#defects", icon: "bug_report", label: "Defects" },
  { href: "#contact", icon: "mail", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "#", icon: "link", label: "LinkedIn" },
  { href: "#", icon: "code", label: "GitHub" },
];

export default function Sidebar({ open, onNavigate }) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-64 z-40 bg-surface-container-low/90 backdrop-blur-md border-r border-white/5 flex flex-col py-widget-padding shadow-2xl transition-transform duration-200 lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-6 mb-10">
        <h1 className="font-headline-md text-headline-md text-primary font-bold tracking-tighter">AFROJ RAJ</h1>
        <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 uppercase">QA Command Center</p>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map(({ href, icon, label, active }) => (
          <a
            key={href}
            href={href}
            onClick={onNavigate}
            className={`flex items-center px-6 py-3 font-label-caps text-label-caps transition-all ${
              active
                ? "bg-primary/10 text-primary border-r-2 border-primary"
                : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
            }`}
          >
            <span
              className="material-symbols-outlined mr-3"
              style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {icon}
            </span>
            {label}
          </a>
        ))}
      </nav>

      <div className="px-6 mt-auto space-y-4">
        <a
          href="#contact"
          onClick={onNavigate}
          className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-caps text-label-caps hover:shadow-[0_0_20px_rgba(142,213,255,0.4)] transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">work</span>
          Hire Me
        </a>
        <div className="pt-6 border-t border-white/5 space-y-2">
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              className="flex items-center text-outline hover:text-primary transition-colors font-label-caps text-label-caps"
            >
              <span className="material-symbols-outlined mr-3 text-[18px]">{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
