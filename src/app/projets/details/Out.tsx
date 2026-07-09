"use client";

import { useState, useEffect } from "react";
import { type CarouselApi } from "../../components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { TOOL_LOGOS } from "../../content";

const MAQUETTES_B2C = [
  "/assets/OUT/b2c_1.jpg",
  "/assets/OUT/b2c_2.jpg",
  "/assets/OUT/b2c_3.jpg",
  "/assets/OUT/b2c_4.jpg",
  "/assets/OUT/b2c_5.jpg",
  "/assets/OUT/b2c_6.jpg",
  "/assets/OUT/b2c_7.jpg",
  "/assets/OUT/b2c_8.jpg",
  "/assets/OUT/b2c_9.jpg",
  "/assets/OUT/b2c_10.jpg",
  "/assets/OUT/b2c_11.jpg",
  "/assets/OUT/b2c_12.jpg",
];

const MAQUETTES_B2B = [
  "/assets/OUT/b2b_1.jpg",
  "/assets/OUT/b2b_2.jpg",
  "/assets/OUT/b2b_3.jpg",
  "/assets/OUT/b2b_4.jpg",
  "/assets/OUT/b2b_5.jpg",
  "/assets/OUT/b2b_6.jpg",
  "/assets/OUT/b2b_7.jpg",
];

const ILLUSTRATIONS_3D = [
  "/assets/OUT/illu_1.png",
  "/assets/OUT/illu_2.png",
  "/assets/OUT/illu_3.png",
  "/assets/OUT/illu_4.png",
  "/assets/OUT/illu_5.png",
  "/assets/OUT/illu_6.png",
  "/assets/OUT/illu_7.png",
  "/assets/OUT/illu_8.png",
  "/assets/OUT/illu_9.png",
  "/assets/OUT/illu_10.png",
  "/assets/OUT/illu_11.png",
];

export function OutDetails({ project }: { project: any }) {
  const [apiB2C, setApiB2C] = useState<CarouselApi>();
  const [currentB2C, setCurrentB2C] = useState(0);
  const [apiB2B, setApiB2B] = useState<CarouselApi>();
  const [currentB2B, setCurrentB2B] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!apiB2C) return;
    apiB2C.on("select", () => {
      if (apiB2C.scrollSnapList().length === MAQUETTES_B2C.length) {
        setCurrentB2C(apiB2C.selectedScrollSnap());
      }
    });
  }, [apiB2C]);

  useEffect(() => {
    if (!apiB2B) return;
    apiB2B.on("select", () => {
      if (apiB2B.scrollSnapList().length === MAQUETTES_B2B.length) {
        setCurrentB2B(apiB2B.selectedScrollSnap());
      }
    });
  }, [apiB2B]);

  const handleNextB2C = () => {
    if (currentB2C < MAQUETTES_B2C.length - 1) {
      const next = currentB2C + 1;
      setCurrentB2C(next);
      if (apiB2C && !apiB2C.slidesInView().includes(next)) {
        apiB2C.scrollTo(next);
      } else if (apiB2C && apiB2C.slidesInView()[apiB2C.slidesInView().length - 1] === next) {
        apiB2C.scrollTo(next);
      }
    }
  };

  const handlePrevB2C = () => {
    if (currentB2C > 0) {
      const prev = currentB2C - 1;
      setCurrentB2C(prev);
      if (apiB2C && !apiB2C.slidesInView().includes(prev)) {
        apiB2C.scrollTo(prev);
      }
    }
  };

  const handleDotClickB2C = (index: number) => {
    setCurrentB2C(index);
    if (apiB2C) apiB2C.scrollTo(index);
  };

  const handleNextB2B = () => {
    if (currentB2B < MAQUETTES_B2B.length - 1) {
      const next = currentB2B + 1;
      setCurrentB2B(next);
      if (apiB2B && !apiB2B.slidesInView().includes(next)) {
        apiB2B.scrollTo(next);
      } else if (apiB2B && apiB2B.slidesInView()[apiB2B.slidesInView().length - 1] === next) {
        apiB2B.scrollTo(next);
      }
    }
  };

  const handlePrevB2B = () => {
    if (currentB2B > 0) {
      const prev = currentB2B - 1;
      setCurrentB2B(prev);
      if (apiB2B && !apiB2B.slidesInView().includes(prev)) {
        apiB2B.scrollTo(prev);
      }
    }
  };

  const handleDotClickB2B = (index: number) => {
    setCurrentB2B(index);
    if (apiB2B) apiB2B.scrollTo(index);
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
              <strong>OUT</strong> est une application mobile qui permet de créer des liens avec son réseau d'amis en les tenant informés de ses sorties. L'application se distingue notamment en offrant la possibilité de payer directement ses consommations dans les bars, ainsi que d'acheter et de réserver des billets d'événements, rendant l'organisation des soirées plus fluide et centralisée.
            </p>
            <p>
              Le projet initial de cette refonte partait d'un besoin stratégique : l'ajout d'une toute nouvelle fonctionnalité nommée <strong>"GO OUT"</strong>, permettant aux utilisateurs de réserver leurs sorties dans les établissements à l'avance. 
            </p>
            <p>
              L'intégration de cette nouveauté a été le déclencheur d'un chantier plus vaste impliquant de repenser l'écosystème dans sa globalité. Celui-ci s'articule autour de deux applications distinctes : une version <strong>B2C</strong> pour les utilisateurs finaux, et une version <strong>B2B</strong> dédiée aux gérants d'établissements. Il a fallu revoir en profondeur l'expérience de ces deux interfaces pour les rendre plus immersives et cohérentes. Du côté utilisateur, l'objectif était d'insuffler un nouveau dynamisme afin de stimuler l'usage quotidien via un feed social, tout en s'assurant de mettre en valeur les flux de revenus existants (comme la billetterie).
            </p>
          </div>
        </div>
        
        {/* Ligne 2 : Objectifs (gauche), Rôle + Outils (droite) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 border-t border-border/30">
          
          {/* Colonne Gauche : Objectifs */}
          <div>
            <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>Objectifs principaux</h3>
            <ul className="list-disc pl-4 space-y-3 text-sm text-foreground/80 leading-relaxed">
              <li><strong>Intégration de la nouveauté (GO OUT) :</strong> Concevoir et intégrer la fonctionnalité de réservation de sorties à l'avance.</li>
              <li><strong>Mise en valeur de la billetterie :</strong> Intégrer de façon optimale la fonctionnalité existante d'achat de billets d'événements, véritable moteur de monétisation de l'app, pour sécuriser la conversion.</li>
              <li><strong>Refonte des parcours critiques :</strong> Repenser intégralement l'onboarding et le flux d'inscription pour maximiser l'acquisition et la rétention des utilisateurs.</li>
              <li><strong>Dynamisation et engagement :</strong> Rendre l'expérience plus vivante et incitative en optimisant les écrans existants et en créant un "feed" social centralisant l'activité des amis et des bars suivis.</li>
            </ul>
          </div>
          
          {/* Colonne Droite : Mon rôle + Outils */}
          <div className="space-y-10">
            {/* Mon rôle */}
            <div>
              <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>Mon rôle</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <strong>UX/UI Designer.</strong> J'ai piloté l'intégration de nouvelles fonctionnalités majeures (feed social, billetterie) tout en repensant les parcours clés (onboarding, inscription). Le défi était de dynamiser l'expérience globale pour maximiser l'engagement quotidien des utilisateurs et sécuriser les flux de conversion, le tout en respectant une direction artistique imposée.
              </p>
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
        
        {/* Section: La feature GO OUT */}
        <section>
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3 mb-6">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>La feature "GO OUT"</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Côté Gauche : Les 2 vidéos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vidéo B2C */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full max-w-[240px]">
                  <div className="relative rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[8px] border-muted/50 overflow-hidden shadow-xl bg-background aspect-[9/19.5]">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src="/assets/OUT/goOut_b2c.mp4?v=3" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <span className="text-sm font-medium text-foreground/60 uppercase tracking-wider">Version B2C</span>
              </div>

              {/* Vidéo B2B */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full max-w-[240px]">
                  <div className="relative rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[8px] border-muted/50 overflow-hidden shadow-xl bg-background aspect-[9/19.5]">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src="/assets/OUT/goOut_b2b.mp4?v=3" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <span className="text-sm font-medium text-foreground/60 uppercase tracking-wider">Version B2B</span>
              </div>
            </div>

            {/* Côté Droit : Les textes explicatifs */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-4">1. La demande (Version B2C)</h3>
                <div className="text-foreground/70 leading-relaxed space-y-4">
                  <p>
                    L'expérience débute du côté de l'utilisateur. Celui-ci définit quand et où il souhaite sortir, le nombre de personnes prévues, et peut taguer ses amis directement sur l'application. 
                  </p>
                  <p>
                    Pour maximiser ses chances d'avoir une table, il a la possibilité de sélectionner <strong>plusieurs bars simultanément</strong> pour sa demande. Il peut également ajouter un commentaire s'il a un besoin ou une requête particulière (anniversaire, espace privatif...).
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">2. La réception (Version B2B)</h3>
                <div className="text-foreground/70 leading-relaxed space-y-4">
                  <p>
                    Du côté des établissements sélectionnés, le gérant reçoit la requête directement dans son espace dédié. Il peut consulter les détails, puis choisir de <strong>valider</strong> ou <strong>refuser</strong> la demande.
                  </p>
                  <p>
                    S'il valide, il a également la possibilité de laisser un commentaire en retour ou de contacter directement le client.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">3. La confirmation</h3>
                <div className="text-foreground/70 leading-relaxed space-y-4">
                  <p>
                    Une fois qu'un ou plusieurs bars ont accepté, la balle revient dans le camp de l'utilisateur (l'organisateur). Puisqu'il a pu solliciter plusieurs lieux, il risque de recevoir plusieurs validations : <strong>il doit alors faire son choix et confirmer l'événement final</strong> pour que le "GO OUT" soit officiellement acté avec l'établissement élu.
                  </p>
                  <p className="text-sm italic opacity-80 pt-2 border-t border-border/50">
                    Note : Afin de garantir une flexibilité totale, les deux parties conservent la possibilité d'annuler le "GO OUT" à tout moment depuis l'application.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* Section: Galeries d'écrans */}
        <section className="space-y-24 pt-16 border-t border-border/30">
          
          {/* Galerie B2C */}
          <div>
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3 mb-4">
                <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Application Utilisateur (B2C)</span>
              </h2>
              <div className="text-foreground/70 leading-relaxed space-y-4">
                <p>
                  L'expérience utilisateur a été repensée pour être plus vivante et interactive. On y retrouve un feed social pour suivre l'activité de ses amis et découvrir de nouveaux lieux, ainsi que l'intégration clé de la billetterie pour l'achat de tickets d'événements.
                </p>
                <p>
                  L'application va encore plus loin en offrant la possibilité de payer directement ses consommations depuis son téléphone. Enfin, une mécanique de découverte ludique sous forme de "swipe" (façon Tinder) a été ajoutée pour ajouter des amis, suivre des bars ou participer rapidement à des événements.
                </p>
              </div>
            </div>
            
            <div className="mt-8 w-full relative">
              <Carousel 
                setApi={setApiB2C}
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
                  {MAQUETTES_B2C.map((src, index) => {
                    const isActive = currentB2C === index;
                    return (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-[45%] md:basis-[28%] lg:basis-[22%]">
                        <div className="px-4">
                          <div
                            onClick={() => {
                              setCurrentB2C(index);
                              if (!apiB2C) return;
                              const isMobileLocal = apiB2C.scrollSnapList().length === MAQUETTES_B2C.length;
                              const inView = apiB2C.slidesInView();
                              if (isMobileLocal) {
                                apiB2C.scrollTo(index);
                              } else if (!inView.includes(index) || inView[inView.length - 1] === index || inView[0] === index) {
                                apiB2C.scrollTo(index);
                              }
                            }}
                            className={`relative cursor-pointer transition-all duration-500 ease-out rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[4px] md:border-[6px] border-muted/50 aspect-[9/19.5] bg-background ${
                              isActive 
                                ? "scale-105 z-20 shadow-2xl opacity-100 ring-4 ring-primary/10" 
                                : "scale-95 z-10 opacity-50 hover:opacity-80 shadow-md"
                            }`}
                          >
                            <img src={src} alt={`Maquette B2C ${index + 1}`} className="w-full h-full object-cover pointer-events-none" loading="lazy" />
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                
                <button
                  onClick={handlePrevB2C}
                  disabled={currentB2C === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </button>
                
                <button
                  onClick={handleNextB2C}
                  disabled={currentB2C === MAQUETTES_B2C.length - 1}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                
                <div className="flex justify-center gap-2 mt-4 pb-8">
                  {MAQUETTES_B2C.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClickB2C(index)}
                      aria-label={`Aller à la maquette ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentB2C === index ? "bg-primary w-8" : "bg-primary/20 w-2 hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>
          </div>

          {/* Galerie B2B */}
          <div>
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3 mb-4">
                <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Application Établissement (B2B)</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                L'interface centralisée pour les gérants de bars et d'établissements. Elle leur permet non seulement de gérer et modérer les réservations "GO OUT", mais aussi de créer et d'administrer leurs événements, d'avoir une vue globale sur leur activité, et de personnaliser entièrement le profil de leur établissement (infos, cartes, offres).
              </p>
            </div>
            
            <div className="mt-8 w-full relative">
              <Carousel 
                setApi={setApiB2B}
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
                  {MAQUETTES_B2B.map((src, index) => {
                    const isActive = currentB2B === index;
                    return (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-[45%] md:basis-[28%] lg:basis-[22%]">
                        <div className="px-4">
                          <div
                            onClick={() => {
                              setCurrentB2B(index);
                              if (!apiB2B) return;
                              const isMobileLocal = apiB2B.scrollSnapList().length === MAQUETTES_B2B.length;
                              const inView = apiB2B.slidesInView();
                              if (isMobileLocal) {
                                apiB2B.scrollTo(index);
                              } else if (!inView.includes(index) || inView[inView.length - 1] === index || inView[0] === index) {
                                apiB2B.scrollTo(index);
                              }
                            }}
                            className={`relative cursor-pointer transition-all duration-500 ease-out rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[4px] md:border-[6px] border-muted/50 aspect-[9/19.5] bg-background ${
                              isActive 
                                ? "scale-105 z-20 shadow-2xl opacity-100 ring-4 ring-primary/10" 
                                : "scale-95 z-10 opacity-50 hover:opacity-80 shadow-md"
                            }`}
                          >
                            <img src={src} alt={`Maquette B2B ${index + 1}`} className="w-full h-full object-cover pointer-events-none" loading="lazy" />
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                
                <button
                  onClick={handlePrevB2B}
                  disabled={currentB2B === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </button>
                
                <button
                  onClick={handleNextB2B}
                  disabled={currentB2B === MAQUETTES_B2B.length - 1}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                
                <div className="flex justify-center gap-2 mt-4 pb-8">
                  {MAQUETTES_B2B.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClickB2B(index)}
                      aria-label={`Aller à la maquette ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentB2B === index ? "bg-primary w-8" : "bg-primary/20 w-2 hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Section: Illustrations 3D */}
        <section className="space-y-12 pt-16 border-t border-border/30">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 space-y-6 md:sticky md:top-24">
              <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3 mb-4">
                <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Illustrations 3D</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Création d'illustrations 3D sur-mesure pour enrichir l'identité visuelle de l'application et apporter une dimension plus ludique, moderne et immersive.
              </p>
            </div>
            
            <div className="md:w-2/3 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {ILLUSTRATIONS_3D.map((src, index) => (
                  <div key={index} className="rounded-xl overflow-hidden bg-muted/20 border border-border/50 shadow-sm aspect-square flex items-center justify-center p-4 md:p-6">
                    <img src={src} alt={`Illustration 3D ${index + 1}`} className="w-full h-full object-contain hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
