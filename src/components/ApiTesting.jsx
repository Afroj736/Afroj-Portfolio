import ApiConsole from "./ApiConsole.jsx";

const CHECKS = [
  {
    title: "Auth & session APIs",
    detail: "Token/JWT login, session create/refresh/expire, unauthorized and invalid-token negative paths.",
  },
  {
    title: "User onboarding workflow",
    detail: "REST Assured suite covering complete onboarding APIs — status codes, payloads and step-by-step flow integrity.",
  },
  {
    title: "50+ endpoint validation",
    detail: "Postman + Swagger checks for GET/POST/PUT/DELETE: response body, headers, schema and error contracts.",
  },
  {
    title: "Positive & negative scenarios",
    detail: "Valid data, missing fields, bad JSON, wrong methods and boundary values to catch contract breaks early.",
  },
  {
    title: "OTP / notification APIs",
    detail: "Validated email/SMS OTP provider migration across EU and US regions with no auth-flow regression.",
  },
  {
    title: "API ↔ DB consistency",
    detail: "Cross-checked API responses against SQL results so UI/API data matched the database before release.",
  },
];

const TOOLS = ["Postman", "Swagger", "REST Assured", "JSON Schema", "JWT / Token Auth", "Jenkins CI"];

export default function ApiTesting() {
  return (
    <section id="api" className="scroll-mt-24 space-y-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <span className="font-label-caps text-label-caps text-secondary uppercase">Lab // API</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">API Testing</h2>
          <p className="font-body-md text-outline mt-2 max-w-2xl">
            What I validated on REST APIs — manual collections in Postman and automation with REST Assured.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded border border-secondary/30 bg-secondary/10 text-secondary font-label-caps text-[10px] uppercase"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CHECKS.map(({ title, detail }) => (
          <div key={title} className="glass-card p-5 rounded-xl border-l-4 border-l-secondary">
            <h3 className="font-headline-md text-body-lg font-bold text-on-surface mb-2">{title}</h3>
            <p className="font-body-md text-sm text-outline">{detail}</p>
          </div>
        ))}
      </div>

      <ApiConsole embedded />
    </section>
  );
}
