const CHECKS = [
  {
    title: "UI vs database sync",
    detail: "Confirmed values shown in healthcare, ERP and booking UIs matched rows stored in the database.",
  },
  {
    title: "API vs database sync",
    detail: "Verified API payloads against SQL queries so create/update/delete left consistent backend state.",
  },
  {
    title: "Joins & aggregates",
    detail: "Validated multi-table joins, counts and summaries used in reports, ledgers and stock views.",
  },
  {
    title: "CRUD integrity",
    detail: "Checked insert/update/delete paths for patient records, invoices, parties and inventory masters.",
  },
  {
    title: "Constraints & nulls",
    detail: "Tested required fields, unique keys and null handling to catch data-quality defects before release.",
  },
  {
    title: "Referential integrity",
    detail: "Ensured related entities (patient↔notes, party↔invoice, SKU↔stock) stayed linked after transactions.",
  },
  {
    title: "Billing & invoice calculations",
    detail: "SQL cross-checks on invoice totals, tax and line items against ERP UI and report outputs.",
  },
  {
    title: "Clinical / HL7 record data",
    detail: "Validated EMR/EHR patient-record and clinical-note persistence after audio-to-text note workflows.",
  },
];

const QUERIES = [
  "SELECT + JOIN validation",
  "COUNT / SUM aggregates",
  "CRUD after UI actions",
  "Foreign-key checks",
  "Stock vs ledger balance",
  "Transaction rollback cases",
];

export default function DatabaseTesting() {
  return (
    <section id="database" className="scroll-mt-24">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
        <div>
          <span className="font-label-caps text-label-caps text-tertiary uppercase">Lab // Database</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">Database Testing</h2>
          <p className="font-body-md text-outline mt-2 max-w-2xl">
            Backend SQL validation to prove UI and API data integrity across healthcare, ERP and booking systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["SQL", "Joins", "Aggregates", "Data Integrity", "Backend Validation"].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded border border-tertiary/30 bg-tertiary/10 text-tertiary font-label-caps text-[10px] uppercase"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {CHECKS.map(({ title, detail }) => (
            <div key={title} className="glass-card p-5 rounded-xl border-l-4 border-l-tertiary">
              <h3 className="font-headline-md text-body-lg font-bold text-on-surface mb-2">{title}</h3>
              <p className="font-body-md text-sm text-outline">{detail}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl overflow-hidden border-tertiary/20 flex flex-col">
          <div className="bg-surface-container-high px-4 py-2 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-error/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary/50" />
            </div>
            <span className="font-code-sm text-code-sm text-outline mx-auto uppercase tracking-widest">sql_checks.log</span>
          </div>
          <div className="p-5 font-code-sm text-code-sm space-y-2 flex-1">
            <p className="text-tertiary terminal-glow">$ sql_checks --validate --all</p>
            {QUERIES.map((line) => (
              <p key={line} className="text-on-surface-variant">
                [SQL] {line}
              </p>
            ))}
            <p className="text-secondary terminal-glow pt-2">[PASS] Backend data verified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
