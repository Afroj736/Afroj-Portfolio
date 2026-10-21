import { useEffect, useState } from "react";

const LOGS = [
  "[INFO] Initializing Test Suite v4.2.0...",
  "[INFO] Loading Drivers for Chrome, Firefox, Edge...",
  "[RUN] Executing SmokeTests.java...",
  "[PASS] loginValidation(valid_creds) -> 244ms",
  "[PASS] checkoutFlow(guest_user) -> 1.2s",
  "[WARN] apiLatencyCheck(auth_server) -> 890ms (High)",
  "[RUN] Regression_Batch_01 started...",
  "[PASS] dataIntegrityCheck(production) -> 45ms",
  "[INFO] Parallel thread pool initialized...",
  "[RUN] mobileResponsivenessCheck(iPhone15)...",
  "[PASS] mobileResponsivenessCheck(iPhone15) -> 3.4s",
];
const INITIAL_LOG_COUNT = 8;
const MAX_VISIBLE_LOGS = 20;

const STATS = [
  { value: "2+", label: "Years Exp", color: "text-primary", border: "" },
  { value: "1000+", label: "Bugs Found", color: "text-secondary", border: "border-secondary/20" },
  { value: "500+", label: "Test Cases", color: "text-error", border: "border-error/20" },
];

function useTestSimulation() {
  const [lines, setLines] = useState(() =>
    LOGS.slice(0, INITIAL_LOG_COUNT).map((text, id) => ({ id, text }))
  );

  useEffect(() => {
    let next = 0;
    const timer = setInterval(() => {
      setLines((prev) => {
        const id = prev[prev.length - 1].id + 1;
        const updated = [...prev, { id, text: LOGS[next % LOGS.length] }];
        return updated.slice(-MAX_VISIBLE_LOGS);
      });
      next++;
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return lines;
}

export default function Hero() {
  const lines = useTestSimulation();

  return (
    <section
      id="overview"
      className="relative overflow-hidden rounded-xl bg-surface-container-low border border-white/5 p-8 lg:p-12 min-h-[500px] flex items-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="font-code-sm text-code-sm text-secondary p-8 space-y-1 opacity-40">
          {lines.map((line) => (
            <div key={line.id}>{line.text}</div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display-lg text-display-lg text-primary mb-2">Afroj Raj</h2>
          <h3 className="font-headline-lg text-headline-lg text-on-surface-variant mb-8">Quality Assurance Engineer</h3>
          <p className="font-body-lg text-body-lg text-outline max-w-md mb-10">
            Engineering zero-defect digital experiences through automated precision and rigorous performance intelligence.
          </p>
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {STATS.map(({ value, label, color, border }) => (
              <div key={label} className={`glass-card p-4 rounded-lg text-center ${border}`}>
                <div className={`font-display-lg text-headline-lg mb-1 ${color}`}>{value}</div>
                <div className="font-label-caps text-label-caps text-outline">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative w-full aspect-video glass-card rounded-xl overflow-hidden border-primary/20 flex flex-col">
            <div className="bg-surface-container-high px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error/50" />
                <div className="w-3 h-3 rounded-full bg-secondary/50" />
                <div className="w-3 h-3 rounded-full bg-primary/50" />
              </div>
              <span className="font-code-sm text-code-sm text-outline mx-auto uppercase tracking-widest">
                Automation_Console.log
              </span>
            </div>
            <div className="p-6 font-code-md text-code-md space-y-2 overflow-hidden flex-1">
              <p className="text-secondary terminal-glow">$ mvn test -Dsuite=Regression</p>
              <p className="text-on-surface-variant">Scanning for projects...</p>
              <p className="text-on-surface-variant">-------------------------------------------------------</p>
              <p className="text-on-surface-variant"> T E S T S</p>
              <p className="text-on-surface-variant">-------------------------------------------------------</p>
              <p className="text-on-surface-variant">Running com.qa.automation.CheckoutTest</p>
              <p className="text-secondary">Tests run: 142, Failures: 0, Errors: 0, Skipped: 0</p>
              <p className="text-primary animate-pulse-glow">BUILD SUCCESS [02:14 min]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
