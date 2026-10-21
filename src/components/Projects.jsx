const PROJECTS = [
  {
    title: "Playback Health Pro",
    theme: "healthcare-pro",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    logo: "/brands/playback-health-pro.png",
    tags: ["Healthcare", "EMR/EHR", "API"],
    description:
      "Validated audio-to-text clinical note workflows end to end: transcription accuracy, medical note creation/edit flows, and successful push of notes into EHR/EMR systems. Covered functional, regression and API checks for HL7/patient-record integrations, negative cases (failed transcription, incomplete notes), and data consistency between UI and backend.",
    tagClass: "bg-sky-500/25 text-sky-200 border-sky-300/40",
    buttonClass: "border-sky-400/40 text-sky-300 hover:bg-sky-500 hover:text-white",
  },
  {
    title: "Playback Health",
    theme: "healthcare",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=80",
    logo: "/brands/playback-health.png",
    tags: ["Patient Records", "Manual", "SQL"],
    description:
      "QA for patient invite and patient-record management: invitation email/SMS delivery, onboarding status, access permissions, and CRUD of patient profiles. Verified record integrity with backend SQL, cross-checked UI vs API payloads, and regression-tested invite/reinvite and inactive-patient scenarios before release.",
    tagClass: "bg-rose-500/25 text-rose-200 border-rose-300/40",
    buttonClass: "border-rose-400/40 text-rose-300 hover:bg-rose-500 hover:text-white",
  },
  {
    title: "E-Commerce Platforms",
    theme: "ecommerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    tags: ["OpenCart", "Sauce Labs", "Flipkart"],
    description:
      "End-to-end QA across OpenCart, Sauce Labs demo store and Flipkart-style retail flows: login, catalog search, cart, checkout and order confirmation. Automated purchase journeys with Selenium/TestNG (positive and negative paths), cross-browser runs, and Jenkins-triggered regression to catch pricing, inventory and payment-edge defects early.",
    tagClass: "bg-amber-500/25 text-amber-200 border-amber-300/40",
    buttonClass: "border-amber-400/40 text-amber-300 hover:bg-amber-500 hover:text-on-primary",
  },
  {
    title: "ERP Applications",
    theme: "erp",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    tags: ["Invoicing", "Inventory", "SQL"],
    description:
      "Quality assurance for ERP modules covering invoice creation, inventory and parties management, ledger generation, stock summary and financial reports. Validated calculation accuracy, party master data, stock movements vs ledger balances, and report exports with UI, API and SQL cross-checks to prevent billing and inventory mismatches.",
    tagClass: "bg-emerald-500/25 text-emerald-200 border-emerald-300/40",
    buttonClass: "border-emerald-400/40 text-emerald-300 hover:bg-emerald-500 hover:text-white",
  },
];

const THEME_OVERLAY = {
  "healthcare-pro": "from-[#061a2e]/85 via-[#0c4a6e]/45 to-transparent",
  healthcare: "from-[#2a0f1a]/85 via-[#7c2d3e]/40 to-transparent",
  ecommerce: "from-[#1c1917]/85 via-[#9a3412]/40 to-transparent",
  erp: "from-[#022c22]/85 via-[#065f46]/40 to-transparent",
};

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="font-headline-lg text-headline-lg mb-8">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.title} className="glass-card rounded-xl overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img
                alt={`${project.title} background`}
                src={project.image}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${THEME_OVERLAY[project.theme]}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/20" />

              {project.logo && (
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg max-w-[55%]">
                  <img alt={`${project.title} logo`} src={project.logo} className="max-h-9 w-auto object-contain" />
                </div>
              )}

              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="font-headline-md text-headline-md text-white drop-shadow">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`text-[10px] px-2 py-0.5 rounded border uppercase backdrop-blur-sm ${project.tagClass}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="font-body-md text-outline mb-6">{project.description}</p>
              <button
                type="button"
                className={`w-full py-3 rounded-lg border font-label-caps text-label-caps transition-all ${project.buttonClass}`}
              >
                VIEW PROJECT
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
