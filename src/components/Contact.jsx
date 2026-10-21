const INPUT_CLASS =
  "w-full bg-surface-container-high border-none rounded-lg focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline/30";

export default function Contact() {
  return (
    <section id="contact" className="pt-16">
      <div className="glass-card rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border-primary/10">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg mb-4">Initialize Connection</h2>
          <p className="font-body-lg text-outline">Ready to elevate your product quality standards? Let's connect.</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action="#" method="post">
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-primary" htmlFor="name">
              NAME
            </label>
            <input className={INPUT_CLASS} id="name" name="name" placeholder="Your Full Name" type="text" />
          </div>
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-primary" htmlFor="email">
              EMAIL
            </label>
            <input className={INPUT_CLASS} id="email" name="email" placeholder="professional@email.com" type="email" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="font-label-caps text-label-caps text-primary" htmlFor="message">
              TRANSMISSION
            </label>
            <textarea
              className={INPUT_CLASS}
              id="message"
              name="message"
              placeholder="Brief project scope or inquiry details..."
              rows={4}
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md font-bold hover:shadow-[0_0_30px_rgba(142,213,255,0.4)] transition-all"
            >
              SEND COMMAND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
