const JOBS = [
  {
    title: "QA Engineer — Levon Techno",
    sector: "HEALTHCARE SECTOR",
    sectorColor: "text-secondary",
    period: "2021 — PRESENT",
    current: true,
    points: [
      "Spearheaded automation framework for Playback Health application.",
      "Reduced regression cycle time by 60% through parallel execution.",
      "Implemented continuous testing in Jenkins CI/CD pipelines.",
    ],
  },
  {
    title: "Jr. QA Specialist — 86 Labs IT",
    sector: "E-COMMERCE",
    sectorColor: "text-primary",
    period: "2019 — 2021",
    current: false,
    points: [
      "Conducted manual exploratory testing on cross-browser platforms.",
      "Developed 500+ comprehensive test cases for order management.",
      "Managed defect lifecycle using Jira and collaborated with developers.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="font-headline-lg text-headline-lg mb-8">Work Experience Timeline</h2>
      <div className="space-y-4">
        {JOBS.map(({ title, sector, sectorColor, period, current, points }) => (
          <div key={title} className="relative group">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20" />
            <div
              className={`glass-card ml-12 p-6 rounded-xl relative ${
                current ? "" : "opacity-80 hover:opacity-100 transition-opacity"
              }`}
            >
              <div
                className={`absolute -left-[3.25rem] top-6 w-4 h-4 rounded-full border-4 border-surface ${
                  current ? "bg-primary shadow-[0_0_10px_rgba(142,213,255,1)]" : "bg-surface-container-highest"
                }`}
              />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
                  <span className={`font-label-caps text-label-caps ${sectorColor}`}>{sector}</span>
                </div>
                <span className="font-code-md text-code-md text-outline">{period}</span>
              </div>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                {points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-primary">&gt;</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
