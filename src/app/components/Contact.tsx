import { ArrowUpRight, Linkedin } from "lucide-react";

import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-32 px-6 md:px-12"
      style={{ background: "linear-gradient(135deg, #060E0C 0%, #0D2520 45%, #163830 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-3xl">
          <SectionTitle title="— 04 / Contact" noBorder>
            <h2
              className="text-[clamp(2.5rem,7vw,5rem)] font-light mt-4 mb-8 leading-tight tracking-tight"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Construisons
              <br />
              quelque chose.
            </h2>
          </SectionTitle>
          <p className="text-foreground/50 text-lg leading-relaxed mb-12 max-w-xl">
            Disponible pour des missions freelance courte ou longue durée.
          </p>

          <button
            onClick={() => {
              const u = "lethoduclosj";
              const d = "outlook.fr";
              window.location.href = `mailto:${u}@${d}`;
            }}
            className="group inline-flex items-center gap-4 text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300 mb-16 cursor-pointer"
          >
            <span style={{ direction: "rtl", unicodeBidi: "bidi-override" }}>rf.kooltuo@jsolcudothel</span>
            <ArrowUpRight
              size={24}
              className="text-foreground/30 group-hover:text-primary transition-colors"
            />
          </button>

          <div className="flex items-center gap-6 pt-8 border-t border-border">
            <a
              href="https://www.linkedin.com/in/justine-letho-duclos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors cursor-pointer"
            >
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:opacity-80 transition-opacity">
                <path d="M28.25 0.0001155H2.25C1.66008 -0.0058882 1.09187 0.222377 0.670047 0.634823C0.248227 1.04727 0.00725282 1.61021 0 2.20012V28.3051C0.00856446 28.8942 0.250115 29.4558 0.671793 29.8672C1.09347 30.2785 1.66093 30.5061 2.25 30.5001H28.25C28.84 30.5048 29.4078 30.2758 29.8294 29.8631C30.251 29.4503 30.4921 28.8875 30.5 28.2976V2.19262C30.4895 1.60444 30.2472 1.04418 29.8259 0.63363C29.4046 0.223077 28.8383 -0.00458991 28.25 0.0001155Z" fill="#0076B2"/>
                <path d="M4.51503 11.4326H9.04253V26.0001H4.51503V11.4326ZM6.78003 4.18262C7.29931 4.18262 7.80693 4.33663 8.23866 4.62518C8.67039 4.91373 9.00685 5.32385 9.20545 5.80365C9.40406 6.28345 9.4559 6.81138 9.35441 7.32065C9.25292 7.82992 9.00266 8.29764 8.6353 8.66466C8.26794 9.03167 7.79997 9.28148 7.29061 9.38248C6.78124 9.48349 6.25337 9.43115 5.77375 9.23208C5.29414 9.03302 4.88434 8.69618 4.59621 8.26417C4.30807 7.83216 4.15454 7.3244 4.15503 6.80512C4.15569 6.10936 4.43255 5.44232 4.92476 4.95058C5.41697 4.45884 6.08427 4.18262 6.78003 4.18262ZM11.8825 11.4326H16.2225V13.4326H16.2825C16.8875 12.2876 18.3625 11.0801 20.565 11.0801C25.15 11.0701 26 14.0876 26 18.0001V26.0001H21.4725V18.9126C21.4725 17.2251 21.4425 15.0526 19.12 15.0526C16.7975 15.0526 16.4025 16.8926 16.4025 18.8026V26.0001H11.8825V11.4326Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
