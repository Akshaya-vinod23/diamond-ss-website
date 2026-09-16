export default function About() {
  return (
    <section id="about" className="bg-plate py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <span className="font-mono text-xs tracking-[0.25em] text-safety-dim">
            COMPANY
          </span>
          <h2 className="font-display font-medium text-3xl md:text-4xl mt-4 leading-tight text-graphite">
            A practical contracting partner for demanding project environments.
          </h2>

          <div className="mt-8 space-y-5 text-[15px] md:text-base leading-relaxed text-graphite/80">
            <p>
              Diamond SS Contracting Services supports construction and industrial
              projects with coordinated contracting, skilled manpower, and dependable
              equipment resources from mobilization to completion.
            </p>
            <p>
              We work around the real demands of site schedules: qualified technicians,
              operators, and support labor, alongside the tools, machinery, and plant
              resources required to keep work productive, safe, and moving forward.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="overflow-hidden rounded-none border border-plate-line bg-white shadow-[0_18px_50px_rgba(20,23,26,0.08)]">
              <img
                src="/media/company-reception.jpg"
                alt="Diamond SS company reception"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-none border border-plate-line bg-white shadow-[0_18px_50px_rgba(20,23,26,0.08)]">
              <img
                src="/media/manpower.jpg"
                //"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                alt="Industrial site manpower and equipment"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-5">
            <div className="border-t border-plate-line pt-4">
              <p className="font-display text-2xl text-graphite">Contracted</p>
              <p className="text-sm text-graphite/60 mt-1">Scopes coordinated around your programme and site needs.</p>
            </div>
            <div className="border-t border-plate-line pt-4">
              <p className="font-display text-2xl text-graphite">Capable</p>
              <p className="text-sm text-graphite/60 mt-1">Trade-qualified personnel ready for site deployment.</p>
            </div>
            <div className="border-t border-plate-line pt-4">
              <p className="font-display text-2xl text-graphite">Equipped</p>
              <p className="text-sm text-graphite/60 mt-1">Machinery and tools matched to scope and duration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
