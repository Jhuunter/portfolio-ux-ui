import { forwardRef, useState, useEffect } from "react";
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
          className="inline-flex items-center justify-center gap-3 mb-8 text-xs tracking-widest uppercase text-primary"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <span className="w-6 h-px bg-primary inline-block shrink-0" />
          <span className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-center">
            <span>Justine Letho Duclos</span>
            <span className="hidden md:inline">-</span>
            <span>UX/UI Designer</span>
          </span>
          <span className="w-6 h-px bg-primary inline-block shrink-0" />
        </div>

        {/* Big headline with selection box effect */}
        <div className="relative inline-block mb-12 mt-4 mx-4 md:mx-0">
          {/* Bounding box (custom dashed border via SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none text-primary" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
          </svg>
          
          {/* Handles */}
          <div className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] bg-white border-[1.5px] border-primary pointer-events-none" />
          <div className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] bg-white border-[1.5px] border-primary pointer-events-none" />
          <div className="absolute -bottom-[5px] -left-[5px] w-[10px] h-[10px] bg-white border-[1.5px] border-primary pointer-events-none" />
          <div className="absolute -bottom-[5px] -right-[5px] w-[10px] h-[10px] bg-white border-[1.5px] border-primary pointer-events-none" />

          <h1
            className="text-[clamp(2.75rem,12vw,6rem)] font-light leading-[0.92] tracking-tight px-6 py-4 md:px-10 md:py-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Portfolio
          </h1>
        </div>

        <div className="flex flex-col items-center gap-10">
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl leading-relaxed mx-auto">
            Je conçois des produits numériques simples à utiliser et agréables à regarder. Moins de friction pour vos utilisateurs, plus de clarté pour votre business.
          </p>

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
