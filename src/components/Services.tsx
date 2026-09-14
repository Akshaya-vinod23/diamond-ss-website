const SERVICES = [
  {
    code: "C-01",
    title: "Contracting Services",
    body:
      "End-to-end support for construction and industrial scopes, from work planning and site coordination through execution and handover.",
    image: "/media/contracting.png",
  },
  {
    code: "M-01",
    title: "Manpower Supply",
    body:
      "Qualified technicians, operators, skilled trades, and site support teams mobilized to match project requirements, shift schedules, and site conditions.",
    image: "/media/manpower-supply.jpg",
  },
  {
    code: "E-01",
    title: "Equipment Supply",
    body:
      "Construction and industrial equipment, tools, and machinery supplied or arranged to support execution, productivity, and safe site operations.",
    images: [
      "/media/equipment-telehandler.jpg",
      "/media/equipment-crane.jpg",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-graphite text-chalk py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-dark opacity-60" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-safety">
              OUR SERVICES
            </span>
            <h2 className="font-display font-medium text-3xl md:text-4xl mt-4">
              Contracting solutions backed by people and equipment.
            </h2>
          </div>
          <p className="text-plate-line/70 text-sm max-w-xs">
            Diamond SS brings together contracting delivery, manpower deployment, and equipment support for active project sites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((s) => (
            <div key={s.code} className="group overflow-hidden border border-steel-line bg-graphite">
              {s.images ? (
                <div className="grid grid-cols-2 gap-px bg-steel-line">
                  {s.images.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${s.title} ${index + 1}`}
                      className="h-64 w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-64 w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
              )}
              <div className="p-8">
                <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-safety mb-5">
                  <span>{s.code}</span>
                  <span className="w-6 h-6 border border-steel-line flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-safety" />
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-plate-line/75 text-sm leading-relaxed">
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
