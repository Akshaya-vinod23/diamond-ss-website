import { useState } from "react";
import { siteContent } from "../data/siteContent";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);
    const form = e.currentTarget;

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error("Missing Web3Forms access key");

      const formData = new FormData(form);
      formData.append("access_key", accessKey);
      formData.append("subject", `New ${siteContent.legalName} website enquiry`);
      formData.append("from_name", siteContent.legalName);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Unable to send enquiry");
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-graphite px-6 py-24 text-graphite md:py-32">
      <div className="absolute inset-0 grid-dark opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,141,54,0.10),transparent_38%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl overflow-hidden border border-plate-line bg-chalk shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <div className="grid md:grid-cols-[1.15fr_0.85fr]">
          <div className="p-7 sm:p-10 md:p-14">
            {sent ? (
              <div className="flex min-h-[420px] flex-col justify-center border-l-2 border-safety pl-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-safety-dim">
                  Enquiry received
                </p>
                <p className="mt-3 font-display text-3xl">We&apos;ll be in touch.</p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite/70">
                  Thank you. The Diamond SS team will review your requirements and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="to_email" value={siteContent.email} />
                <div className="mb-9 border-b border-plate-line pb-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-safety-dim">
                    Start a project
                  </p>
                  <h2 className="mt-3 max-w-md font-display text-3xl leading-tight md:text-4xl">
                    Tell us what needs to be done.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-graphite/65">
                    Share your scope, location, manpower requirements, equipment needs, and target dates.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <SelectField label="Service required" name="service_required" />
                </div>
                <Field label="Message" name="message" as="textarea" required />

                <div className="flex flex-col items-start justify-between gap-5 border-t border-plate-line pt-6 sm:flex-row sm:items-center">
                  <p className="max-w-xs text-xs leading-relaxed text-graphite/50">
                    We&apos;ll come back with a practical next step.
                  </p>
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-4 rounded-full bg-safety px-6 py-3.5 text-sm font-medium text-graphite transition-colors hover:bg-safety-dim disabled:cursor-wait disabled:opacity-60"
                  >
                    {sending ? "Sending Enquiry..." : "Send Project Enquiry"}
                    <span aria-hidden="true" className="text-lg leading-none">-&gt;</span>
                  </button>
                </div>
                {error && (
                  <p className="text-sm text-red-700">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </form>
            )}
          </div>

          <aside className="relative overflow-hidden bg-graphite p-7 text-chalk sm:p-10 md:p-14">
            <div className="absolute inset-0 grid-dark opacity-40" aria-hidden="true" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-safety/30" aria-hidden="true" />
            <div className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full border border-safety/60 text-safety" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3.5" y="5.5" width="21" height="17" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="m5 8 8.2 6.1a1.35 1.35 0 0 0 1.6 0L23 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="relative flex h-full min-h-[420px] flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-safety">
                  Diamond SS
                </p>
                <h3 className="mt-5 max-w-xs font-display text-3xl leading-tight md:text-4xl">
                  Let&apos;s talk about your next site.
                </h3>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-plate-line/70">
                  A practical contracting partner for demanding project environments across Saudi Arabia.
                </p>
              </div>

              <img
                src="/media/company-reception.jpg"
                alt="Diamond SS company reception"
                className="my-10 h-44 w-full object-cover grayscale brightness-90 contrast-110 md:h-48"
              />

              <dl className="mt-12 space-y-6 font-mono text-sm">
                <div>
                  <dt className="text-[10px] tracking-[0.24em] text-plate-line/45">EMAIL</dt>
                  <dd className="mt-2 break-words text-chalk">{siteContent.email}</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.24em] text-plate-line/45">PHONE</dt>
                  <dd className="mt-2 text-chalk">{siteContent.phone}</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.24em] text-plate-line/45">ADDRESS</dt>
                  <dd className="mt-2 leading-relaxed text-chalk">
                    Building {siteContent.address.building}, {siteContent.address.street}<br />
                    {siteContent.address.district}, {siteContent.address.city} {siteContent.address.postalCode}<br />
                    {siteContent.address.country}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.24em] text-plate-line/45">HOURS</dt>
                  <dd className="mt-2 text-chalk">Sun - Thu, 08:00 - 18:00</dd>
                </div>
              </dl>

              <a
                href={siteContent.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-safety px-5 py-3 text-xs font-medium text-safety transition-colors hover:bg-safety hover:text-graphite"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  as,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  placeholder?: string;
  required?: boolean;
}) {
  const common =
    "w-full border border-plate-line bg-plate px-5 text-sm text-graphite outline-none transition-all placeholder:text-graphite/35 hover:border-graphite/30 focus:border-safety focus:bg-white focus:ring-2 focus:ring-safety/15";
  return (
    <label className="group block">
      <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-graphite/55 transition-colors group-focus-within:text-safety-dim">
        {label.toUpperCase()}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          placeholder={placeholder}
          className={`${common} min-h-32 resize-y rounded-3xl py-4`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`${common} h-12 rounded-full`}
        />
      )}
    </label>
  );
}

function SelectField({ label, name }: { label: string; name: string }) {
  const common =
    "w-full border border-plate-line bg-plate px-5 text-sm text-graphite outline-none transition-all hover:border-graphite/30 focus:border-safety focus:bg-white focus:ring-2 focus:ring-safety/15";

  return (
    <label className="group block">
      <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-graphite/55 transition-colors group-focus-within:text-safety-dim">
        {label.toUpperCase()}
      </span>
      <select name={name} required className={`${common} h-12 rounded-full`} defaultValue="">
        <option value="" disabled>Select a service</option>
        <option value="Construction">Construction</option>
        <option value="Equipment Rental">Equipment Rental</option>
        <option value="Material Supply">Material Supply</option>
        <option value="Manpower Services">Manpower Services</option>
      </select>
    </label>
  );
}
