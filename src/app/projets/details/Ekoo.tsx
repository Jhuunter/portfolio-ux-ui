"use client";

import { useState, useEffect } from "react";
import { TOOL_LOGOS } from "../../content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const THEMES = [
  { 
    id: 'theme1', 
    name: 'Thème 1', 
    images: ['maquettes_theme1_1.jpg', 'maquettes_theme1_2.jpg', 'maquettes_theme1_3.jpg', 'maquettes_theme1_4.jpg', 'maquettes_theme1_5.jpg', 'maquettes_theme1_6.jpg']
  },
  { 
    id: 'theme2', 
    name: 'Thème 2', 
    images: ['maquettes_theme2_1.jpg', 'maquettes_theme2_2.jpg', 'maquettes_theme2_3.jpg', 'maquettes_theme2_4.jpg', 'maquettes_theme2_5.jpg', 'maquettes_theme2_6.jpg']
  },
  { 
    id: 'theme3', 
    name: 'Thème 3', 
    images: ['maquettes_theme3_1.jpg', 'maquettes_theme3_2.jpg', 'maquettes_theme3_3.jpg', 'maquettes_theme3_4.jpg', 'maquettes_theme3_5.jpg', 'maquettes_theme3_6.jpg']
  }
];

const EKOO_ANNOTATIONS = [
  "Accueil (avec image)",
  "Accueil (sans image)",
  "Timer",
  "Enregistrement",
  "Formulaire",
  "Remerciement"
];

export function EkooDetails({ project }: { project: any }) {
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const activeTheme = THEMES[activeThemeIndex];
  
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      if (api.scrollSnapList().length === activeTheme.images.length) {
        setCurrent(api.selectedScrollSnap());
      }
    });
  }, [api, activeTheme.images.length]);

  // Reset carousel position when theme changes
  const handleThemeChange = (index: number) => {
    setActiveThemeIndex(index);
    setCurrent(0);
    if (api) {
      api.scrollTo(0);
    }
  };

  const handleNext = () => {
    if (current < activeTheme.images.length - 1) {
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
  return (
    <div className="w-full max-w-[1200px] mx-auto space-y-20">
      
      {/* En-tête / Brief du projet */}
      <div className="bg-muted/10 border border-border/50 rounded-3xl p-8 md:p-12">
        
        {/* Le contexte - Pleine largeur */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Le contexte</h2>
          <div className="text-foreground/70 leading-relaxed space-y-6">
            <p>
              <strong>Ekoo</strong> est une solution SaaS B2B innovante qui réinvente l'expérience client grâce à la voix. La plateforme permet aux entreprises d'intégrer des capsules et des avis audios directement sur leurs sites et fiches produits pour humaniser le parcours d'achat.
            </p>
            <p>
              L'enjeu central de ce projet reposait sur le <strong>tunnel d'enregistrement audio</strong>, qui constitue le cœur de la valeur du produit. Ce tunnel s'adresse à deux cibles distinctes : les entreprises qui enregistrent leurs messages officiels, et leurs clients finaux qui déposent des avis vocaux.
            </p>
          </div>
        </div>
        
        {/* Ligne 2 : Objectifs (gauche), Rôle + Outils (droite) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 border-t border-border/30">
          
          {/* Colonne Gauche : Objectifs */}
          <div>
            <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>Objectifs principaux</h3>
            <ul className="list-disc pl-4 space-y-3 text-sm text-foreground/80 leading-relaxed">
              <li><strong>Créer une nouvelle DA Premium :</strong> Repenser l'univers visuel à partir d'une page blanche avec un design moderne, épuré et engageant.</li>
              <li><strong>Concevoir un système flexible (White-Label) :</strong> Structurer les composants de l'interface pour permettre une intégration dynamique et sans couture des couleurs de chaque marque cliente.</li>
              <li><strong>Maximiser la conversion :</strong> Rassurer et guider visuellement les utilisateurs (professionnels ou particuliers) pour que la captation audio, la réécoute et la validation se fassent sans effort.</li>
            </ul>
          </div>
          
          {/* Colonne Droite : Mon rôle + Outils */}
          <div className="space-y-10">
            {/* Mon rôle */}
            <div>
              <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>Mon rôle</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <strong>Product / UI-UX Designer.</strong> J'ai piloté l'intégralité de cette refonte stratégique : Direction Artistique (création d'un univers visuel moderne et premium), Conception Modulaire (structuration marque blanche pour couleurs dynamiques), et Optimisation UX (simplification des parcours de captation, réécoute et validation B2B/B2C).
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
        {/* Défis et Contraintes */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3 mb-6">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Le Défi & Les Contraintes</span>
            </h2>
          </div>
          <ul className="space-y-8">
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <strong className="block text-xl font-medium text-foreground mb-2">Rupture Graphique</strong>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  La demande initiale était de s'éloigner complètement de la direction artistique d'origine d'Ekoo, jugée trop datée, pour proposer une interface en phase avec les standards visuels du marché haut de gamme.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <strong className="block text-xl font-medium text-foreground mb-2">Adaptabilité & Marque Blanche</strong>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Le tunnel devant s'intégrer directement sur les sites des marques clientes, l'interface devait être entièrement personnalisable. Le défi technique et UI était de concevoir l'application de manière à ce qu'elle puisse s'adapter à l'identité de chaque entreprise. J'ai donc dû structurer des points d'ancrage visuels spécifiques permettant d'injecter au moins deux couleurs de marque de manière fluide et harmonieuse dans les écrans, répondant ainsi aux chartes graphiques les plus complexes.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Maquettes (Carousel) */}
        <section>
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3 mb-2">
                <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Les Maquettes</span>
              </h2>
              <p className="text-foreground/70">Un tunnel de conversion modulaire s'adaptant à l'image de chaque marque cliente.</p>
            </div>
            
            {/* Theme Switcher */}
            <div className="flex gap-3">
              {THEMES.map((theme, idx) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(idx)}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center
                    ${activeThemeIndex === idx 
                      ? 'bg-primary text-primary-foreground shadow-md scale-105' 
                      : 'bg-muted/50 text-foreground/70 hover:bg-muted'}
                  `}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-16 w-full relative -mx-4 px-4 md:mx-0 md:px-0">
            <Carousel 
              setApi={setApi}
              opts={{ 
                align: "center",
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
                {activeTheme.images.map((filename, index) => {
                  const isActive = current === index;
                  return (
                    <CarouselItem 
                      key={filename} 
                      className="pl-2 md:pl-4 basis-full sm:basis-[45%] md:basis-[28%] lg:basis-[22%]"
                    >
                      <div className="px-4">
                        <div className="flex flex-col items-center">
                          <div 
                          onClick={() => {
                            setCurrent(index);
                            if (!api) return;
                            
                            const isMobile = api.scrollSnapList().length === activeTheme.images.length;
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
                          className={`relative cursor-pointer transition-all duration-500 ease-out rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[4px] md:border-[6px] border-muted/50 ${
                            isActive 
                              ? "scale-105 z-20 shadow-2xl opacity-100 ring-4 ring-primary/10" 
                              : "scale-95 z-10 opacity-50 hover:opacity-80 shadow-md"
                          }`}
                        >
                          <img
                            src={`/assets/EKOO/${filename}`}
                            alt={`Maquette Ekoo ${activeTheme.name} ${index + 1}`}
                            className="w-full h-auto block object-cover pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MDAgMTYwMCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxNjAwIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjMyIiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2Ugbm9uIHRyb3V2w6llPC90ZXh0Pjwvc3ZnPg==';
                            }}
                          />
                        </div>
                        <p 
                          className={`mt-4 text-center text-sm font-medium transition-all duration-500 ${
                            isActive ? "text-foreground opacity-100" : "text-foreground/50 opacity-0 md:opacity-50"
                          }`}
                        >
                          {EKOO_ANNOTATIONS[index]}
                        </p>
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
                disabled={current === activeTheme.images.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              
              <div className="flex justify-center gap-2 mt-4 pb-8">
                {activeTheme.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrent(idx);
                      if (api) api.scrollTo(idx);
                    }}
                    aria-label={`Aller à la maquette ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      current === idx ? "bg-primary w-8" : "bg-primary/20 w-2 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
              </Carousel>
            </div>
        </section>
      </div>
    </div>
  );
}
