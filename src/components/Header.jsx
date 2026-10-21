const PROFILE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCFl-b23FA53529NCqE2WpFBU-22JJzm8ExbdC7qn6Dny9CYh17411mo0_AQJbLjsTOM7RZD1tf9ZKUCp_CKkS8tx-JCHSltFZWLpTeTTtBY6nrEZwj0-4Fl5SO3HcAZwP97dcAsHp4ikPnw6zgI2-tmxclQd8mcCHho4REMf7r74Qz12VbUH17HXv6qfPmoVkpgiB6Pp6Fn2CKh69x9ljQl3Sn2RhfD90Wleo8bT8m213evqgBq_E3LnXzNnNjepsB08sfWRrHlPf8";

const TOP_LINKS = [
  { href: "#overview", label: "Dashboard", active: true },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#metrics", label: "Metrics" },
];

export default function Header({ onToggleMenu }) {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
      <div className="flex justify-between items-center px-margin-mobile lg:px-margin-desktop py-4 max-w-container-max mx-auto h-16">
        <div className="flex items-center gap-4 lg:gap-8">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={onToggleMenu}
            className="lg:hidden material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors"
          >
            menu
          </button>
          <span className="font-label-caps text-label-caps text-secondary flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            SYSTEM READY
          </span>
          <nav className="hidden md:flex gap-6">
            {TOP_LINKS.map(({ href, label, active }) => (
              <a
                key={href}
                href={href}
                className={
                  active
                    ? "font-body-md text-body-md text-primary border-b-2 border-primary pb-1"
                    : "font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                }
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="hidden sm:inline material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            terminal
          </button>
          <button type="button" className="hidden sm:inline material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            notifications
          </button>
          <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-primary/20">
            <img alt="Afroj Raj Profile" className="w-full h-full object-cover" src={PROFILE_IMAGE} />
          </div>
          <a
            href="#contact"
            className="bg-primary-container text-on-primary-fixed-variant px-4 py-1.5 rounded-full font-label-caps text-[12px] font-bold hover:bg-primary transition-all"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}
