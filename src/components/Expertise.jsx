const EXPERTISE = [
  {
    icon: "touch_app",
    title: "Manual",
    text: "Exploratory & usability testing for edge-case discovery.",
    color: "text-error",
    accent: "text-error",
    border: "border-error/10",
    prompt: "$ manual_suite --list",
    terminal: [
      "[RUN] Smoke testing",
      "[RUN] Sanity testing",
      "[RUN] Regression testing",
      "[RUN] Retesting",
      "[RUN] Ad-hoc testing",
      "[RUN] Exploratory testing",
      "[RUN] Gorilla testing",
      "[RUN] Monkey testing",
      "[RUN] Integration / E2E",
      "[PASS] Coverage matrix ready",
    ],
  },
  {
    href: "#database",
    icon: "database",
    title: "Database",
    text: "SQL testing to validate data integrity, joins, and backend consistency.",
    color: "text-tertiary",
    accent: "text-tertiary",
    border: "",
    prompt: "$ sql_checks --validate",
    terminal: [
      "[SQL] SELECT / JOIN validation",
      "[SQL] Aggregates & counts",
      "[SQL] CRUD data integrity",
      "[SQL] UI vs DB sync",
      "[SQL] API vs DB sync",
      "[SQL] Null / constraint checks",
      "[SQL] Referential integrity",
      "[SQL] Transaction rollback",
      "[PASS] Backend data verified",
    ],
  },
  {
    href: "#api",
    icon: "api",
    title: "API Testing",
    text: "Manual API checks with Postman; automation with RestAssured.",
    color: "text-secondary",
    accent: "text-secondary",
    border: "border-secondary/10",
    prompt: "$ api_lab --suite=rest",
    terminal: [
      "[API] Postman collections",
      "[API] REST Assured automation",
      "[API] Status code checks",
      "[API] JSON schema validation",
      "[API] Auth / JWT / Token",
      "[API] Positive scenarios",
      "[API] Negative scenarios",
      "[API] Swagger contract review",
      "[PASS] Endpoints verified",
    ],
  },
  {
    icon: "architecture",
    title: "UI Automation",
    text: "UI automation frameworks with Selenium using Java.",
    color: "text-primary",
    accent: "text-primary",
    border: "",
    prompt: "$ mvn test -Dsuite=UI",
    terminal: [
      "[UI] Selenium WebDriver",
      "[UI] Java + TestNG",
      "[UI] Page Object Model",
      "[UI] Data-driven tests",
      "[UI] Cross-browser runs",
      "[UI] Maven build",
      "[UI] Jenkins CI trigger",
      "[PASS] BUILD SUCCESS",
    ],
  },
  {
    href: "#performance",
    icon: "speed",
    title: "Performance Testing",
    text: "Stress, load, and volume testing to measure system stability under pressure.",
    color: "text-primary",
    accent: "text-primary",
    border: "border-primary/10",
    prompt: "$ perf_run --profile=full",
    terminal: [
      "[PERF] Load testing",
      "[PERF] Stress testing",
      "[PERF] Volume testing",
      "[PERF] Spike testing",
      "[PERF] Endurance / soak",
      "[PERF] Latency & throughput",
      "[PERF] Bottleneck analysis",
      "[PASS] Stability report ready",
    ],
  },
  {
    href: "#ai-automation",
    icon: "smart_toy",
    title: "AI Automation",
    text: "Claude, ChatGPT, Gemini & Cursor AI for plans, cases, defects and frameworks.",
    color: "text-secondary",
    accent: "text-secondary",
    border: "border-secondary/10",
    prompt: "$ ai_lab --assist=qa",
    terminal: [
      "[AI] Claude — frameworks",
      "[AI] ChatGPT — test plans",
      "[AI] Gemini — scenarios",
      "[AI] Cursor — scripts",
      "[AI] Test cases & defects",
      "[AI] REST Assured / Selenium",
      "[PASS] Human review applied",
    ],
  },
];

export default function Expertise() {
  return (
    <section id="automation">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase">Specializations</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">Core Expertise Dashboard</h2>
          <p className="font-body-md text-outline mt-2 text-sm">
            Hover for the terminal · click API / Database / Performance to open that lab.
          </p>
        </div>
        <a
          href="#api"
          className="text-primary font-label-caps text-label-caps flex items-center gap-2 hover:translate-x-1 transition-transform"
        >
          OPEN LABS <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {EXPERTISE.map(({ href, icon, title, text, color, accent, border, prompt, terminal }) => {
          const CardTag = href ? "a" : "div";
          const cardProps = href ? { href } : {};
          return (
          <CardTag key={title} {...cardProps} className={`glass-card p-6 rounded-xl group relative overflow-visible block ${border}`}>
            <span className={`material-symbols-outlined text-4xl mb-4 group-hover:scale-110 transition-transform ${color}`}>
              {icon}
            </span>
            <h3 className="font-headline-md text-body-lg font-bold mb-2">{title}</h3>
            <p className="text-outline font-body-md text-sm">{text}</p>
            {href && (
              <span className={`mt-3 inline-flex items-center gap-1 font-label-caps text-[10px] ${color}`}>
                VIEW DETAILS <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            )}

            {/* Terminal on hover */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] w-[min(280px,80vw)] z-30 opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300">
              <div className="rounded-xl overflow-hidden border border-primary/30 bg-surface-container-lowest shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                <div className="bg-surface-container-high px-3 py-2 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-error/50" />
                    <div className="w-2 h-2 rounded-full bg-secondary/50" />
                    <div className="w-2 h-2 rounded-full bg-primary/50" />
                  </div>
                  <span className="font-code-sm text-code-sm text-outline mx-auto uppercase tracking-widest truncate">
                    {title}_terminal.log
                  </span>
                </div>
                <div className="p-3 font-code-sm text-code-sm space-y-1 max-h-56 overflow-hidden">
                  <p className={`${accent} terminal-glow`}>{prompt}</p>
                  {terminal.map((line) => (
                    <p key={line} className="text-on-surface-variant">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </CardTag>
          );
        })}
      </div>
    </section>
  );
}
