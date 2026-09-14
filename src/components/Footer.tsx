export default function Footer() {
  return (
    <footer className="bg-graphite text-plate-line/60 border-t border-steel-line py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center overflow-hidden bg-white">
            <img
              src="/media/diamond-logo.png"
              alt="Diamond SS Contracting Services"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="font-mono text-xs tracking-widest">
            DIAMOND SS | CONTRACTING, MANPOWER & EQUIPMENT
          </span>
        </div>
        <p className="text-xs font-mono">
          © {new Date().getFullYear()} Diamond SS Contracting Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
