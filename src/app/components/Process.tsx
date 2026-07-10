import { SectionTitle } from "./SectionTitle";

export function Process() {
  return (
    <section id="methode" className="py-16 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <SectionTitle title="— 03 / Méthode">
          <h2 className="text-4xl md:text-5xl font-light mt-2 tracking-tight">
            Comment je travaille
          </h2>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            {
              n: "01",
              title: "Découverte",
              desc: "Entretiens utilisateurs, audit de l'existant, benchmark concurrentiel. Je construis une image claire du problème avant de démarrer.",
            },
            {
              n: "02",
              title: "Définition",
              desc: "Personas, user journeys. Je synthétise la recherche en insights actionnables et définis les priorités avec l'équipe.",
            },
            {
              n: "03",
              title: "Design",
              desc: "Wireframes, UI haute-fidélité, design tokens, composants. Itérations rapides avec feedback continu des parties prenantes.",
            },
            {
              n: "04",
              title: "Validation",
              desc: "Tests utilisateurs, A/B testing, mesure des KPIs. Le lancement n'est pas la fin, c'est le début de l'optimisation.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="p-8 border-b border-border last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 group hover:bg-muted transition-colors duration-300"
            >
              <div
                className="text-xs text-primary mb-6 tracking-widest"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {step.n}
              </div>
              <h3 className="text-xl font-medium mb-4">{step.title}</h3>
              <p className="text-sm text-foreground/40 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
