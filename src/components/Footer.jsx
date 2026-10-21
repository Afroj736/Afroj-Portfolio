const FOOTER_LINKS = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "GitHub" },
  { href: "#", label: "StackOverflow" },
  { href: "#", label: "Download Resume" },
];

export default function Footer() {
  return (
    <footer className="w-full py-base border-t border-white/10 mt-16 opacity-80 hover:opacity-100 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile lg:px-margin-desktop py-8 gap-4 bg-surface-container-lowest">
        <div className="font-label-caps text-label-caps text-primary">AFROJ RAJ // QA COMMAND CENTER</div>
        <div className="font-code-sm text-code-sm text-outline">
          © {new Date().getFullYear()} Afroj Raj // QA Command Center
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map(({ href, label }) => (
            <a key={label} href={href} className="text-outline hover:text-secondary transition-colors font-code-sm text-code-sm">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
