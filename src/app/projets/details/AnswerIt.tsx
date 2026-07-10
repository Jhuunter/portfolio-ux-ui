"use client";

import { useState, useEffect } from "react";
import { TOOL_LOGOS } from "../../content";
import { ZoomableImage } from "../../components/ZoomableImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const CHARTE_SLIDES = [
  "charte_1.jpg",
  "charte_2.jpg",
  "charte_3.jpg",
  "charte_4.jpg",
  "charte_5.jpg",
  "charte_6.jpg",
  "charte_7.jpg",
  "charte_8.jpg",
  "charte_9.jpg",
  "charte_10.jpg",
  "charte_11.jpg"
];

const MAQUETTES = [
  "maquette_onborading0.jpg",
  "maquette_onborading1.jpg",
  "maquette_onborading2.jpg",
  "maquette_onborading3.jpg",
  "maquette_home.jpg",
  "maquette_question.jpg",
  "maquette_quetes.jpg",
  "maquette_classement.jpg",
  "maquette_feed.jpg",
  "maquette_compte.jpg"
];

export function AnswerItDetails({ project }: { project: any }) {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      if (api.scrollSnapList().length === MAQUETTES.length) {
        setCurrent(api.selectedScrollSnap());
      }
    });
  }, [api]);

  const handleNext = () => {
    if (current < MAQUETTES.length - 1) {
      const next = current + 1;
      setCurrent(next);
      if (api && !api.slidesInView().includes(next)) {
        api.scrollTo(next);
      }
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      const prev = current - 1;
      setCurrent(prev);
      if (api && !api.slidesInView().includes(prev)) {
        api.scrollTo(prev);
      }
    }
  };

  const handleDotClick = (index: number) => {
    setCurrent(index);
    if (api) api.scrollTo(index);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto space-y-20">
      
      {/* En-tête / Brief du projet */}
      <div className="bg-muted/10 border border-border/50 rounded-3xl p-8 md:p-12">
        
        {/* Le contexte - Pleine largeur */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Le contexte</h2>
          <div className="text-foreground/70 leading-relaxed space-y-6">
            <p>
              Answer It est l'application mobile grand public liée à l'écosystème Selvitys. Son concept est simple et engageant : permettre aux utilisateurs de répondre à des sondages et de cumuler des points (coins) à échanger contre des cartes cadeaux.
            </p>
            <p>
              L'enjeu majeur de cette refonte était purement stratégique et business. Pour soutenir la croissance de la plateforme et maximiser la collecte de données, l'application devait franchir un cap et devenir un puissant levier d'acquisition et de rétention d'utilisateurs. L'objectif était de créer une expérience tellement fluide, moderne et gratifiante qu'elle donnerait envie aux répondants de revenir quotidiennement, augmentant ainsi drastiquement la communauté active.
            </p>
          </div>
        </div>
        
        {/* Ligne 2 : Objectifs (gauche), Rôle + Outils (droite) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 border-t border-border/30">
          
          {/* Colonne Gauche : Objectifs */}
          <div>
            <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>Objectifs principaux</h3>
            <ul className="list-disc pl-4 space-y-3 text-sm text-foreground/80 leading-relaxed">
              <li><strong>Acquisition & Rétention (Business) :</strong> Rendre l'application ultra-attractive pour attirer massivement de nouveaux répondants et les fidéliser au quotidien.</li>
              <li><strong>Gamification & Gratification :</strong> Valoriser visuellement le système de coins et de cartes cadeaux pour maximiser l'engagement.</li>
              <li><strong>Refonte Identitaire Complète :</strong> Reconstruire une image de marque forte et cohérente, du logo jusqu'aux moindres détails de l'interface.</li>
              <li><strong>Modernisation UI & UX :</strong> Déployer une direction artistique premium (liquid glass, formes organiques) et fluidifier les parcours mobiles pour maximiser le taux de complétion des sondages.</li>
            </ul>
          </div>
          
          {/* Colonne Droite : Mon rôle + Outils */}
          <div className="space-y-10">
            {/* Mon rôle */}
            <div>
              <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>Mon rôle</h3>
              <p className="text-sm text-foreground/80 leading-relaxed"><strong>Product / UI-UX Designer.</strong> En tant que Product / UI-UX Designer, j'ai piloté l'intégralité du projet de refonte de bout en bout :</p>
              <ul className="list-disc pl-4 mt-3 space-y-2 text-sm text-foreground/80 leading-relaxed">
                <li><strong>Branding & Identité :</strong> Création complète de la nouvelle charte graphique, incluant le nouveau logo et l'univers de marque.</li>
                <li><strong>Conception UX/UI :</strong> Restructuration des parcours mobiles clés (onboarding, gains, catalogue) et création d'une interface esthétique et engageante.</li>
                <li><strong>Design System :</strong> Livraison d'une bibliothèque de composants mobiles prêts pour l'intégration front-end.</li>
              </ul>
            </div>
            
            {/* Outils */}
            <div>
              <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>Outils</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool: string) => (
                  <div key={tool} title={tool} className="h-10 px-3 rounded-lg bg-background border border-border flex items-center gap-2.5">
                    {TOOL_LOGOS[tool] && (
                      <img src={TOOL_LOGOS[tool]} alt={tool} className="w-5 h-5 object-contain" />
                    )}
                    <span className="text-sm font-medium text-foreground/80">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="space-y-24">
        
        {/* Recherche Utilisateurs */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Recherche Utilisateurs</span>
            </h2>
          </div>

          <div className="space-y-10">
            {/* Étude quantitative */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Étude quantitative</h3>
              
              <div className="text-base text-foreground/80 leading-relaxed space-y-6">
                <p>
                  Pour mieux comprendre les besoins et attentes des utilisateurs actuels, j'ai mené une <strong>étude quantitative</strong> auprès d'un échantillon de <strong>plus de 1 000 répondants</strong> (utilisateurs réguliers d'Answer It). L'objectif principal était d'identifier les axes d'amélioration prioritaires pour cette refonte et d'évaluer notre positionnement face aux bonnes pratiques des concurrents.
                </p>
                <p>
                  Ce sondage, composé de tout type de questions (à choix multiples, questions ouvertes, échelles d'évaluation, etc.), a été conçu sur <strong>Selvitys</strong> puis diffusé directement via l'application <strong>Answer It</strong>.
                </p>
                
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-4">Points clés soulevés par les utilisateurs :</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex gap-3 bg-muted/20 p-4 rounded-2xl border border-border/50">
                      <span className="text-primary mt-0.5 text-xl">•</span> 
                      <span><strong>Satisfaction :</strong> La rapidité et la simplicité des sondages actuels sont très appréciées.</span>
                    </li>
                    <li className="flex gap-3 bg-muted/20 p-4 rounded-2xl border border-border/50">
                      <span className="text-primary mt-0.5 text-xl">•</span> 
                      <span><strong>Frustration :</strong> Un manque de moyens pour accumuler des récompenses (impression de stagnation).</span>
                    </li>
                    <li className="flex gap-3 bg-muted/20 p-4 rounded-2xl border border-border/50">
                      <span className="text-primary mt-0.5 text-xl">•</span> 
                      <span><strong>Attente :</strong> Un besoin crucial d'améliorer l'expérience mobile globale (navigation, notifications).</span>
                    </li>
                    <li className="flex gap-3 bg-muted/20 p-4 rounded-2xl border border-border/50">
                      <span className="text-primary mt-0.5 text-xl">•</span> 
                      <span><strong>Concurrence :</strong> Les applications concurrentes offrent souvent des fonctionnalités plus ludiques et engageantes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cibles & personas (condensés) */}
            <div className="bg-muted/10 border border-border/50 rounded-3xl p-6 md:p-8 space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-widest text-primary/80" style={{ fontFamily: "'DM Mono', monospace" }}>Cibles & Personas (Synthèse)</h3>
              
              <div className="space-y-4">
                {/* Persona 1: Léa */}
                <div className="bg-background rounded-xl p-5 border border-border/50 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold shrink-0">
                    L
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Léa, 22 ans</h4>
                    <p className="text-xs font-medium text-foreground/50 mb-2">L'étudiante connectée</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Utilise beaucoup son smartphone. Elle cherche une application très intuitive pour participer à des activités rapides et cumuler des récompenses sans y passer des heures.<br/>
                      <span className="text-emerald-500/90 font-medium mt-1 inline-block">Besoins : Sondages rapides, interface moderne, récompenses motivantes.</span>
                    </p>
                  </div>
                </div>

                {/* Persona 2: Marc */}
                <div className="bg-background rounded-xl p-5 border border-border/50 flex flex-col sm:flex-row gap-4 items-start shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold shrink-0">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Marc, 41 ans</h4>
                    <p className="text-xs font-medium text-foreground/50 mb-2">L'actif pragmatique</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Employé et père de famille. Il utilise son téléphone lors de courtes pauses. Il se lasse vite si les applications sont trop chargées ou si l'accès aux tâches est trop long.<br/>
                      <span className="text-emerald-500/90 font-medium mt-1 inline-block">Besoins : Interface très claire, navigation sans friction, progression bien visible.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Atelier UX en interne */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Atelier UX en interne</h3>
              
              <div className="space-y-8">
                <div className="flex flex-col gap-6">
                  <p className="text-base text-foreground/80 leading-relaxed">
                    Pour aller plus loin que les statistiques, j'ai organisé un atelier UX de 12 personnes, scindé en deux sessions. Ce format en petit comité a été un véritable coup de pouce pour le projet.
                  </p>
                  <div className="mt-2 flex flex-col items-center">
                    <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm w-full bg-muted/30">
                      <img src="/assets/ANSWERIT/atelier_miro.png" alt="Atelier UX sur Miro" className="w-full h-auto block" />
                      <div className="p-4 bg-muted/20 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-2">
                        <img src="/assets/OUTILS/Miro.svg" alt="Miro" className="w-5 h-5 object-contain opacity-70 shrink-0" />
                        <span className="text-sm text-foreground/80 font-medium text-center">Aperçu de l'atelier collaboratif réalisé sur Miro</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/20 p-6 rounded-3xl border border-border/50 shadow-sm">
                    <div>
                      <h4 className="font-bold mb-2 text-base">L'avantage de l'œil neuf</h4>
                      <p className="text-foreground/80 text-base leading-relaxed">L'intégration de deux nouveaux collègues a permis un regard objectif qui a confirmé les points de friction de notre étude quantitative.</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-3xl border border-border/50 shadow-sm">
                    <div>
                      <h4 className="font-bold mb-2 text-base">Direction Artistique</h4>
                      <p className="text-foreground/80 text-base leading-relaxed">Les échanges sur l'ergonomie et l'ambiance ont débloqué ma vision créative pour affirmer la nouvelle identité visuelle.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border/50">
                  <div className="relative overflow-hidden bg-primary/5 border-2 border-primary/20 p-8 md:p-10 rounded-3xl">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                    <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Problématique</h4>
                    <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                      "Comment refondre Answer It pour améliorer l'expérience et l'engagement, diversifier les profils et renforcer les récompenses, tout en réduisant la dépendance aux outils externes ?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Charte Graphique</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p>
              Pour démarquer Answer It des applications de sondages classiques, j'ai créé une identité visuelle moderne, dynamique et résolument technologique. Cette charte graphique s'articule autour de formes organiques et fluides qui apportent de la douceur et un aspect ludique à l'interface. Cet univers visuel fort est structuré par un design minimaliste et épuré, garantissant une lisibilité optimale et une navigation sans effort, indispensables pour maximiser l'engagement des utilisateurs au quotidien.
            </p>
          </div>
          
          {/* Carousel Charte Graphique */}
          <div className="mt-12 px-12 md:px-16">
            <Carousel className="w-full">
              <CarouselContent>
                {CHARTE_SLIDES.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-muted/30 rounded-lg overflow-hidden border border-border shadow-sm">
                      <ZoomableImage
                        src={`/assets/ANSWERIT/${encodeURIComponent(slide)}`}
                        alt={`Slide Charte Graphique ${index + 1}`}
                        className="w-full h-auto block"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Animation Logo */}
          <div className="mt-16 flex flex-col items-center">
            <div className="w-full max-w-sm md:max-w-md">
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm w-full bg-muted/30">
                <video 
                  src="/assets/ANSWERIT/Animation_logo.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto block"
                />
                <div className="p-4 bg-muted/20 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <img src="/assets/OUTILS/After_Effects.svg" alt="After Effects" className="w-5 h-5 object-contain opacity-70 shrink-0" />
                  <span className="text-sm text-foreground/80 font-medium text-center">Animation réalisée sur After Effects, idéale pour l'intro des vidéos sur les réseaux sociaux.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maquettes & Fonctionnalités */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Maquettes & Fonctionnalités</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/70 leading-relaxed mb-12">
            <p>
              Après avoir défini et validé en interne l'ensemble des nouvelles features, la phase de conception a permis de donner vie à l'application à travers des maquettes haute fidélité axées sur l'engagement. Pour répondre aux objectifs business de rétention et d'activité quotidienne, l'interface intègre désormais de puissantes fonctionnalités de gamification au sein d'un parcours mobile fluide.
            </p>
            <p className="font-medium text-foreground pt-4">Les fonctionnalités majeures de la refonte :</p>
            <ul className="space-y-4 pt-2">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p><strong>Le Système de Quêtes & Streaks :</strong> Introduction d'une mécanique de fidélisation forte avec des séries de connexions (streaks). L'utilisateur est incité à revenir quotidiennement et débloque un bonus exclusif tous les 7 jours s'il maintient sa série active.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p><strong>La Question du Jour & Aspect Communautaire :</strong> Un rendez-vous quotidien interactif où, après avoir soumis sa propre réponse, le répondant peut instantanément découvrir les statistiques et les réponses de la communauté, renforçant l'aspect social de l'application.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p><strong>Le Dashboard des Gains & Boutique :</strong> Un espace central réorganisé pour afficher le solde de coins et le catalogue de cartes cadeaux de manière ultra-visuelle, rendant l'échange de points gratifiant et intuitif.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p><strong>L'Écran de Connexion & Onboarding :</strong> Une première étape épurée et modernisée pour soigner la première impression, rassurer l'utilisateur et maximiser l'inscription de nouveaux répondants.</p>
              </li>
            </ul>
          </div>

          {/* Plan Figma global */}
          <div className="mt-8 mb-16 px-4 md:px-12">
            <div className="bg-muted/30 rounded-2xl overflow-hidden border border-border shadow-sm">
              <ZoomableImage
                src="/assets/ANSWERIT/plan_figma.png"
                alt="Structure et organisation de l'espace de travail Figma"
                className="w-full h-auto block"
              />
              <div className="p-4 bg-muted/20 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-2">
                <img src="/assets/OUTILS/Figma.svg" alt="Figma" className="w-5 h-5 object-contain opacity-70 shrink-0" />
                <p className="text-sm text-foreground/80 font-medium text-center">
                  Mon espace de travail Figma, organisé pour une compréhension facile et structurée des maquettes.
                </p>
              </div>
            </div>
          </div>

          {/* Maquettes Mobiles Carousel (Coverflow) */}
          <div className="mt-16 w-full relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: false,
                containScroll: "trimSnaps",
                skipSnaps: false,
                breakpoints: {
                  '(min-width: 768px)': {
                    align: "start",
                  }
                }
              }}
              className="w-full max-w-[1200px] mx-auto px-4 md:px-12"
            >
              <CarouselContent className="py-12 -ml-2 md:-ml-4">
                {MAQUETTES.map((filename, index) => {
                  const isActive = current === index;
                  return (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-[45%] md:basis-[28%] lg:basis-[22%]">
                      <div className="px-4">
                        <div
                        onClick={() => {
                          setCurrent(index);
                          if (!api) return;
                          
                          const isMobile = api.scrollSnapList().length === MAQUETTES.length;
                          const inView = api.slidesInView();
                          
                          if (isMobile) {
                            api.scrollTo(index);
                          } else if (
                            !inView.includes(index) || 
                            inView[inView.length - 1] === index || 
                            inView[0] === index
                          ) {
                            api.scrollTo(index);
                          }
                        }}
                        className={`relative cursor-pointer transition-all duration-500 ease-out rounded-[1.75rem] md:rounded-[2.25rem] overflow-hidden border-[4px] md:border-[6px] border-muted/50 ${
                          isActive 
                            ? "scale-105 z-20 shadow-2xl opacity-100 ring-4 ring-primary/10" 
                            : "scale-95 z-10 opacity-50 hover:opacity-80 shadow-md"
                        }`}
                      >
                        <img
                          src={`/assets/ANSWERIT/${filename}`}
                          alt={`Maquette ${index + 1}`}
                          className="w-full h-auto block object-cover pointer-events-none"
                        />
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              </button>
              
              <button
                onClick={handleNext}
                disabled={current === MAQUETTES.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              
              <div className="flex justify-center gap-2 mt-4 pb-8">
                {MAQUETTES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Aller à la maquette ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      current === index ? "bg-primary w-8" : "bg-primary/20 w-2 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </section>

        {/* Refonte Site Vitrine (Webflow) */}
        <section className="mt-20 border-t border-border/50 pt-16">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Site Vitrine sur Webflow</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p>
              Dans le prolongement de la refonte de l'application mobile, j'ai entièrement repensé et intégré le site vitrine d'Answer It sur <strong>Webflow</strong>. L'objectif était d'y adapter toute la nouvelle direction artistique pour assurer une cohérence visuelle parfaite sur l'ensemble de l'écosystème.
            </p>
            <p>
              Ce site vitrine permet de présenter clairement l'application, ses fonctionnalités phares (les quêtes, la question du jour, la boutique) et ses atouts. L'utilisation de Webflow m'a permis de construire une landing page moderne, fluide et enrichie de micro-animations, pensée spécifiquement pour maximiser le taux de conversion et inciter au téléchargement.
            </p>
          </div>

          <div className="mt-12 w-full max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm w-full bg-muted/30">
              <video 
                src="/assets/ANSWERIT/site_vitrine.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                controls
                className="w-full h-auto block"
              />
              <div className="p-4 bg-muted/20 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-2">
                <p className="text-sm text-foreground/80 font-medium text-center italic">
                  Note : L'application n'étant pas encore en production, le site ne peut pour le moment pas être publié. C'est pourquoi certaines images sont manquantes sur la vidéo et que des ajustements seront à prévoir de mon côté.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
