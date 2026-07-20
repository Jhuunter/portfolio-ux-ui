import { TOOL_LOGOS } from "../../content";
import { Search, Users, Headphones } from "lucide-react";
import { ZoomableImage } from "../../components/ZoomableImage";

export function SelvitysDetails({ project }: { project: any }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto space-y-20">
      
      {/* En-tête / Brief du projet */}
      <div className="bg-muted/10 border border-border/50 rounded-3xl p-8 md:p-12">
        
        {/* Le contexte - Pleine largeur */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Le contexte</h2>
          <div className="text-foreground/70 leading-relaxed space-y-6">
            <p>
Selvitys est une plateforme SaaS experte en études de marché et en analyse de données complexes (tableaux croisés, rapports automatisés).            </p>
            <p>
L'enjeu majeur de cette refonte globale était de transformer la complexité technique en une expérience fluide et intuitive. Le point noir de l'ancienne interface résidait dans le générateur de questionnaires (survey builder) : devenu trop rigide, il bloquait les utilisateurs, ralentissait considérablement la création d'enquêtes et impactait directement l'adoption du produit.            </p>
            <p>
Pour y répondre, l'effort de conception s'est concentré sur la refonte complète du builder, mais a également englobé l'optimisation de l'affichage des résultats (data viz) ainsi qu'une refonte UI globale de la plateforme (écran de connexion, listes de sondages, etc.) pour harmoniser et moderniser l'ensemble de l'écosystème.            </p>
          </div>
        </div>
        
        {/* Ligne 2 : Objectifs (gauche), Rôle + Outils (droite) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 border-t border-border/30">
          
          {/* Colonne Gauche : Objectifs */}
          <div>
            <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs md:text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>Objectifs principaux</h3>
            <ul className="list-disc pl-4 space-y-3 text-sm text-foreground/80 leading-relaxed">
              <li><strong>Simplifier le Builder (Priorité UX) :</strong> Supprimer les blocages et les "bricolages" pour rendre la création de sondages intuitive et rapide.</li>
              <li><strong>Moderniser l'UI :</strong> Harmoniser la plateforme (connexion, listes) avec un design SaaS épuré pour valoriser l'image de marque du produit.</li>
              <li><strong>Assurer la scalabilité :</strong> Bâtir une structure modulaire prête à accueillir de futures fonctionnalités expertes sans complexifier l'interface.</li>
              <li><strong>Impact Business :</strong> Sécuriser l'adoption immédiate du produit par les clients, réduire drastiquement le besoin de support et optimiser le temps de travail des équipes en interne.</li>
            </ul>
          </div>
          
          {/* Colonne Droite : Mon rôle + Outils */}
          <div className="space-y-10">
            {/* Mon rôle */}
            <div>
              <h3 className="text-primary font-medium mb-4 uppercase tracking-widest text-xs md:text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>Mon rôle</h3>
              <p className="text-sm text-foreground/80 leading-relaxed"><strong>Product / UI-UX Designer.</strong> J’ai piloté la restructuration complète de l'architecture de l'information (UX) et conçu l'interface finale (UI) en veillant à sa parfaite faisabilité technique pour l'intégration front-end.</p>
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
      <div className="space-y-16">

        {/* Partie 1: L'UI globale & Design System */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Partie 01</span>
              <span className="text-primary/50">—</span>
              <span>L'UI Globale & Le Design System</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/60 leading-relaxed">
            <p>
              Avant de plonger dans la refonte des fonctionnalités complexes, j'ai posé les fondations visuelles de la plateforme en créant un véritable <strong>Design System</strong>. L'objectif était d'apporter de la cohérence et d'harmoniser l'ensemble de l'écosystème avec une identité SaaS contemporaine, épurée et minimaliste.
            </p>
            <p>
              J'ai défini les couleurs, la typographie, les états des boutons, les champs de formulaires et l'ensemble des composants d'interface de base. Cette librairie de composants a servi de socle technique et visuel : toutes les fonctionnalités qui ont suivi (Builder, Résultats, etc.) ont été conçues et développées à partir de ce Design System, garantissant ainsi une parfaite cohérence sur toute la plateforme et un gain de temps énorme lors de l'intégration.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <div className="rounded-xl overflow-hidden border border-border/50 bg-muted/20 shadow-sm flex items-center justify-center p-4">
                <ZoomableImage 
                  src="/assets/SELVITYS/variables.jpg" 
                  alt="Variables du Design System" 
                  className="w-full h-auto object-contain rounded"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border/50 bg-muted/20 shadow-sm flex items-center justify-center p-4">
                <video 
                  src="/assets/SELVITYS/video_connect.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto rounded border border-border/10 shadow-sm"
                />
              </div>
            </div>
            <div className="rounded-xl border border-border/50 bg-muted/20 shadow-sm min-h-[300px] p-4 flex">
              <div className="relative w-full h-full overflow-hidden rounded">
                <ZoomableImage 
                  src="/assets/SELVITYS/button_ds.jpg" 
                  alt="Composants boutons du Design System" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partie 2: Le Builder */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Partie 02</span>
              <span className="text-primary/50">—</span>
              <span>Le Builder</span>
            </h2>
          </div>
          <div className="space-y-12 text-foreground/60 leading-relaxed mt-6">
            
            <div className="pt-8 border-t border-border/40 first:pt-0 first:border-0">
              <h3 className="text-xl md:text-2xl font-medium mb-6 text-foreground tracking-tight">
                Mon approche : Immersion et synthèse des besoins
              </h3>
              <p className="mb-8">Mon travail a débuté par une phase d'investigation approfondie à 360° :</p>
              
              <div className="my-10 bg-muted/20 border border-border/50 rounded-xl p-6 md:p-8">
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="text-primary mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>01</div>
                    <div className="flex-1 pl-5 border-l border-border/40">
                      <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                        <span className="text-foreground font-medium">Audit ergonomique externe :</span> J'ai analysé l'outil à froid pour identifier de manière objective les barrières à l'utilisation, les fonctionnalités trop enfouies et les manques de clarté de l'interface.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="text-primary mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>02</div>
                    <div className="flex-1 pl-5 border-l border-border/40">
                      <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                        <span className="text-foreground font-medium">Retours de l'équipe interne :</span> J'ai interrogé mes collègues qui utilisent quotidiennement la plateforme pour comprendre précisément ce qui leur faisait perdre du temps et identifier leurs frustrations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="text-primary mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>03</div>
                    <div className="flex-1 pl-5 border-l border-border/40">
                      <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                        <span className="text-foreground font-medium">Écoute des clients :</span> En participant aux visios de mes collaborateurs avec les clients, j'ai pu capter directement l'expérience des utilisateurs finaux et comprendre leurs besoins réels sur le terrain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="text-primary mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>04</div>
                    <div className="flex-1 pl-5 border-l border-border/40">
                      <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                        <span className="text-foreground font-medium">Étude de la concurrence :</span> Benchmark des outils existants sur le marché pour comprendre les standards d'UX, identifier les bonnes pratiques et se positionner de manière pertinente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p>J'ai ensuite centralisé et synthétisé l'ensemble de ces demandes pour définir une feuille de route claire.</p>
            </div>

            <div className="pt-8 border-t border-border/40 first:pt-0 first:border-0">
              <h3 className="text-xl md:text-2xl font-medium mb-6 text-foreground tracking-tight">
                La solution : Un builder modulaire et scalable
              </h3>
              <p className="mb-4">
                Dès le début de la phase de conception, mon mot d'ordre a été la scalabilité. Sachant que la plateforme Selvitys était amenée à s'enrichir constamment, l'architecture du nouveau builder devait être pensée pour accueillir de futures fonctionnalités expertes sans casser l'expérience utilisateur.
              </p>
              <p>
                Cette anticipation s'est avérée cruciale : de nouvelles demandes clients sont apparues en cours de création, et la structure modulaire que j'avais imaginée a permis de les intégrer naturellement et sans friction.
              </p>
              
              <div className="mt-8 rounded-xl border border-border/50 bg-muted/20 shadow-sm p-4 flex items-center justify-center">
                <ZoomableImage 
                  src="/assets/SELVITYS/figma_plan.jpg" 
                  alt="Plan d'architecture modulaire sur Figma" 
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </div>

            <div className="pt-8 border-t border-border/40 first:pt-0 first:border-0">
              <h3 className="text-xl md:text-2xl font-medium mb-6 text-foreground tracking-tight">
                Déploiement et résultats
              </h3>
              <p className="mb-4">
                Après une phase intensive de construction et de tests, le nouveau builder a été déployé en production.
              </p>
              <p className="mb-4">
                Afin de valider mes choix de conception, j'ai suivi de près les retours d'utilisation post-lancement. Le bilan s'est avéré extrêmement positif : les utilisateurs ont immédiatement adopté et compris la nouvelle interface, ne nécessitant que de très mineurs ajustements. La friction a disparu, laissant place à un workflow fluide et efficace.
              </p>
             
            </div>

          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="rounded-xl border border-border/50 bg-muted/20 shadow-sm p-4 flex flex-col items-center justify-center">
              <ZoomableImage 
                src="/assets/SELVITYS/builder_img.jpg" 
                alt="Interface du Builder Selvitys" 
                className="w-full h-auto object-contain rounded"
              />
              <p className="mt-4 text-sm text-foreground/70 text-center">Interface globale du nouveau Builder</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-muted/20 shadow-sm p-4 flex flex-col items-center justify-center">
              <ZoomableImage 
                src="/assets/SELVITYS/builder_questions_img.jpg" 
                alt="Questions du Builder Selvitys" 
                className="w-full h-auto object-contain rounded"
              />
              <p className="mt-4 text-sm text-foreground/70 text-center">Modale d'ajout de questions</p>
            </div>
          </div>
        </section>

        {/* Partie 3: Les Résultats */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Partie 03</span>
              <span className="text-primary/50">—</span>
              <span>Analyse des résultats des sondages</span>
            </h2>
          </div>
          <div className="space-y-12 text-foreground/60 leading-relaxed mt-6">
            
            <div className="pt-8 border-t border-border/40 first:pt-0 first:border-0">
              <h3 className="text-xl md:text-2xl font-medium mb-6 text-foreground tracking-tight">
                Une méthodologie éprouvée
              </h3>
              <p className="mb-4">
                Pour repenser l'affichage et l'analyse des résultats de sondages, j'ai appliqué exactement la même technique d'investigation que pour le Builder : audit ergonomique de l'existant, recueil des retours de l'équipe interne et analyse des points de friction.
              </p>
              <p>
                L'objectif principal était de rendre la visualisation des données (Data Viz) plus claire, plus lisible et actionnable pour les clients finaux, sans les noyer sous une quantité d'informations complexes.
              </p>
            </div>

            <div className="pt-8 border-t border-border/40 first:pt-0 first:border-0">
              <h3 className="text-xl md:text-2xl font-medium mb-6 text-foreground tracking-tight">
                Refonte de l'interface et nouvelles fonctionnalités
              </h3>
              <p className="mb-4">
                Mon travail s'est concentré sur deux axes : la modernisation de l'UI globale de la page des résultats pour la rendre plus lisible, et surtout l'amélioration de l'affichage complexe des tris croisés, qui représentait un enjeu majeur d'ergonomie.
              </p>
              <p className="mb-4">
                Au-delà de l'aspect purement visuel, cette refonte s'est accompagnée de l'ajout de véritables fonctionnalités attendues par les utilisateurs : la possibilité de générer des exports avec des filtres avancés, ou encore l'export de tris croisés incluant tous les tableaux d'un seul coup.
              </p>
              <p className="text-sm italic text-foreground/40 mt-6">
                (Note : Si la refonte visuelle globale de la plateforme a été déployée en parallèle du Builder, la refonte de cette page spécifique des résultats est actuellement en cours d'implantation en production.)
              </p>
            </div>

          </div>
          <div className="mt-8 rounded-xl overflow-hidden border border-border/50 bg-muted/20 shadow-sm flex items-center justify-center p-4">
            <video 
              src="/assets/SELVITYS/video_resultats.mp4" 
              controls 
              muted 
              playsInline 
              className="w-full aspect-[16/9] object-cover object-center rounded block shadow-sm"
            />
          </div>
        </section>

        {/* Partie 4: Outils Internes */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Partie 04</span>
              <span className="text-primary/50">—</span>
              <span>Développement d'outils internes</span>
            </h2>
          </div>
          <div className="space-y-6 text-foreground/60 leading-relaxed">
            <p>
              En parallèle de l'interface client, j'ai également conçu et développé des outils internes spécifiques pour optimiser les processus de l'équipe et générer un gain de temps considérable au quotidien.
            </p>
            <p>
              D'un point de vue technique, j'ai généré la base de ces outils via <strong>Lovable</strong>, puis je les ai modifiés et affinés avec <strong>Antigravity</strong>. Les projets ont ensuite été hébergés sur <strong>GitLab</strong> et directement implantés sous forme d'<em>iframes</em> au sein de la plateforme.
            </p>
            <div className="pt-6">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <strong className="text-foreground font-medium block mb-1">Outil de codification des verbatims</strong>
                    <p>La création d'un outil dédié pour automatiser et faciliter la codification des verbatims issus des sondages. Cette solution a permis de réduire drastiquement le temps de traitement manuel et d'améliorer l'efficacité de l'équipe.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <strong className="text-foreground font-medium block mb-1">Générateur de nuages de mots personnalisés</strong>
                    <p>J'ai développé un outil sur-mesure permettant de générer facilement des nuages de mots percutants et personnalisés pour illustrer les résultats de sondages et enrichir les restitutions visuelles.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-video rounded-xl overflow-hidden border border-border/50 relative bg-muted/20 shadow-sm">
              <video 
                src="/assets/SELVITYS/video_verbatims.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border/50 relative bg-muted/20 shadow-sm">
              <video 
                src="/assets/SELVITYS/video_nuage.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
