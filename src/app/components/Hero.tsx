import { forwardRef, useState, useEffect, Fragment } from "react";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  scrollTo: (id: string) => void;
}

export const Hero = forwardRef<HTMLDivElement, HeroProps>(({ scrollTo }, ref) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 md:px-12 pt-24 pb-16 md:pt-20 md:pb-0 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bg-head.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Noise overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045]" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <div 
        className="relative max-w-[1200px] mx-auto w-full flex flex-col items-center text-center"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          opacity: Math.max(1 - scrollY / 400, 0),
          transition: "opacity 0.1s ease-out, transform 0.1s ease-out"
        }}
      >
        {/* Role tag */}
        <div
          className="inline-flex items-center justify-center gap-3 mb-8 text-sm tracking-widest uppercase text-primary"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <span className="w-8 h-px bg-primary inline-block shrink-0" />
          <span className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-center">
            <span>Justine Letho Duclos</span>
            <span className="hidden md:inline">-</span>
            <span>UX/UI Designer</span>
          </span>
          <span className="w-8 h-px bg-primary inline-block shrink-0" />
        </div>

        {/* Punchy heading replacing the old selection box */}
        <h1
          className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.3] tracking-tight max-w-5xl mb-12 mt-6 text-center"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Je conçois des produits <span className="text-primary font-semibold">simples à utiliser</span><br />et <span className="text-primary font-semibold">agréables à regarder</span>.
        </h1>

        <div className="flex flex-col items-center gap-10 w-full">

          {/* Ticker banner */}
          <div 
            className="w-full max-w-[650px] overflow-hidden relative select-none flex py-4 my-2 group-ticker"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
          >
            <div className="flex shrink-0 animate-marquee whitespace-nowrap gap-8 items-center pr-8">
              {[
                "APPLICATION MOBILE",
                "SAAS",
                "SITE INTERNET",
                "DESIGN SYSTEM",
                "VIBE CODING",
                "INTÉGRATION HTML/CSS"
              ].map((item, idx) => (
                <Fragment key={"ticker-1-" + idx}>
                  <span 
                    className="relative group/item group-item cursor-pointer px-3 py-1.5 text-sm tracking-widest text-foreground/45 hover:text-primary transition-colors font-medium select-none"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item}
                    {/* Bounding box on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 pointer-events-none">
                      <svg className="absolute inset-0 w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
                      </svg>
                      {/* Bounding Box handles */}
                      <div className="absolute -top-[2px] -left-[2px] w-[5px] h-[5px] bg-white border border-primary" />
                      <div className="absolute -top-[2px] -right-[2px] w-[5px] h-[5px] bg-white border border-primary" />
                      <div className="absolute -bottom-[2px] -left-[2px] w-[5px] h-[5px] bg-white border border-primary" />
                      <div className="absolute -bottom-[2px] -right-[2px] w-[5px] h-[5px] bg-white border border-primary" />
                    </div>
                  </span>
                  <span className="text-primary font-bold opacity-60 text-sm">✦</span>
                </Fragment>
              ))}
            </div>
            
            <div className="flex shrink-0 animate-marquee whitespace-nowrap gap-8 items-center pr-8" aria-hidden="true">
              {[
                "APPLICATION MOBILE",
                "SAAS",
                "SITE INTERNET",
                "DESIGN SYSTEM",
                "VIBE CODING",
                "INTÉGRATION HTML/CSS"
              ].map((item, idx) => (
                <Fragment key={"ticker-2-" + idx}>
                  <span 
                    className="relative group/item group-item cursor-pointer px-3 py-1.5 text-sm tracking-widest text-foreground/45 hover:text-primary transition-colors font-medium select-none"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item}
                    {/* Bounding box on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 pointer-events-none">
                      <svg className="absolute inset-0 w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
                      </svg>
                      {/* Bounding Box handles */}
                      <div className="absolute -top-[2px] -left-[2px] w-[5px] h-[5px] bg-white border border-primary" />
                      <div className="absolute -top-[2px] -right-[2px] w-[5px] h-[5px] bg-white border border-primary" />
                      <div className="absolute -bottom-[2px] -left-[2px] w-[5px] h-[5px] bg-white border border-primary" />
                      <div className="absolute -bottom-[2px] -right-[2px] w-[5px] h-[5px] bg-white border border-primary" />
                    </div>
                  </span>
                  <span className="text-primary font-bold opacity-60 text-sm">✦</span>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={() => scrollTo("projets")}
              className="group flex flex-col items-center gap-4 text-sm cursor-pointer"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="text-foreground/50 group-hover:text-foreground transition-colors tracking-wider">
                Voir mes projets
              </span>
              <span className="w-10 h-10 border border-foreground/20 group-hover:border-primary flex items-center justify-center transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground rounded-full">
                <ArrowDown size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
