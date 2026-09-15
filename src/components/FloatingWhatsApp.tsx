import { siteContent } from "../data/siteContent";

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteContent.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Diamond SS on WhatsApp"
      title="Chat with Diamond SS on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-safety text-graphite shadow-[0_10px_30px_rgba(232,135,31,0.30)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105 md:bottom-7 md:right-7"
    >
      <span className="absolute inset-0 rounded-full border border-white/30" aria-hidden="true" />
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.1-4.1A8.5 8.5 0 1 1 20.5 11.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 9.2c.2-.4.5-.4.8-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.6-.1l1.5.6c.3.1.4.3.4.5v.5c0 .3 0 .6-.4.8-.4.2-1 .3-1.5.1-2.7-.7-4.9-2.9-5.6-5.6-.2-.5-.1-1.1.1-1.5Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
