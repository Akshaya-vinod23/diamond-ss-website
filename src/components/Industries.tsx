const AREAS = [
  "Building & Civil Works",
  "Industrial Projects",
  "Infrastructure & Utilities",
  "Commercial Developments",
  "Maintenance & Repairs",
  "Shutdown & Turnaround",
];

export default function Industries() {
  return (
    <section className="bg-plate py-24 md:py-28 border-t border-plate-line">
      <div className="max-w-6xl mx-auto px-6">
        <span className="font-mono text-xs tracking-[0.25em] text-safety-dim">
          WHERE WE WORK
        </span>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-graphite/65">
          Flexible support for the environments where reliable delivery, capable people, and available equipment matter most.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
          {AREAS.map((a) => (
            <span
              key={a}
              className="font-display text-2xl md:text-3xl text-graphite/25 hover:text-graphite transition-colors"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
