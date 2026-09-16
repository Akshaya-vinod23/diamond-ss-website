import { useEffect, useState } from "react";

type Slide = {
  id: number;
  kind: "image" | "video";
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  video?: string;
  buttonText: string;
  buttonHref: string;
};

const slides: Slide[] = [
  {
    id: 1,
    kind: "image",
    eyebrow: "CONTRACTING, MANPOWER & EQUIPMENT",
    title: "One dependable partner for the work, the workforce, and the equipment.",
    subtitle:
      "Diamond SS delivers practical contracting solutions, skilled manpower, and project-ready equipment for demanding construction and industrial environments.",
    image:"/media/equipment.jpg",
      //"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    buttonText: "Discuss Your Project",
    buttonHref: "#contact",
  },
  {
    id: 2,
    kind: "image",
    eyebrow: "PROJECT DELIVERY",
    title: "Build with capable crews, clear coordination, and the right equipment.",
    subtitle:
      "From planned contracting packages to manpower deployment and equipment supply, our teams scale with your programme and site requirements.",
    image:  "/media/contracting.jpg",
      //"https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    buttonText: "Explore Services",
    buttonHref: "#services",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section id="top" className="relative overflow-hidden bg-graphite text-chalk">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            {slide.kind === "video" ? (
              <video
                className="h-full w-full object-cover"
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,23,26,0.92)_0%,rgba(20,23,26,0.7)_28%,rgba(20,23,26,0.25)_100%)]" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-safety md:text-xs">
          <span className="inline-block h-px w-8 bg-safety" />
          {activeSlide.eyebrow}
        </div>

        <div className="max-w-3xl">
          <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {activeSlide.title}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-plate-line md:text-lg">
            {activeSlide.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={activeSlide.buttonHref}
              className="bg-safety px-6 py-3.5 text-sm font-medium text-graphite transition-colors hover:bg-safety-dim"
            >
              {activeSlide.buttonText}
            </a>
            <a
              href="#services"
              className="border border-steel-line px-6 py-3.5 text-sm text-chalk transition-colors hover:border-chalk"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="border-t border-steel-line pt-4">
              <dt className="text-[11px] tracking-[0.2em] text-plate-line/70">SERVICES</dt>
              <dd className="mt-1.5 text-sm text-chalk">Contracting &amp; Site Delivery</dd>
            </div>
            <div className="border-t border-steel-line pt-4">
              <dt className="text-[11px] tracking-[0.2em] text-plate-line/70">RESOURCES</dt>
              <dd className="mt-1.5 text-sm text-chalk">Manpower + Equipment</dd>
            </div>
            <div className="border-t border-steel-line pt-4">
              <dt className="text-[11px] tracking-[0.2em] text-plate-line/70">PRIORITY</dt>
              <dd className="mt-1.5 text-sm text-chalk">Safe, Reliable Delivery</dd>
            </div>
          </dl>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-10 bg-safety" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
