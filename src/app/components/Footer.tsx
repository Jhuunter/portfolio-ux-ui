export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="text-xs text-foreground/25 tracking-widest uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          © 2026 Justine Letho Duclos — Tous droits réservés
        </span>
        <span
          className="text-xs text-foreground/20 tracking-widest uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Lille, France
        </span>
      </div>
    </footer>
  );
}
