import { TOOL_LOGOS } from "../../content";
import { ZoomableImage } from "../../components/ZoomableImage";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";

const CHARTE_SLIDES: string[] = [
  "charte_1.jpg", "charte_2.jpg", "charte_3.jpg", "charte_4.jpg", "charte_5.jpg",
  "charte_6.jpg", "charte_7.jpg", "charte_8.jpg", "charte_9.jpg", "charte_10.jpg"
];
const MASCOTTE_IMAGES: string[] = ["mascotte_1.png", "mascotte_2.png", "mascotte_3.png"];
const CARTE_VISITE_IMAGES: string[] = ["carte_1.png", "carte_2.png"];
const AFFICHES_IMAGES: string[] = ["affiche_1.jpg", "affiche_2.jpg"];
const ANIMATION_LOGO_VIDEO: string = "logo_IRL.mp4";

export function MuseeIrlDetails({ project }: { project: any }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto space-y-20">
      
      {/* En-tête / Brief du projet */}
      <div className="bg-muted/10 border border-border/50 rounded-3xl p-8 md:p-12">
        
        {/* Le contexte - Pleine largeur */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Le contexte</h2>
          <div className="text-foreground/70 leading-relaxed space-y-6">
            <p>
              Réalisé dans le cadre d'un bootcamp intensif, ce projet fictif avait pour but d'imaginer l'identité visuelle complète (Direction Artistique) d'un concept de musée. Parmi les sujets proposés, j'ai choisi "Musée IRL".
            </p>
            <p>
              Mon ambition a été de concevoir un musée résolument tourné vers l'avenir et la science. J'ai imaginé un lieu immersif axé sur les planètes et les dinosaures, où la technologie prend toute sa place à travers des expériences en hologrammes et du vidéo mapping.
            </p>
          </div>
        </div>
        
        {/* Ligne 2 : Objectifs (gauche), Rôle + Outils (droite) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 border-t border-border/30">
          
          {/* Colonne Gauche : Objectifs */}
          <div>
            <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs md:text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>Objectifs principaux</h3>
            <ul className="list-disc pl-4 space-y-3 text-sm text-foreground/80 leading-relaxed">
              <li><strong>Direction Artistique :</strong> Définir l'identité visuelle d'un musée novateur (couleurs, typographies, univers).</li>
              <li><strong>Création d'expérience :</strong> Transmettre l'aspect scientifique et technologique (hologrammes, vidéo mapping, planètes, dinosaures) à travers le design.</li>
              <li><strong>Déploiement :</strong> Décliner cette identité sur différents supports de communication.</li>
            </ul>
          </div>
          
          {/* Colonne Droite : Mon rôle + Outils */}
          <div className="space-y-10">
            {/* Mon rôle */}
            <div>
              <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs md:text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>Mon rôle</h3>
              <p className="text-sm text-foreground/80 leading-relaxed"><strong>Direction Artistique & UI/UX Design.</strong> Projet réalisé en autonomie complète (conception conceptuelle et design visuel).</p>
            </div>
            
            {/* Outils */}
            <div>
              <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs md:text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>Outils</h3>
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
        
        {/* Section 1: Recherches & Stratégie */}
        <section>
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3 mb-6">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>1. Recherches & Stratégie</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Texte et Concurrents */}
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                La phase de recherche a débuté par une immersion dans les nouvelles formes d'expositions numériques. L'objectif était de comprendre comment la technologie (vidéo mapping, hologrammes) pouvait servir de support éducatif et émotionnel, plutôt que d'être un simple gadget.
              </p>
              <p>
                J'ai notamment analysé des acteurs pionniers comme l'<strong>Atelier des Lumières</strong> (pour l'immersion totale par la projection et le son) et l'espace de la <strong>Fondation EDF</strong> (pour leur façon de vulgariser des sujets complexes via des installations interactives). Cela m'a permis de dégager les meilleures pratiques pour structurer l'expérience de "Musée IRL".
              </p>
            </div>
            
            {/* Personas Condensés */}
            <div className="bg-muted/10 border border-border/50 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-widest text-primary/80" style={{ fontFamily: "'DM Mono', monospace" }}>Personas Clés (Synthèse)</h3>
              
              <div className="space-y-4">
                {/* Persona 1 */}
                <div className="bg-background rounded-xl p-5 border border-border/50 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold shrink-0">
                    L
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Léo, 12 ans & sa famille</h4>
                    <p className="text-xs text-foreground/50 mb-2">Les curieux en quête d'interaction</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Passionné par l'espace et les dinosaures, Léo se lasse vite de la lecture de longs panneaux dans les musées classiques. Ses parents cherchent une sortie éducative mais dynamique. <br/>
                      <span className="text-primary/90 font-medium mt-1 inline-block">Besoin : Une forte interactivité visuelle.</span>
                    </p>
                  </div>
                </div>
                
                {/* Persona 2 */}
                <div className="bg-background rounded-xl p-5 border border-border/50 flex flex-col sm:flex-row gap-4 items-start shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold shrink-0">
                    S
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Sarah, 26 ans</h4>
                    <p className="text-xs text-foreground/50 mb-2">La technophile sensible à l'esthétique</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Adepte des expositions immersives pour l'aspect sensoriel, qu'elle aime partager sur les réseaux. Elle veut vivre une vraie expérience esthétique et futuriste. <br/>
                      <span className="text-primary/90 font-medium mt-1 inline-block">Besoin : Une direction artistique spectaculaire (effet Wow).</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Charte Graphique */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>2. Charte Graphique</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p>
              Pour ancrer ce concept de musée tourné vers l'avenir, j'ai imaginé une direction artistique à mi-chemin entre l'esthétique scientifique et l'univers du jeu vidéo ou de la science-fiction. Les couleurs, la typographie et les formes ont été choisies pour plonger immédiatement le visiteur dans cette atmosphère technologique.
            </p>
          </div>
          
          {/* Carousel Charte Graphique */}
          <div className="mt-12 px-12 md:px-16">
            <Carousel className="w-full">
              <CarouselContent>
                {CHARTE_SLIDES.length > 0 ? (
                  CHARTE_SLIDES.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-muted/30 rounded-lg overflow-hidden border border-border shadow-sm">
                        <ZoomableImage
                          src={`/assets/IRL/${encodeURIComponent(slide)}`}
                          alt={`Slide Charte Graphique ${index + 1}`}
                          className="w-full h-auto block"
                        />
                      </div>
                    </CarouselItem>
                  ))
                ) : (
                  <CarouselItem>
                    <div className="aspect-video bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center text-foreground/50">
                      [En attente des images de la charte graphique...]
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Section 3: Mascotte */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>3. Création de la Mascotte</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p>
              L'étape suivante a été de concevoir une mascotte. Bien que ce n'était pas imposé dans le brief initial, j'ai jugé cet élément indispensable pour donner une âme au musée.
            </p>
            <p>
              Dans un environnement très technologique (hologrammes, vidéo mapping), la mascotte agit comme un repère chaleureux. Elle ajoute une dimension ludique, attire les visiteurs et permet de créer un lien émotionnel immédiat avec le public, tout en servant de guide tout au long du parcours.
            </p>
          </div>
          
          {/* Grille pour les 3 images de mascotte */}
          <div className="mt-12 bg-muted/30 rounded-3xl overflow-hidden border border-border shadow-sm p-6 md:p-10">
            {MASCOTTE_IMAGES.length === 3 ? (
              <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-10 md:gap-10">
                {MASCOTTE_IMAGES.map((img, index) => (
                  <ZoomableImage
                    key={index}
                    src={`/assets/IRL/${encodeURIComponent(img)}`}
                    alt={`Mascotte Musée IRL ${index + 1}`}
                    className="w-auto h-[260px] md:h-[380px] object-contain drop-shadow-sm"
                  />
                ))}
              </div>
            ) : (
              // Placeholders si les images ne sont pas encore là
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="aspect-square border-2 border-dashed border-border flex items-center justify-center text-foreground/50 text-sm text-center p-4">
                  [Mascotte Image 1]
                </div>
                <div className="aspect-square border-2 border-dashed border-border flex items-center justify-center text-foreground/50 text-sm text-center p-4">
                  [Mascotte Image 2]
                </div>
                <div className="aspect-square border-2 border-dashed border-border flex items-center justify-center text-foreground/50 text-sm text-center p-4">
                  [Mascotte Image 3]
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Cartes de visite */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>4. Cartes de Visite</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/70 leading-relaxed mb-10">
            <p>
              L’étape suivante a consisté à décliner l'identité visuelle sur un support physique incontournable : les cartes de visite.
            </p>
            <p>
              Conçues pour refléter l'ambiance technologique et le professionnalisme du musée, elles sont souvent le premier point de contact avec de potentiels partenaires. Le design se devait d'être percutant et minimaliste, permettant de prolonger l'expérience de la marque au-delà des murs du musée.
            </p>
          </div>
          
          <div className="w-full">
            {CARTE_VISITE_IMAGES.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {CARTE_VISITE_IMAGES.map((img, index) => (
                  <div key={index} className="bg-muted/30 rounded-3xl overflow-hidden border border-border shadow-sm">
                    <ZoomableImage
                      src={`/assets/IRL/${encodeURIComponent(img)}`}
                      alt={`Cartes de visite Musée IRL ${index + 1}`}
                      className="w-full h-auto block"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full aspect-video md:aspect-[21/9] bg-muted/30 rounded-3xl border-2 border-dashed border-border flex items-center justify-center text-foreground/50 text-sm text-center p-4">
                [Image des cartes de visite]
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Affiches publicitaires */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>5. Affiches Publicitaires</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/70 leading-relaxed mb-10">
            <p>
              Pour promouvoir le musée et ses expositions immersives dans l'espace urbain, j'ai imaginé une série d'affiches publicitaires. L'enjeu était d'attirer l'attention instantanément grâce à des visuels très contrastés et des accroches qui évoquent le voyage spatio-temporel au cœur des technologies holographiques.
            </p>
          </div>
          
          {/* Grille pour les affiches */}
          <div className="w-full">
            {AFFICHES_IMAGES.length >= 2 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 bg-muted/30 rounded-3xl overflow-hidden border border-border shadow-sm">
                  <ZoomableImage
                    src={`/assets/IRL/${encodeURIComponent(AFFICHES_IMAGES[0])}`}
                    alt="Affiche Musée IRL Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 bg-muted/30 rounded-3xl overflow-hidden border border-border shadow-sm">
                  <ZoomableImage
                    src={`/assets/IRL/${encodeURIComponent(AFFICHES_IMAGES[1])}`}
                    alt="Affiche Musée IRL Paysage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] bg-muted/30 rounded-3xl border-2 border-dashed border-border flex items-center justify-center text-foreground/50 text-sm text-center p-4">
                  [Affiche 1]
                </div>
                <div className="aspect-[3/4] bg-muted/30 rounded-3xl border-2 border-dashed border-border flex items-center justify-center text-foreground/50 text-sm text-center p-4">
                  [Affiche 2]
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 6: Animation du logo */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>6. Animation du Logo</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/70 leading-relaxed mb-12">
            <p>
              Pour conclure ce travail de Direction Artistique, j'ai réalisé une animation en motion design du logo. Cette version animée est pensée pour être projetée en introduction des expériences en vidéo mapping et sur les écrans d'accueil du musée, apportant une dernière touche de modernité et de dynamisme.
            </p>
          </div>
          
          {/* Vidéo Animation */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-lg">
              {ANIMATION_LOGO_VIDEO ? (
                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-sm w-full bg-muted/30">
                  <video 
                    src={`/assets/IRL/${encodeURIComponent(ANIMATION_LOGO_VIDEO)}`} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto block"
                  />
                  <div className="p-4 bg-muted/20 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <img src="/assets/OUTILS/After_Effects.svg" alt="After Effects" className="w-5 h-5 object-contain opacity-70 shrink-0" />
                    <span className="text-sm text-foreground/80 font-medium text-center">Animation réalisée sur After Effects.</span>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-muted/30 rounded-3xl border-2 border-dashed border-border flex flex-col items-center justify-center text-foreground/50 gap-4">
                  <span className="text-sm text-center px-4">[En attente de la vidéo d'animation du logo]</span>
                </div>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
