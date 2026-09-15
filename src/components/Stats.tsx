import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 8, suffix: "+", label: "Years in operation", note: "Established 2016" },
  { value: 150, suffix: "+", label: "Projects supported", note: "Across Saudi Arabia" },
  { value: 4, suffix: "", label: "Core service lines", note: "Integrated delivery" },
  { value: 100, suffix: "%", label: "Saudi market focus", note: "Vision 2030 aligned" },
];

function useCountUp(end: number, duration = 1600, isActive = false) {
  const [count, setCount] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    let start: number | null = null;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));

      if (progress < 1) {
        frame.current = window.requestAnimationFrame(tick);
      }
    };

    frame.current = window.requestAnimationFrame(tick);

    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, [end, duration, isActive]);

  return count;
}

function StatCard({ value, suffix, label, note }: (typeof metrics)[number]) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const count = useCountUp(value, 1500, isVisible);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="group relative overflow-hidden border border-[#2d2d2d] bg-[#121212] px-6 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#171717] sm:px-8 md:px-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,141,54,0.10),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e88d36] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="font-display text-5xl font-medium leading-none tracking-[-0.06em] text-[#e88d36] sm:text-6xl">
          {count}
          {suffix}
        </div>

        <div className="mt-5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#f3efe7]/70">
          {label}
        </div>

        <div className="mt-2 text-sm text-[#f3efe7]/60">{note}</div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section aria-label="Company metrics" className="relative overflow-hidden bg-graphite py-20 md:py-24">
      <div className="absolute inset-0 grid-dark opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,141,54,0.10),transparent_38%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#e88d36]">
              Our impact
            </div>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium leading-[0.97] tracking-[-0.04em] text-[#f3efe7] md:text-5xl">
              Trusted performance across every stage of delivery.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#f3efe7]/70 md:text-base">
            Diamond SS brings together manpower, equipment, and project coordination to help
            clients move safely, efficiently, and confidently across active sites.
          </p>
        </div>

        <div className="grid gap-0 border border-[#2d2d2d] bg-[#121212]/80 md:grid-cols-4">
          {metrics.map((metric) => (
            <StatCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
