import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Diligent Investors LLC" },
      { name: "description", content: "Meet the advisors and client-service team at Diligent Investors LLC." },
    ],
  }),
  component: Team,
});

const team = [
  { name: "Jim Wilson", role: "Managing Partner, COO & Financial Advisor", initials: "JW" },
  { name: "Henk Fischer", role: "Managing Partner, CCO & Financial Advisor", initials: "HF" },
  { name: "James (Jim) Jebbia", role: "Senior Investment Advisor", initials: "JJ" },
  { name: "Beverly Ewing", role: "Director of Client Services", initials: "BE" },
  { name: "Patty Brandon", role: "Client Service Associate", initials: "PB" },
  { name: "Denise Zuniga", role: "Client Service Associate", initials: "DZ" },
];

function Team() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our team"
        title="People who know you by name."
        subtitle="A close-knit team of advisors and client-service professionals dedicated to your success."
      />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m) => (
            <div key={m.name} className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-[var(--shadow-card)] transition-shadow">
              <div className="w-24 h-24 mx-auto rounded-full bg-[var(--gradient-gold)] flex items-center justify-center font-serif text-3xl text-navy mb-5">
                {m.initials}
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
