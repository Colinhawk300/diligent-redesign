import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Diligent Investors LLC" },
      { name: "description", content: "An independent, SEC-registered advisory firm built around its clients. Learn our philosophy and process." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="Built on trust. Guided by discipline."
        subtitle="An independent, SEC-registered advisory firm in Redlands, California."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Our philosophy</div>
            <h2 className="font-serif text-4xl text-foreground mb-6">Your goals come first.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a firm, our focus is to understand your goals and develop a plan to help reach them.
              We meet with you to present an analysis, discuss our recommendations, and — together —
              implement them and monitor your progress.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe great advice is personal. That means listening first, planning thoughtfully,
              and staying engaged for the long run.
            </p>
          </div>
          <img src={aboutImg} alt="Modern architecture at golden hour" width={1600} height={1200} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover" />
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Our process</div>
          <h2 className="font-serif text-4xl text-foreground mb-12">A planning process designed around you.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { n: "01", t: "Discover", d: "We get to know you — your family, your goals, and what financial security looks like for you." },
              { n: "02", t: "Design", d: "We create a comprehensive plan that addresses today and prepares for tomorrow, in a tax-efficient way." },
              { n: "03", t: "Implement", d: "Together we put the plan in motion, coordinating with your other advisors as needed." },
              { n: "04", t: "Review", d: "We monitor progress and adjust as life and markets evolve, keeping you informed every step." },
            ].map((s) => (
              <div key={s.n} className="p-8 bg-card rounded-2xl border border-border">
                <div className="font-serif text-accent text-3xl mb-3">{s.n}</div>
                <h3 className="font-serif text-2xl text-foreground mb-2">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
