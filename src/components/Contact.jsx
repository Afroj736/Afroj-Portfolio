import { useState } from "react";

const INPUT_CLASS =
  "w-full bg-surface-container-high border-none rounded-lg focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline/30 disabled:opacity-60";

const CONTACT_EMAIL = "afroj.aero2020@dscet.ac.in";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const INITIAL = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          _subject: `Portfolio contact from ${form.name.trim()}`,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message. Please try again.");
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Unable to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="pt-16">
      <div className="glass-card rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border-primary/10">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg mb-4">Contact Me</h2>
          <p className="font-body-lg text-outline">
            Have a role, project, or question? Send a message and I&apos;ll get back to you.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center space-y-6 py-8">
            <p className="font-headline-md text-headline-md text-secondary">Message sent successfully.</p>
            <p className="font-body-md text-outline">Thanks for reaching out — I&apos;ll reply to your email soon.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-caps text-label-caps hover:shadow-[0_0_30px_rgba(142,213,255,0.4)] transition-all"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-primary" htmlFor="name">
                NAME
              </label>
              <input
                className={INPUT_CLASS}
                id="name"
                name="name"
                placeholder="Your Full Name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                disabled={status === "sending"}
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-primary" htmlFor="email">
                EMAIL
              </label>
              <input
                className={INPUT_CLASS}
                id="email"
                name="email"
                placeholder="your@email.com"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={update("email")}
                disabled={status === "sending"}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="font-label-caps text-label-caps text-primary" htmlFor="phone">
                PHONE
              </label>
              <input
                className={INPUT_CLASS}
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={update("phone")}
                disabled={status === "sending"}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="font-label-caps text-label-caps text-primary" htmlFor="message">
                MESSAGE
              </label>
              <textarea
                className={INPUT_CLASS}
                id="message"
                name="message"
                placeholder="Brief project scope or inquiry details..."
                rows={4}
                required
                value={form.message}
                onChange={update("message")}
                disabled={status === "sending"}
              />
            </div>

            {status === "error" && (
              <p className="md:col-span-2 font-body-md text-sm text-error" role="alert">
                {errorMessage}
              </p>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md font-bold hover:shadow-[0_0_30px_rgba(142,213,255,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
