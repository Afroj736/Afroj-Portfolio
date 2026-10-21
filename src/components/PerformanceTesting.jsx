const CHECKS = [
  {
    title: "Load testing",
    detail: "Measured response time and throughput under expected concurrent user load for critical journeys.",
  },
  {
    title: "Stress testing",
    detail: "Pushed beyond normal capacity to find breaking points and how the system fails under pressure.",
  },
  {
    title: "Volume testing",
    detail: "Validated behaviour with large data sets — records, invoices, stock rows and report generation.",
  },
  {
    title: "Spike testing",
    detail: "Checked sudden traffic bursts (e.g. login/API peaks) for timeouts, errors and recovery.",
  },
  {
    title: "Endurance / soak",
    detail: "Looked for memory leaks and slow degradation during longer continuous test runs.",
  },
  {
    title: "Latency & bottlenecks",
    detail: "Tracked slow API/UI points and flagged high-latency paths (auth, dashboards, heavy reports).",
  },
];

const SIGNALS = [
  { label: "Response time", value: "p95 tracked" },
  { label: "Error rate", value: "under load" },
  { label: "Throughput", value: "req / sec" },
  { label: "Stability", value: "soak runs" },
];

export default function PerformanceTesting() {
  return (
    <section id="performance" className="scroll-mt-24">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase">Lab // Performance</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">Performance Testing</h2>
          <p className="font-body-md text-outline mt-2 max-w-2xl">
            How I evaluate system stability — load, stress, volume and related performance checks under pressure.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Load", "Stress", "Volume", "Spike", "Endurance"].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded border border-primary/30 bg-primary/10 text-primary font-label-caps text-[10px] uppercase"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {SIGNALS.map(({ label, value }) => (
          <div key={label} className="glass-card p-4 rounded-xl text-center border-primary/10">
            <div className="font-label-caps text-label-caps text-outline mb-1">{label}</div>
            <div className="font-code-md text-code-md text-primary">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CHECKS.map(({ title, detail }) => (
          <div key={title} className="glass-card p-5 rounded-xl border-l-4 border-l-primary">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-[22px]">speed</span>
              <h3 className="font-headline-md text-body-lg font-bold text-on-surface">{title}</h3>
            </div>
            <p className="font-body-md text-sm text-outline">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
