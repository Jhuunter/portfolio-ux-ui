import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="apropos" className="py-16 md:py-32 px-6 md:px-12 bg-card">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* Left */}
        <div className="md:col-span-4 flex flex-col">
          <SectionTitle title="— 02 / À propos" noBorder />
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8 leading-tight tracking-tight">
            Designer UX/UI
            <br />
            <span className="text-foreground/30">Webdesigner</span>
          </h2>
          <div
            className="w-full max-w-[320px] aspect-[3/4] overflow-hidden bg-muted rounded-lg shadow-sm"
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
        <div className="md:col-span-8 flex flex-col justify-center">
          <p className="text-xl text-foreground/70 leading-relaxed mb-6">
            Je suis UX/UI Designer basée à Lille. Je conçois tout type de produit, des SaaS B2B aux applications mobiles complexes, avec une approche centrée sur l'utilisateur et l'esthétique.
          </p>
          
          <p className="text-foreground/50 leading-relaxed mb-10 text-sm">
            Avant cela, j'étais nail artist, un métier minutieux et manuel qui a forgé mon sens aiguisé de l'esthétique, de la précision et du soin du détail, des qualités indispensables que je transpose aujourd'hui dans chacune de mes interfaces.
          </p>

          {/* Grille de compétences */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-muted/10 border border-border/50 rounded-2xl p-5 flex flex-col space-y-3">
              <div className="text-primary text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "'DM Mono', monospace" }}>Conception</div>
              <h4 className="font-semibold text-foreground text-sm">Figma & Systems</h4>
              <p className="text-xs text-foreground/50 leading-relaxed">
                Recherche, wireframes, prototypage et architecture de Design Systems structurés et scalables.
              </p>
            </div>
            
            <div className="bg-muted/10 border border-border/50 rounded-2xl p-5 flex flex-col space-y-3">
              <div className="text-primary text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "'DM Mono', monospace" }}>Intégration</div>
              <h4 className="font-semibold text-foreground text-sm">HTML, CSS & JS</h4>
              <p className="text-xs text-foreground/50 leading-relaxed">
                Maîtrise de l'intégration HTML/CSS et compréhension du JavaScript pour faciliter le dialogue avec les dev.
              </p>
            </div>

            <div className="bg-muted/10 border border-border/50 rounded-2xl p-5 flex flex-col space-y-3">
              <div className="text-primary text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "'DM Mono', monospace" }}>Vibe Coding</div>
              <h4 className="font-semibold text-foreground text-sm">IA & Vélocité</h4>
              <p className="text-xs text-foreground/50 leading-relaxed">
                Création de réels projets web, d'outils internes sur-mesure et de sites complets.
              </p>
            </div>
          </div>

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
                    desc: "Création/refonte de plateformes et d'applications web/mobiles et de sites web.",
                  },
                  {
                    period: "2025 — 2026",
                    role: "Product Designer",
                    company: "Selvitys",
                    desc: "Refonte d'une plateforme web B2B et d'une app mobile, création d'outils internes et de sections pour le site web.",
                  },
                  {
                    period: "2025 — 2026",
                    role: "Formation UX/UI (TP Concepteur UI)",
                    company: "Wild Code School",
                    desc: "Formation approfondie axée sur le design d'interfaces, le prototypage interactif et l'ergonomie.",
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
