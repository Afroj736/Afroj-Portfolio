const COLUMNS = [
  {
    title: "TO DO",
    count: "03",
    cards: [
      {
        severity: "CRITICAL",
        title: "Auth bypass via malformed JWT header",
        key: "PH-1044",
        accent: "border-l-error",
        severityColor: "text-error",
        icon: "person",
        iconClass: "text-outline",
      },
      {
        severity: "MEDIUM",
        title: "Mobile menu flickering on Safari 16.x",
        key: "PH-1052",
        accent: "border-l-tertiary",
        severityColor: "text-tertiary",
        icon: "person",
        iconClass: "text-outline",
      },
    ],
  },
  {
    title: "IN PROGRESS",
    count: "01",
    cards: [
      {
        severity: "HIGH",
        title: "Performance lag on dashboard widget load",
        key: "PH-1039",
        accent: "border-l-primary",
        severityColor: "text-primary",
        icon: "sync",
        iconClass: "text-primary animate-spin",
      },
    ],
  },
  {
    title: "VALIDATED",
    count: "02",
    cards: [
      {
        severity: "LOW",
        title: "Typo in footer copyright notice",
        key: "PH-1011",
        accent: "border-l-secondary opacity-60",
        severityColor: "text-secondary",
        icon: "check_circle",
        iconClass: "text-secondary",
      },
    ],
  },
];

export default function Defects() {
  return (
    <section id="defects">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="font-headline-lg text-headline-lg">Defect Management</h2>
        <div className="flex gap-4">
          <span className="font-label-caps text-label-caps text-outline flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-error" /> 2 CRITICAL
          </span>
          <span className="font-label-caps text-label-caps text-outline flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" /> 14 RESOLVED
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COLUMNS.map(({ title, count, cards }) => (
          <div key={title} className="space-y-4">
            <div className="font-label-caps text-label-caps text-outline bg-surface-container-high p-3 rounded flex justify-between">
              {title} <span>({count})</span>
            </div>
            {cards.map((card) => (
              <div key={card.key} className={`glass-card p-4 rounded-lg border-l-4 ${card.accent}`}>
                <div className={`font-label-caps text-[10px] mb-2 ${card.severityColor}`}>{card.severity}</div>
                <h4 className="font-body-md font-bold text-on-surface text-sm mb-2">{card.title}</h4>
                <div className="flex justify-between items-center">
                  <span className="font-code-sm text-code-sm text-outline">{card.key}</span>
                  <span className={`material-symbols-outlined text-[18px] ${card.iconClass}`}>{card.icon}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
