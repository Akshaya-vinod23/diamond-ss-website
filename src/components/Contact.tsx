import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/akshayavinodkunnathu@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });

      if (!response.ok) throw new Error("Unable to send enquiry");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="bg-graphite text-chalk py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-50" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="font-mono text-xs tracking-[0.25em] text-safety">
            START A PROJECT
          </span>
          <h2 className="font-display font-medium text-3xl md:text-4xl mt-4 leading-tight">
            Tell us what needs to be done. We'll help deliver it.
          </h2>
          <p className="mt-6 text-plate-line/75 text-sm leading-relaxed max-w-sm">
            Share your scope, location, manpower requirements, equipment needs,
            and target dates. Diamond SS will come back with a practical next step.
          </p>

          <dl className="mt-12 space-y-5 font-mono text-sm">
            <div>
              <dt className="text-[11px] tracking-widest text-plate-line/50">EMAIL</dt>
              <dd className="mt-1 text-chalk">akshayavinodkunnathu@gmail.com</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-widest text-plate-line/50">PHONE</dt>
              <dd className="mt-1 text-chalk">+971 [ office number ]</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-widest text-plate-line/50">HOURS</dt>
              <dd className="mt-1 text-chalk">Sun – Thu, 08:00 – 18:00</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {sent ? (
            <div className="border border-safety p-8">
              <p className="font-display text-xl mb-2">Enquiry submitted successfully.</p>
              <p className="text-plate-line/75 text-sm">
                Thank you. The Diamond SS team will review your requirements and
                contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_subject" value="New Diamond SS Project Enquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Company" name="company" />
                <Field label="Contact name" name="name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <Field label="Project scope and requirements" name="scope" as="textarea" />
              <button
                type="submit"
                disabled={sending}
                className="bg-safety text-graphite font-medium text-sm px-6 py-3.5 hover:bg-safety-dim transition-colors"
              >
                {sending ? "Sending Enquiry..." : "Send Project Enquiry"}
              </button>
              {error && (
                <p className="text-sm text-red-300">
                  We could not send your enquiry. Please try again or email us directly.
                </p>
              )}
            </form>
          )}
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
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
}) {
  const common =
    "w-full bg-transparent border border-steel-line focus:border-safety px-4 py-3 text-sm text-chalk placeholder:text-plate-line/40 outline-none transition-colors";
  return (
    <label className="block">
      <span className="block font-mono text-[11px] tracking-widest text-plate-line/50 mb-2">
        {label.toUpperCase()}
      </span>
      {as === "textarea" ? (
        <textarea name={name} rows={4} className={common} />
      ) : (
        <input name={name} type={type} className={common} />
      )}
    </label>
  );
}
