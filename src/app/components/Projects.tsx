import { useState } from "react";
import { Link } from "react-router";
import { projects } from "../content";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projets" className="py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <SectionTitle title="— 01 / Mes projets" subtitle="2024 — Aujourd'hui" />

        {/* Project list */}
        <div className="space-y-0">
          {projects.map((p) => (
            <Link
              to={`/projets/${p.id}`}
              key={p.id}
              className="group relative border-b border-border last:border-b-0 cursor-pointer block"
            >
              <div className="relative py-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                {/* Image */}
                <div className="w-full md:w-[200px] shrink-0 overflow-hidden bg-muted rounded-lg">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full aspect-square object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 md:group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center py-2">
                  <div
                    className="text-xs text-foreground/40 mb-3 tracking-widest uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {p.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-foreground/50 text-sm leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-4 py-1.5 text-foreground/80"
                        style={{ 
                          fontFamily: "'DM Mono', monospace",
                          borderRadius: "225px",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          background: "linear-gradient(97deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100.85%)",
                          backgroundBlendMode: "plus-lighter",
                          boxShadow: "4px 8px 24px 0 rgba(0, 0, 0, 0.25)"
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
