const SKILLS = [
  { name: "Manual", level: "95%", materialIcon: "touch_app" },
  {
    name: "SQL",
    level: "80%",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfLXFCCRIxjoEuNnVkNvSlz7fMOMl632zQVyiwU7J1MG3hqcqjeiCiGjokLJ69u840qdLpsEl1BDDIlJAvl9eAnikc8A8zSYcJHf5yv2pYbCw5eR6_-8fI1ahL2Q2YTByIRli371l3lUmR4JSHKP0HzU0db86WHashqsXDpApMbWp5zTKBWlkw7T92gZQCNsKoRly_TP3mpatxKCDz8DRsIJQrGG7D5Qo3j6y0dZfZ0ZE_XH-1UGiy8X-fxzRw1eCxmI6GLPLYhxbC",
  },
  {
    name: "Postman",
    level: "90%",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo_emYF2zIg0RCxqbCJTExJmmh1PwCkM0u4HR761c_5Fp1gCOxmO_-jrRdzYj1j2jIJqsrP56WBoMMyKcNSNyHkmimmCF8fACkozaGhLiOZ_Y5NhW4cAPhibe13j7ni_bHFJXYdRfGr6YM54CSriRUo1ZWpqSxyB_kpvtd30KzOZsdzHQ7_bXmkhf0dYvWPcvLecLj2odLE9oc6sn-Hu_-H5Tq36YH2rbSnXCiORrj8qZ2qf6Ih-Di6rX-Mmp2myQmyF8Y-r_2LSSs",
  },
  {
    name: "Java",
    level: "92%",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0aDbOTCUDjVH3UNikalcRpzCdPQpIL2BiPKL9_wT7vLlBjct4q00aZwFSRmYm9NY6yOvhDKfATxMkYGPcALa4p-kyoDczf0Qv1KxE9UoEiihOzPOOyG4PiRtnv8-ArC9es-Br0S1PU7BlnpJB5Sme1p-PCqGrVvDIlhD9rw-f22yB8Aje4bDYk9SmpGbdTVmL-uJf0Io7lkB-Ft4mtgAAYtFvrJdhrDnTd3_JHbEzJUkYXqOz3Z5yTDODGfj4H9zbrwQyGq1MJRit",
  },
  {
    name: "Selenium",
    level: "95%",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPMxaMUU9IR-kAee4NAgkslQmHH7W1GcGcRsEpCNP-S7yRW7TuGnKM-XUGl3pULywdbzC55MMZ_75MxVpViMkUYXmcnXbbUbm4QCT1Iy_3PE2ucCi1wWTaPy1PrJs-TnRppz3aH0b773WpPwazgEGFTMEH_PglEPYtmvOdjtXWCny_wG1WGj9QGSUH0H58wPtF0jg5b2H2F3ZAMgf-QcTnePrbVXm7kiOKpLBQRlp-BHCU5EPgpjuhSaXhOMC7aMuD-erFF9b0wLJk",
  },
  {
    name: "Jira",
    level: "100%",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGw3oUgdo3vs8lXN9aAKk44_CLBczLcGFdStpUA0LhfyAI_ZB50AhMx5b0gFDyoWl-d39LNlLg-DKp6nvixvkfXvaxQIyxfJQxjjZg-MlrrJb9Zz2UJZNolBkEjKLN16mlIeISDT0bJtJhz6xPwUOqrrGr_olh66AGHLc7NwNMroUpnu5ULuBJEiigISNQwmrBiRonwmysD5091qDztmCwngrQhHIUtxmv6DOQQDlEqAzh-bPr9wDw3MfZ8jRrgFVPyCpU2fTClw7U",
  },
  {
    name: "Jenkins",
    level: "85%",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuARLmOv1agpRhAYQPmsMBTdNWIDz3_UIGfCr5zj_ThaQv_K5OSNCeRK3I-Mm9T9umnW_AZYedAFsrRfK4y3SNY8A-k-eY0fVVb16zyGvz6hsEPlBqzK2w12s7KYyEFwrEbESlYlYP-KB_QD_YfOm197d7PRePSS_uCfg87h8Xtr4unYV13Tu3cctdOQFdm2szsKHmEPakS46vEYyPiVZNCwDN539OEv_jQrRnCnAwWURdN2rGOqpU5z5g9VRkRYXNIgzHvUyubdbTsx",
  },
  { name: "GitHub", level: "88%", materialIcon: "code" },
];

const RING_RADIUS = 56;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const READINESS = 92;

export default function Skills() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <h2 className="font-headline-lg text-headline-lg mb-8">Interactive Skills Dashboard</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6">
          {SKILLS.map(({ name, level, icon, materialIcon }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center border-primary/20 hover:bg-primary/5 transition-all cursor-help relative group">
                {icon ? (
                  <img alt={`${name} Icon`} className="w-8 h-8 filter brightness-200" src={icon} />
                ) : (
                  <span className="material-symbols-outlined text-primary text-3xl">{materialIcon}</span>
                )}
                <div className="absolute -top-10 bg-primary-container text-on-primary-fixed-variant text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {level}
                </div>
              </div>
              <span className="font-label-caps text-label-caps text-outline">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-8 rounded-xl flex flex-col items-center justify-center gap-6">
        <h3 className="font-label-caps text-label-caps text-primary">RELEASE READINESS</h3>
        <div className="relative flex items-center justify-center">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle className="text-white/5" cx="64" cy="64" fill="transparent" r={RING_RADIUS} stroke="currentColor" strokeWidth="8" />
            <circle
              className="text-primary"
              cx="64"
              cy="64"
              fill="transparent"
              r={RING_RADIUS}
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={RING_CIRCUMFERENCE * (1 - READINESS / 100)}
            />
          </svg>
          <span className="absolute font-code-md text-code-md text-primary">{READINESS}%</span>
        </div>
        <p className="font-body-md text-sm text-center text-outline">
          Average automation coverage across active client repositories.
        </p>
      </div>
    </section>
  );
}
