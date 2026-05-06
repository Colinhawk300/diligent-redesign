import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";
import { ArrowRight, ShieldCheck, Compass, LineChart, Users, Landmark, HeartHandshake, Briefcase, PiggyBank } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diligent Investors LLC — Wealth Management in Redlands, CA" },
      { name: "description", content: "Independent SEC-registered wealth management firm offering personalized financial planning, retirement, and estate strategies." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: LineChart, title: "Investments", desc: "Strategies tailored to your goals, time horizon, and tolerance for risk." },
  { icon: PiggyBank, title: "Retirement Planning", desc: "Plans designed for the new dimensions of modern retirement." },
  { icon: Landmark, title: "Estate & Succession", desc: "Protect assets and transfer wealth on your terms." },
  { icon: Briefcase, title: "Business Succession", desc: "Continuity planning for partners and major stockholders." },
  { icon: HeartHandshake, title: "Charitable Giving", desc: "Thoughtful gifting strategies that reflect your values." },
  { icon: Compass, title: "Asset Allocation", desc: "A disciplined mix of asset classes aligned with your profile." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center text-white overflow-hidden">
        <img src={heroImg} alt="Calm mountain lake at sunrise" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-accent uppercase tracking-[0.3em] text-xs mb-6">Wealth Management · Est. trust</div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
              Clarity, discipline,<br />
              <span className="italic text-accent">and a plan that's yours.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-10 leading-relaxed">
              We are an independent, SEC-registered advisory firm helping families and
              business owners build, protect, and pass on their wealth — with care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--gradient-gold)] text-navy font-semibold hover:shadow-[var(--shadow-elegant)] transition-all">
                Schedule a conversation <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors">
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Why us</div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Dedicated to supporting, educating, and providing informed direction.
            </h2>
            <p className="text-lg text-muted-foreground">
              As a firm, our focus is to understand your goals and develop a plan
              to help reach them — together, step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Compass, title: "Our Philosophy", desc: "We listen first. Then we build a plan rooted in your goals, present it clearly, and walk it with you." },
              { icon: ShieldCheck, title: "Our Process", desc: "A strong planning process protects you today and prepares you for tomorrow — in a tax-efficient manner." },
              { icon: Users, title: "Our People", desc: "A close-knit team of advisors and client-service professionals who know you by name." },
            ].map((c) => (
              <div key={c.title} className="group p-8 rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center mb-5">
                  <c.icon className="text-navy" size={22} />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-foreground">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Our services</div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">A complete approach to your financial life.</h2>
            </div>
            <Link to="/services" className="text-foreground hover:text-accent inline-flex items-center gap-2 font-medium">
              All services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {services.map((s) => (
              <div key={s.title} className="p-8 bg-background hover:bg-card transition-colors">
                <s.icon className="text-accent mb-5" size={26} />
                <h3 className="font-serif text-xl mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,_oklch(0.72_0.13_75),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Let's start the conversation.</h2>
          <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">
            We'd love the opportunity to become your trusted advisor. Reach out and we'll
            schedule a no-obligation introduction.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--gradient-gold)] text-navy font-semibold hover:shadow-[var(--shadow-elegant)] transition-all">
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
