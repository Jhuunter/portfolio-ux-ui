import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  scrollTo: (id: string) => void;
}

export function Navbar({ scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = ["home", "projets", "methode", "apropos", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { id: "projets", label: "Projets" },
    { id: "apropos", label: "À propos" },
    { id: "methode", label: "Méthode" },
  ];

  const handleScroll = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        borderBottom: scrolled ? "1px solid rgba(163,253,209,0.1)" : "1px solid transparent",
        background: scrolled ? "rgba(12,12,12,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-0 flex items-center justify-between h-20">
        <button
          onClick={() => handleScroll("home")}
          className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer flex items-center justify-center"
          aria-label="Home"
        >
          <Logo className="w-10 h-9" />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-sm tracking-wide transition-colors cursor-pointer ${
                activeSection === item.id ? "text-foreground" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              const u = "lethoduclosj";
              const d = "outlook.fr";
              window.location.href = `mailto:${u}@${d}`;
            }}
            className="text-sm px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-full cursor-pointer"
            style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}
          >
            Travailler ensemble →
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground/70 hover:text-foreground cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-left text-2xl font-medium cursor-pointer ${
                activeSection === item.id ? "text-foreground" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              const u = "lethoduclosj";
              const d = "outlook.fr";
              window.location.href = `mailto:${u}@${d}`;
            }}
            className="mt-2 text-left text-primary text-sm cursor-pointer"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Travailler ensemble →
          </button>
        </div>
      )}
    </nav>
  );
}
