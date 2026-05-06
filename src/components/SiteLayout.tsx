import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_oklch(0.72_0.13_75/0.4),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {eyebrow && <div className="text-accent uppercase tracking-[0.3em] text-xs mb-4">{eyebrow}</div>}
        <h1 className="font-serif text-5xl md:text-6xl max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-6 text-lg text-white/75 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
