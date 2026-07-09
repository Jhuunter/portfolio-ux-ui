"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  noBorder?: boolean;
  children?: ReactNode;
}

export function SectionTitle({ title, subtitle, noBorder = false, children }: SectionTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-end justify-between transition-all duration-1000 ease-out ${
        noBorder ? "" : "border-b border-border"
      } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
      style={{
        paddingBottom: noBorder ? "0" : "1.5rem", 
        marginBottom: noBorder ? "0" : "4rem", 
      }}
    >
      <div>
        <span
          className="text-xs text-primary tracking-widest uppercase block"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {title}
        </span>
        {children}
      </div>
      {subtitle && (
        <span
          className="hidden md:block text-xs text-foreground/30 tracking-widest uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}
