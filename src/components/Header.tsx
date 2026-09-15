import { useEffect, useState } from "react";
const LINKS = [
  { href: "#about", label: "Company" },
  { href: "#services", label: "Services" },
  { href: "#services", label: "Manpower & Equipment" },
  { href: "#process", label: "Process" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-graphite/95 backdrop-blur border-b border-steel-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden border border-safety/60 bg-chalk p-1">
            <img
              src="/media/diamond-logo.png"
              alt="Diamond SS Contracting Services"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="font-display text-chalk tracking-tight text-[15px] leading-tight">
            DIAMOND SS
            <span className="block text-[9px] tracking-[0.2em] text-safety font-mono">
              CONTRACTING SERVICES
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-plate-line hover:text-chalk transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-safety text-safety hover:bg-safety hover:text-graphite transition-colors text-sm font-medium px-4 py-2"
        >
          Start a Project
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-chalk p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-graphite border-t border-steel-line px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-plate-line text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-safety text-sm font-medium"
          >
            Start a Project →
          </a>
        </div>
      )}
    </header>
  );
}
