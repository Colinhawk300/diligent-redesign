import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { LineChart, PiggyBank, Landmark, Briefcase, HeartHandshake, Compass, Wallet } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Diligent Investors LLC" },
      { name: "description", content: "Wealth management, financial planning, retirement, estate, business succession, and charitable giving services." },
    ],
  }),
  component: Services,
});

const items = [
  { icon: LineChart, title: "Investments", desc: "We work diligently to gain a holistic understanding of your financial resources and goals so we can design and implement strategies tailored to meet your individual investment needs." },
  { icon: Landmark, title: "Estate & Succession Planning", desc: "A well-designed estate and gifting plan can provide tremendous asset protection, ensure your assets transfer to your intended beneficiaries when and how you want, and reduce or eliminate the risk of paying estate tax." },
  { icon: PiggyBank, title: "Retirement Planning", desc: "Retirement planning today has taken on many new dimensions that never had to be considered by earlier generations. We help you navigate them with confidence." },
  { icon: Wallet, title: "Managing Your Finances", desc: "Sound money management strategies help you manage your savings on a daily basis while keeping your long-term plan on track." },
  { icon: Compass, title: "Asset Allocation", desc: "Asset allocation is the process of selecting a mix of asset classes that closely matches your investment preferences and tolerance for risk." },
  { icon: Briefcase, title: "Business Succession Planning", desc: "The death of a partner or major stockholder can have devastating effects on a business and the surviving family. A succession plan is essential." },
  { icon: HeartHandshake, title: "Charitable Giving", desc: "Whether your motivation is helping others or sharing good fortune, we help you give in tax-smart, meaningful ways." },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What we do"
        title="A complete approach to your financial life."
        subtitle="There are many financial products in the market. Choosing what best meets your individual needs can be complicated — that's where we help."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {items.map((i) => (
            <article key={i.title} className="p-8 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center mb-5">
                <i.icon className="text-navy" size={22} />
              </div>
              <h2 className="font-serif text-2xl text-foreground mb-3">{i.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{i.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
