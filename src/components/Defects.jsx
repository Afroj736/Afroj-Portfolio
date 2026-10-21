const LIFECYCLE = [
  { stage: "New", icon: "add_circle", detail: "Defect logged with steps, evidence & environment" },
  { stage: "Assigned", icon: "person_add", detail: "Triaged and owned by a developer" },
  { stage: "Open", icon: "pending", detail: "Under investigation / in progress" },
  { stage: "Fixed", icon: "build", detail: "Code change completed; ready for QA" },
  { stage: "Retest", icon: "replay", detail: "QA verifies fix on build" },
  { stage: "Closed", icon: "check_circle", detail: "Verified pass; defect closed" },
  { stage: "Reopened", icon: "restart_alt", detail: "Fix failed; sent back to Open" },
];

const SEVERITY = [
  {
    level: "Critical",
    color: "text-error border-error/40 bg-error/10",
    meaning: "Blocks core flow or causes data loss / security risk (e.g. crash, auth bypass).",
  },
  {
    level: "Major",
    color: "text-primary border-primary/40 bg-primary/10",
    meaning: "Major feature broken with a workaround; high user impact.",
  },
  {
    level: "Minor",
    color: "text-tertiary border-tertiary/40 bg-tertiary/10",
    meaning: "Limited impact; feature works with inconvenience or UI issues.",
  },
  {
    level: "Trivial",
    color: "text-outline border-white/20 bg-white/5",
    meaning: "Cosmetic / text issues with negligible functional impact.",
  },
];

const PRIORITY = [
  {
    level: "P1 — Urgent",
    color: "text-error border-error/40 bg-error/10",
    meaning: "Fix immediately; release blocker or production outage.",
  },
  {
    level: "P2 — High",
    color: "text-primary border-primary/40 bg-primary/10",
    meaning: "Fix in current sprint; important before next release.",
  },
  {
    level: "P3 — Medium",
    color: "text-secondary border-secondary/40 bg-secondary/10",
    meaning: "Schedule soon; not blocking release if mitigated.",
  },
  {
    level: "P4 — Low",
    color: "text-outline border-white/20 bg-white/5",
    meaning: "Backlog / nice-to-have; address when capacity allows.",
  },
];

export default function Defects() {
  return (
    <section id="defects">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase">Quality Process</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">Defect Management</h2>
        </div>
        <p className="font-body-md text-outline max-w-md sm:text-right">
          Bug lifecycle, severity (impact) and priority (urgency) as practiced in JIRA triage.
        </p>
      </div>

      {/* Bug lifecycle */}
      <div className="glass-card rounded-xl p-6 lg:p-8 mb-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h3 className="font-headline-md text-headline-md text-on-surface">Bug Lifecycle</h3>
          <span className="font-label-caps text-label-caps text-outline">NEW → CLOSED</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {LIFECYCLE.map(({ stage, icon, detail }, index) => (
            <div key={stage} className="relative rounded-lg border border-white/5 bg-surface-container-high/60 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
                <span className="font-label-caps text-label-caps text-primary">{stage}</span>
              </div>
              <p className="font-code-sm text-code-sm text-outline leading-snug">{detail}</p>
              {index < LIFECYCLE.length - 1 && (
                <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-outline/40 material-symbols-outlined text-sm z-10">
                  chevron_right
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="font-code-sm text-code-sm text-outline mt-4">
          Failed retest → <span className="text-error">Reopened</span> → back to Open until a clean Retest → Closed.
        </p>
      </div>

      {/* Severity & Priority */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-headline-md text-body-lg font-bold mb-1">Severity</h3>
          <p className="font-code-sm text-code-sm text-outline mb-5">How badly the defect impacts the system / user.</p>
          <div className="space-y-3">
            {SEVERITY.map(({ level, color, meaning }) => (
              <div key={level} className={`rounded-lg border p-4 ${color}`}>
                <div className="font-label-caps text-label-caps mb-1">{level}</div>
                <p className="font-body-md text-sm text-on-surface-variant">{meaning}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <h3 className="font-headline-md text-body-lg font-bold mb-1">Priority</h3>
          <p className="font-code-sm text-code-sm text-outline mb-5">How soon the defect should be fixed (business urgency).</p>
          <div className="space-y-3">
            {PRIORITY.map(({ level, color, meaning }) => (
              <div key={level} className={`rounded-lg border p-4 ${color}`}>
                <div className="font-label-caps text-label-caps mb-1">{level}</div>
                <p className="font-body-md text-sm text-on-surface-variant">{meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Severity vs Priority tip */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 lg:p-6">
        <h3 className="font-label-caps text-label-caps text-primary mb-3">Severity vs Priority</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body-md text-sm text-on-surface-variant">
          <p>
            <span className="text-on-surface font-bold">High severity + Low priority:</span> Rare crash in an unused admin
            screen — serious impact, but can wait.
          </p>
          <p>
            <span className="text-on-surface font-bold">Low severity + High priority:</span> Logo/spelling error on the
            marketing homepage before a launch — small impact, must fix now.
          </p>
        </div>
      </div>
    </section>
  );
}
