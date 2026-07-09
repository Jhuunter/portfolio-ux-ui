import { useEffect, useRef } from "react";
import { projects, TOOL_LOGOS } from "../content";
import { Link, useParams } from "react-router";
import { SelvitysDetails } from "./details/Selvitys";
import { AnswerItDetails } from "./details/AnswerIt";
import { EkooDetails } from "./details/Ekoo";
import { OutDetails } from "./details/Out";
import { MuseeIrlDetails } from "./details/MuseeIrl";

const PROJECT_COMPONENTS: Record<string, React.FC<{ project: any }>> = {
  "01": SelvitysDetails,
  "02": AnswerItDetails,
  "03": EkooDetails,
  "04": OutDetails,
  "05": MuseeIrlDetails,
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Projet introuvable</h1>
          <Link to="/" className="text-primary hover:underline">Retour à l'accueil</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navbar minimaliste */}
      <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl tracking-tight hover:text-primary transition-colors">
            Justine Letho Duclos
          </Link>
          <Link to="/#projets" className="text-sm tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
            Retour
          </Link>
        </div>
      </nav>

      <article className="pt-32 pb-20 px-6 md:px-12 max-w-[1200px] mx-auto">
        {/* En-tête du projet */}
        <header className="mb-16">
          <div 
            className="text-sm text-primary mb-6 tracking-widest uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-4 py-1.5 text-foreground/80"
                style={{ 
                  fontFamily: "'DM Mono', monospace",
                  borderRadius: "225px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "linear-gradient(97deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100.85%)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-xl text-foreground/60 leading-relaxed">
            {project.description}
          </p>
        </header>

        <div className="w-full aspect-[2/1] bg-muted rounded-lg overflow-hidden mb-20">
          <img 
            src={project.coverImage || project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu spécifique au projet */}
        {PROJECT_COMPONENTS[project.id] ? (
          (() => {
            const Component = PROJECT_COMPONENTS[project.id];
            return <Component project={project} />;
          })()
        ) : (
          <div className="text-center py-20 text-foreground/50">
            Le contenu détaillé de ce projet n'est pas encore disponible.
          </div>
        )}

        {/* Autres projets */}
        <div className="mt-32 pt-12 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium">Autres projets</h2>
            {/* Flèches de navigation desktop */}
            <div className="hidden md:flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white/5 transition-colors text-foreground/70 hover:text-foreground"
                aria-label="Projets précédents"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white/5 transition-colors text-foreground/70 hover:text-foreground"
                aria-label="Projets suivants"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Slider horizontal */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.filter(p => p.id !== project.id).map((otherProject) => (
              <Link 
                to={`/projets/${otherProject.id}`} 
                key={otherProject.id}
                className="flex-none w-[250px] sm:w-[310px] group cursor-pointer snap-start"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
                  <img 
                    src={otherProject.image} 
                    alt={otherProject.title} 
                    className="w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 md:group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{otherProject.title}</h3>
                <div 
                  className="text-xs text-foreground/40 mt-1 tracking-widest uppercase"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {otherProject.category}
                </div>
              </Link>
            ))}
          </div>
          
          {/* Bouton retour */}
          <div className="mt-12 text-center">
            <Link 
              to="/#projets" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-white/5 transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
