const TOOLS = [
  {
    name: "Claude",
    use: "Framework design, long test suites, refactoring REST Assured / Selenium code to POM standards.",
  },
  {
    name: "ChatGPT",
    use: "Test plans, scenarios, edge cases, defect report drafts and quick debugging of flaky failures.",
  },
  {
    name: "Gemini",
    use: "Requirement breakdown, test-data ideas and alternate scenario coverage for complex workflows.",
  },
  {
    name: "Cursor AI",
    use: "In-IDE automation scripting, framework scaffolding and faster iteration on Java/TestNG projects.",
  },
];

const WORKFLOWS = [
  {
    icon: "description",
    title: "Test plans",
    detail: "Draft scope, entry/exit criteria, environments and risk-based coverage from requirements — then manually refine.",
  },
  {
    icon: "account_tree",
    title: "Test scenarios",
    detail: "Generate happy-path, negative and boundary scenarios for healthcare, ERP, booking and e-commerce flows.",
  },
  {
    icon: "checklist",
    title: "Test cases",
    detail: "Expand scenarios into step-level cases with expected results, ready for JIRA / Excel and peer review.",
  },
  {
    icon: "bug_report",
    title: "Defect reports",
    detail: "Structure clear bug reports — steps, severity, evidence and environment — before filing in JIRA.",
  },
  {
    icon: "code",
    title: "Automation scripts",
    detail: "Accelerate REST Assured and Selenium/TestNG scripts; always reviewed and aligned to project coding standards.",
  },
  {
    icon: "architecture",
    title: "Framework design",
    detail: "Design modular POM frameworks, utilities and CI-friendly structure with AI assistance + manual ownership.",
  },
];

const GUARDRAILS = [
  "AI drafts → human review before use",
  "POM & project standards enforced",
  "No blind copy-paste into prod suites",
  "Used to speed coverage, not replace judgment",
];

export default function AIAutomation() {
  return (
    <section id="ai-automation" className="scroll-mt-24">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase">Lab // AI</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">AI Automation Engineer</h2>
          <p className="font-body-md text-outline mt-2 max-w-2xl">
            AI-powered tools I use to design frameworks, generate test artifacts and speed up automation — always with careful
            manual review.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {TOOLS.map(({ name }) => (
            <span
              key={name}
              className="px-3 py-1 rounded border border-primary/30 bg-primary/10 text-primary font-label-caps text-[10px] uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {TOOLS.map(({ name, use }) => (
          <div key={name} className="glass-card p-5 rounded-xl border-primary/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-[22px]">smart_toy</span>
              <h3 className="font-headline-md text-body-lg font-bold text-on-surface">{name}</h3>
            </div>
            <p className="font-body-md text-sm text-outline">{use}</p>
          </div>
        ))}
      </div>

      <h3 className="font-headline-md text-headline-md mb-4">What I build with AI</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {WORKFLOWS.map(({ icon, title, detail }) => (
          <div key={title} className="glass-card p-5 rounded-xl border-l-4 border-l-primary">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
              <h4 className="font-headline-md text-body-lg font-bold text-on-surface">{title}</h4>
            </div>
            <p className="font-body-md text-sm text-outline">{detail}</p>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl p-6 border-secondary/20">
        <h3 className="font-label-caps text-label-caps text-secondary mb-4">Quality guardrails</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {GUARDRAILS.map((item) => (
            <div key={item} className="flex gap-2 items-start font-body-md text-sm text-on-surface-variant">
              <span className="text-secondary shrink-0">&gt;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
