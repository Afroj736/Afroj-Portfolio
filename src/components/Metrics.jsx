const RELEASE_BARS = ["h-[60%]", "h-[75%]", "h-[90%]", "h-[85%]"];

function MetricCard({ label, value, valueClass, children }) {
  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <span className="font-label-caps text-label-caps text-outline">{label}</span>
        <span className={`terminal-glow ${valueClass}`}>{value}</span>
      </div>
      {children}
    </div>
  );
}

export default function Metrics() {
  return (
    <section id="metrics">
      <h2 className="font-headline-lg text-headline-lg mb-8">QA Metrics Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard label="RELEASE QUALITY" value="98.4%" valueClass="text-secondary">
          <div className="h-24 flex items-end gap-1">
            {RELEASE_BARS.map((height, i) => (
              <div key={i} className={`flex-1 bg-secondary/20 rounded-t hover:bg-secondary/40 transition-all ${height}`} />
            ))}
            <div className="flex-1 bg-secondary h-[98%] hover:brightness-110 transition-all" />
          </div>
        </MetricCard>

        <MetricCard label="BUG DENSITY" value="0.12/KLOC" valueClass="text-error">
          <div className="h-24 flex items-center justify-center">
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[12%] bg-error" />
            </div>
          </div>
        </MetricCard>

        <MetricCard label="TEST COVERAGE" value="82%" valueClass="text-primary">
          <div className="h-24 relative">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              <path d="M0,35 Q25,30 50,15 T100,5" fill="none" stroke="#8ed5ff" strokeWidth="2" />
              <path d="M0,35 Q25,30 50,15 T100,5 L100,40 L0,40 Z" fill="url(#coverage-grad)" opacity="0.1" />
              <defs>
                <linearGradient id="coverage-grad" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#8ed5ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8ed5ff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </MetricCard>
      </div>
    </section>
  );
}
