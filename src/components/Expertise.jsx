const EXPERTISE = [
  {
    icon: "architecture",
    title: "Automation",
    text: "Building scalable frameworks using Selenium & Java.",
    color: "text-primary",
    border: "",
  },
  {
    id: "api",
    icon: "api",
    title: "API Lab",
    text: "Comprehensive REST API testing with Postman & RestAssured.",
    color: "text-secondary",
    border: "border-secondary/10",
  },
  {
    id: "database",
    icon: "database",
    title: "Database",
    text: "Validating data integrity via SQL server & complex queries.",
    color: "text-tertiary",
    border: "",
  },
  {
    id: "performance",
    icon: "speed",
    title: "Performance",
    text: "Load testing and latency analysis under heavy stress.",
    color: "text-primary",
    border: "border-primary/10",
  },
  {
    icon: "touch_app",
    title: "Manual",
    text: "Exploratory & usability testing for edge-case discovery.",
    color: "text-error",
    border: "border-error/10",
  },
];

export default function Expertise() {
  return (
    <section id="automation">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase">Specializations</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">Core Expertise Dashboard</h2>
        </div>
        <button
          type="button"
          className="text-primary font-label-caps text-label-caps flex items-center gap-2 hover:translate-x-1 transition-transform"
        >
          VIEW METHODOLOGY <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {EXPERTISE.map(({ id, icon, title, text, color, border }) => (
          <div key={title} id={id} className={`glass-card p-6 rounded-xl group ${border}`}>
            <span className={`material-symbols-outlined text-4xl mb-4 group-hover:scale-110 transition-transform ${color}`}>
              {icon}
            </span>
            <h3 className="font-headline-md text-body-lg font-bold mb-2">{title}</h3>
            <p className="text-outline font-body-md text-sm">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
