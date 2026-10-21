const TIMELINE = [
  {
    title: "QA Software Tester — Blulabs IT Solutions Pvt. Ltd.",
    sector: "HEALTHCARE · ERP · BOOKING · MOHALI",
    sectorColor: "text-secondary",
    period: "01/2025 — Present",
    current: true,
    points: [
      "Tested healthcare, ERP and booking apps end to end: EMR/EHR, HL7 workflows, clinical notes, billing/invoicing and appointment scheduling.",
      "Automated 60+ regression tests with Selenium, Java and TestNG (POM); integrated with Jenkins for nightly CI/CD runs.",
      "Built REST Assured onboarding API suite; validated 50+ endpoints with Postman/Swagger and backend SQL checks.",
      "Identified and reported 70+ pre-release defects; led bug triage and retesting in Agile sprints.",
    ],
  },
  {
    title: "QA Software Tester — Levon Techno Pvt. Ltd.",
    sector: "E-COMMERCE · IOT · BANGALORE",
    sectorColor: "text-primary",
    period: "11/2024 — 03/2025",
    current: false,
    points: [
      "Performed functional and regression testing on E-commerce and IoT applications (cart, checkout, payment, device-data workflows).",
      "Ran automated suites through Jenkins pipelines to support continuous integration.",
      "Reported high-severity UI and backend defects in JIRA and verified fixes before release.",
      "Carried out cross-browser and API testing with backend SQL verification.",
    ],
  },
  {
    title: "Software Testing Certification — SSquare IT Solution, Pune",
    sector: "CERTIFICATION",
    sectorColor: "text-tertiary",
    period: "07/2024 — 11/2024",
    current: false,
    points: [
      "Manual Testing: SDLC, STLC, test plans/scenarios/cases, BVA & equivalence partitioning, defect life cycle, Agile/Scrum, JIRA.",
      "Automation & Tools: Java (OOP), Selenium WebDriver, TestNG, Maven, POM, Jenkins, Git, Postman, REST Assured, SQL.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="font-headline-lg text-headline-lg mb-8">Work Experience Timeline</h2>
      <div className="space-y-4">
        {TIMELINE.map(({ title, sector, sectorColor, period, current, points }) => (
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
                    <span className="text-primary shrink-0">&gt;</span> {point}
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
