import { useState } from "react";
import { PROFILE, SOCIALS } from "../data/portfolio.js";
import { SOCIAL_ICONS } from "./icons.jsx";
import { GlowCard, Reveal, SectionHeading, TerminalBar } from "./ui.jsx";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${PROFILE.email}`;

const FIELDS = [
  { name: "name", label: "Your Name", type: "text", placeholder: "Enter your name", autoComplete: "name" },
  { name: "email", label: "Your Email", type: "email", placeholder: "your@email.com", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", placeholder: "e.g. QA role at your company" },
];

const INITIAL = { name: "", email: "", subject: "", message: "" };

const CONTACT_LINKS = [
  ...SOCIALS.filter(({ label }) => label === "Email"),
  ...SOCIALS.filter(({ label }) => label !== "Email"),
  { label: "Resume", href: PROFILE.resume, display: "Download PDF Resume" },
];

const STATUS_TEXT = {
  idle: "Ready to send.",
  sending: "Sending...",
  success: "Message sent — I'll get back to you soon.",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: form.subject.trim() || `Portfolio contact from ${form.name.trim()}`,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "Unable to send message. Please try again.");
      setStatus("success");
      setForm(INITIAL);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Unable to send message. Please try again.");
    }
  };

  const rowClass = (name) =>
    `relative py-3.5 border-b transition-colors duration-300 ${focused === name ? "border-primary/60" : "border-white/[0.08]"}`;
  const inputClass =
    "w-full bg-transparent border-0 p-0 text-white font-mono text-base focus:outline-none focus:ring-0 placeholder:text-white/15 disabled:opacity-60";

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        <SectionHeading index="05" title="Contact" subtitle="get in touch" />

        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
          <Reveal direction="left" className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4">
                Let&apos;s ship something
                <br />
                <span className="text-primary">bug-free.</span>
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Hiring for QA, need a release tested, or just want to talk testing? Drop me a message.
              </p>
            </div>
            <div className="space-y-3 pt-2">
              {CONTACT_LINKS.map(({ label, href, display }) => {
                const Icon = SOCIAL_ICONS[label];
                const external = !href.startsWith("mailto:");
                return (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-primary/40 hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/30 transition-colors shrink-0">
                      <Icon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono tracking-widest text-muted uppercase">{label}</p>
                      <p className="text-xs sm:text-sm text-white/70 group-hover:text-white transition-colors truncate">{display}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal direction="right" className="md:col-span-3">
            <GlowCard radius={12} bg="#050505">
              <TerminalBar title="GET IN TOUCH" className="!bg-[#0a0a0a] uppercase tracking-wider" />
              <div className="p-4 sm:p-6">
                <form onSubmit={handleSubmit}>
                  {FIELDS.map(({ name, label, ...input }) => (
                    <div key={name} className={rowClass(name)}>
                      <label htmlFor={`contact-${name}`} className="block text-[10px] tracking-[0.2em] uppercase font-mono text-muted mb-2">
                        {label}
                      </label>
                      <input
                        id={`contact-${name}`}
                        name={name}
                        required={name !== "subject"}
                        value={form[name]}
                        onChange={update(name)}
                        onFocus={() => setFocused(name)}
                        onBlur={() => setFocused(null)}
                        disabled={status === "sending"}
                        className={inputClass}
                        {...input}
                      />
                    </div>
                  ))}
                  <div className={rowClass("message")}>
                    <label htmlFor="contact-message" className="block text-[10px] tracking-[0.2em] uppercase font-mono text-muted mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={2}
                      value={form.message}
                      onChange={update("message")}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      disabled={status === "sending"}
                      placeholder="Tell me about the role, project or release..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p
                      className={`text-xs font-mono ${
                        status === "error" ? "text-rose-400" : status === "success" ? "text-green-400" : "text-white/20"
                      }`}
                      role={status === "error" ? "alert" : undefined}
                    >
                      {status === "error" ? errorMessage : STATUS_TEXT[status]}
                    </p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold font-mono text-sm uppercase tracking-wider transition-all shadow-lg bg-primary text-white hover:bg-primary/90 shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
