export default function Location() {
  return (
    <section id="location" className="bg-plate py-24 text-graphite md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs tracking-[0.25em] text-safety-dim">COMPANY LOCATION</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight md:text-4xl">
            Built for the pace of Saudi project sites.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite/70 md:text-base">
            From first mobilisation to final handover, Diamond SS brings the people, equipment, and practical site coordination needed to keep demanding work moving safely and efficiently.
          </p>

          <div className="mt-10 border-t border-plate-line pt-5">
            <p className="font-mono text-[10px] tracking-[0.24em] text-graphite/50">WHERE WE DELIVER</p>
            <p className="mt-2 font-display text-2xl text-graphite">Across Saudi Arabia</p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Saudi+Arabia"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-4 border border-safety px-5 py-3 text-sm font-medium text-safety-dim transition-colors hover:bg-safety hover:text-graphite"
          >
            Open in Google Maps
            <span aria-hidden="true" className="text-lg leading-none">-&gt;</span>
          </a>
        </div>

        <div className="md:col-span-7">
          <div className="relative overflow-hidden border border-plate-line bg-chalk p-2 shadow-[0_18px_50px_rgba(20,23,26,0.08)]">
            <img
              src="/media/location-map.svg"
              alt="Stylized map showing Diamond SS operating across Saudi Arabia"
              className="h-[340px] w-full object-cover transition duration-500 md:h-[420px]"
            />
            <div className="absolute bottom-6 left-6 border border-safety bg-graphite px-5 py-4 text-chalk shadow-lg">
              <p className="font-mono text-[10px] tracking-[0.24em] text-safety">DIAMOND SS</p>
              <p className="mt-1 font-display text-lg">Saudi Arabia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
