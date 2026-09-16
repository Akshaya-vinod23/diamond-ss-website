import { siteContent } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-plate-line bg-plate text-graphite/70">
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden border border-safety/60 bg-chalk p-1">
                <img
                  src="/media/diamond-logo.png"
                  alt="Diamond SS Contracting Services"
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <p className="font-display text-sm text-graphite">DIAMOND SS</p>
                <p className="font-mono text-[9px] tracking-[0.25em] text-safety-dim">CONTRACTING SERVICES</p>
              </div>
            </div>
              <p className="mt-7 max-w-sm text-sm leading-relaxed text-graphite/65">
              A practical contracting partner for demanding project environments, bringing together manpower, equipment, and coordinated delivery.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-safety-dim">Services</p>
            <nav className="mt-5 space-y-3 text-sm" aria-label="Footer services">
              <a href="#services" className="block transition-colors hover:text-graphite">Contracting Services</a>
              <a href="#services" className="block transition-colors hover:text-graphite">Manpower Supply</a>
              <a href="#services" className="block transition-colors hover:text-graphite">Equipment Supply</a>
              
            </nav>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-safety-dim">Contact</p>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed">
              <a href={`mailto:${siteContent.email}`} className="block transition-colors hover:text-graphite">
                {siteContent.email}
              </a>
              <p>{siteContent.phone}</p>
              <p>Saudi Arabia</p>
              <p>Sat - Thu, 8:00 AM - 9:00 PM</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-plate-line pt-5 text-xs md:flex-row md:items-center md:justify-between">
          <p className="font-mono">© {new Date().getFullYear()} Diamond SS Contracting Services. All rights reserved.</p>
          <a href="#contact" className="font-mono text-safety-dim transition-colors hover:text-graphite">
            Start a project -&gt;
          </a>
        </div>
      </div>

      <a
        href="#contact"
        aria-label="Start a project"
        title="Start a project"
        className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center border border-safety bg-safety text-graphite transition-transform hover:-translate-y-1 md:bottom-8 md:right-8"
      >
        <svg width="21" height="21" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect x="3.5" y="5.5" width="21" height="17" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="m5 8 8.2 6.1a1.35 1.35 0 0 0 1.6 0L23 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </a>
    </footer>
  );
}
