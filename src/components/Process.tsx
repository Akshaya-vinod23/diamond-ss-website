const STEPS = [
  {
    n: "01",
    title: "Share the requirement",
    body: "Outline the work scope, manpower need, equipment requirements, location, and project duration.",
  },
  {
    n: "02",
    title: "Build the solution",
    body: "Diamond SS shapes the contracting approach and identifies the right technicians, operators, and plant.",
  },
  {
    n: "03",
    title: "Plan the mobilisation",
    body: "People, equipment, and site activities are scheduled against the programme for a coordinated start.",
  },
  {
    n: "04",
    title: "Deliver and support",
    body: "Our team stays aligned with the assignment, supporting safe progress through completion and handover.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-graphite py-24 text-chalk md:py-32">
      <div className="absolute inset-0 grid-dark opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,141,54,0.10),transparent_38%)]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs tracking-[0.25em] text-safety-dim">
            HOW IT WORKS
          </span>
          <h2 className="font-display font-medium text-3xl md:text-4xl mt-4 leading-tight text-chalk">
            From requirement to coordinated delivery on site.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {STEPS.map((s, index) => (
            <div
              key={s.n}
              className="group relative border border-[#2d2d2d] bg-[#121212] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs tracking-[0.25em] text-safety-dim">{s.n}</span>
                <span className="flex h-8 w-8 items-center justify-center border border-safety text-[10px] font-mono text-safety">
                  {index + 1}
                </span>
              </div>

              <h3 className="font-display text-xl text-chalk mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed text-chalk/70">{s.body}</p>

              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-safety-dim">
                  <svg width="26" height="12" viewBox="0 0 26 12" fill="none" aria-hidden="true">
                    <path d="M0 6h20m0 0L14 0m6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
