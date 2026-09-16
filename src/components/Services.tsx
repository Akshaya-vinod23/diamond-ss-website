const SERVICES = [
  {
    code: "C-01",
    title: "Contracting Services",
    body:
      "End-to-end support for construction and industrial scopes, from work planning and site coordination through execution and handover.",
    images: ["/media/contracting.png"],
  },
  {
    code: "M-01",
    title: "Manpower Supply",
    body:
      "Qualified technicians, operators, skilled trades, and site support teams mobilized to match project requirements, shift schedules, and site conditions.",
    images: ["/media/manpower-supply.jpg"],
  },
  {
    code: "E-01",
    title: "Equipment Supply",
    body:
      "Construction and industrial equipment, tools, and machinery supplied or arranged to support execution, productivity, and safe site operations.",
    images: [
      "/media/equipment-telehandler.jpg",
      "/media/equipment-crane.jpg",
      "/media/equipment-forklift.jpg",
      "/media/equipment-flatbed-truck.jpg",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-plate py-24 text-graphite md:py-32">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-xs tracking-[0.25em] text-safety">
            OUR SERVICES
          </span>
          <h2 className="font-display font-medium text-3xl md:text-4xl mt-4 leading-tight">
            Contracting solutions backed by people and equipment.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-graphite/65 md:text-base">
            Each of our three service lines can be engaged on its own or combined into a single
            package: a standalone equipment hire, a manpower deployment for a fixed shift pattern,
            or a full contracting scope that pulls all three together. Pricing, crew size, and
            equipment mix scale with your site conditions, schedule, and budget.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((s, index) => (
            <div
              key={s.code}
              className="group overflow-hidden border border-plate-line bg-white shadow-[0_18px_50px_rgba(20,23,26,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                {s.images.length > 1 ? (
                  <div className="grid h-full grid-cols-2 gap-px bg-plate-line">
                    {s.images.map((image, i) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${s.title} ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={s.images[0]}
                    alt={s.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="p-8">
                <div className="mb-5 flex items-center justify-between font-mono text-[11px] tracking-widest text-safety-dim">
                  <span>{s.code}</span>
                  <span className="flex h-6 w-6 items-center justify-center border border-safety text-[10px] font-mono text-safety">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-graphite/65 text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
