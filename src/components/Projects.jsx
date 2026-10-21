const PROJECTS = [
  {
    title: "Playback Health",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZRh8_gXLZn042vW3-zWEVbkgE-yo3aGzvpqt7TCfOBzMoLvzK-iV3cd3DAI0E7IROyb94Y7xXgo9lreHeKsKJYZ2degG4H4J5ofK96Ja7vjQrKeplYsTK2-JBcQy7ItHIuc4s60zuB3ZqlHvdHnqYv1GfjdfOixajmImnc2UXAvuuhC9pRKxluOjoSZaZklX64HQR5bHObp_Yinxrk_S56RxjzctwgYA60I4wX9w6tqr1DKyrJ96UKwhFqAyOQIHERLcLugjleeO",
    tags: ["Selenium", "Java", "Jenkins"],
    description:
      "Designed and executed a robust automation architecture for a clinical collaboration platform, ensuring HIPAA compliance and data accuracy.",
    tagClass: "bg-primary/20 text-primary border-primary/30",
    buttonClass: "border-primary/30 text-primary hover:bg-primary hover:text-on-primary",
  },
  {
    title: "E-Commerce Platform",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkfLelDioRK0WG4lSCevpMDNecL8edEJWdK4EDVPM7PWnvbR2IEtC3d4iBAAyaGmCzZIKGh3ltcuZaLO_cRUW2MCXWJNbPmd3iiXBeIySDI9CsCyNqvqX9kiGP6A5tcyquVeSAcMOi_bVah83ZfYqXlh47wnUPnCcMaCNCahgVwAzbzcYah4DDXGd6y2y1Udpdd6jptIXFmbKv8cDr-XpwWl1cWsJ-rmKjHDclSw8SUqxGFVh3TSM1kFKjBTrCKnsRa-ABt6ypQY1p",
    tags: ["REST Assured", "CI/CD"],
    description:
      "End-to-end quality assurance for a high-traffic retail engine, specializing in transactional integrity and inventory synchronization testing.",
    tagClass: "bg-secondary/20 text-secondary border-secondary/30",
    buttonClass: "border-secondary/30 text-secondary hover:bg-secondary hover:text-on-secondary",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="font-headline-lg text-headline-lg mb-8">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map(({ title, image, tags, description, tagClass, buttonClass }) => (
          <div key={title} className="glass-card rounded-xl overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img
                alt={`${title} Project`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
              <div className="absolute bottom-4 left-6">
                <h3 className="font-headline-md text-headline-md text-white">{title}</h3>
                <div className="flex gap-2 mt-2">
                  {tags.map((tag) => (
                    <span key={tag} className={`text-[10px] px-2 py-0.5 rounded border uppercase ${tagClass}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="font-body-md text-outline mb-6">{description}</p>
              <button
                type="button"
                className={`w-full py-3 rounded-lg border font-label-caps text-label-caps transition-all ${buttonClass}`}
              >
                VIEW PROJECT
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
