import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import jimWilson from "@/assets/team/jim-wilson.jpg";
import henkFischer from "@/assets/team/henk-fischer.jpg";
import jimJebbia from "@/assets/team/jim-jebbia.jpg";
import beverlyEwing from "@/assets/team/beverly-ewing.jpg";

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
  { name: "Jim Wilson", role: "Managing Partner, COO & Financial Advisor", initials: "JW", photo: jimWilson },
  { name: "Henk Fischer", role: "Managing Partner, CCO & Financial Advisor", initials: "HF", photo: henkFischer },
  { name: "James (Jim) Jebbia", role: "Senior Investment Advisor", initials: "JJ", photo: jimJebbia },
  { name: "Beverly Ewing", role: "Director of Client Services", initials: "BE", photo: beverlyEwing },
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
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-5 ring-2 ring-accent/40"
                />
              ) : (
                <div className="w-32 h-32 mx-auto rounded-full bg-[var(--gradient-gold)] flex items-center justify-center font-serif text-3xl text-navy mb-5">
                  {m.initials}
                </div>
              )}
              <h3 className="font-serif text-xl text-foreground mb-1">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
