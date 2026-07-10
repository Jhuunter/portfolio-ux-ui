import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="apropos" className="py-16 md:py-32 px-6 md:px-12 bg-card">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Left */}
        <div className="md:col-span-5 flex flex-col">
          <SectionTitle title="— 02 / À propos" noBorder />
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8 leading-tight tracking-tight">
            Designer UX/UI
            <br />
            <span className="text-foreground/30">Webdesigner</span>
          </h2>
          <div
            className="w-full flex-grow min-h-[380px] overflow-hidden bg-muted rounded-lg"
            style={{ background: "#1A1A1A" }}
          >
            <img
              src="/assets/photo-profil.jpg"
              alt="Portrait de Justine Letho Duclos"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            Je suis UX/UI Designer basée à Lille. Je travaille sur tout type de produit, des SaaS B2B aux applications mobiles, aussi bien sur desktop que sur mobile.
          </p>
          <p className="text-foreground/40 leading-relaxed mb-12 text-sm">
            Avant ça j'étais nail artist, un métier manuel qui a toujours nourri mon goût
            pour l'esthétique et le soin du détail. Mais la conception d'interfaces me passionnait
            déjà depuis un moment, alors j'ai fait le choix de me reconvertir pour en faire mon métier.
          </p>

          {/* Timeline */}
          <div>
            <div
              className="text-xs text-foreground/30 tracking-widest uppercase mb-8"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Parcours
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

              <div className="space-y-8 pl-8">
                {[
                  {
                    period: "2026 — Aujourd'hui",
                    role: "Freelance UX/UI Designer",
                    company: "Indépendante",
                    desc: "Création et refonte de plateformes et d'applications web et mobiles.",
                  },
                  {
                    period: "2025 — 2026",
                    role: "Product Designer",
                    company: "Selvitys",
                    desc: "Refonte d'une plateforme web B2B et d'une app mobile.",
                  },
                  {
                    period: "2024",
                    role: "Bootcamp UI/UX Designer",
                    company: "Wild Code School",
                    desc: "Spécialisation en interfaces numériques et ergonomie cognitive.",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    {/* Dot */}
                    <div className="absolute -left-8 top-1.5 w-2 h-2 border border-primary bg-background group-hover:bg-primary transition-colors duration-200" style={{ transform: "translateX(-50%) translateX(1px)" }} />

                    <div
                      className="text-xs text-primary mb-1 tracking-widest"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.period}
                    </div>
                    <div className="font-medium text-foreground mb-0.5">{item.role}</div>
                    <div
                      className="text-xs text-foreground/40 mb-2 tracking-wide"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.company}
                    </div>
                    <p className="text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
