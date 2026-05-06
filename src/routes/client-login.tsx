import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Lock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/client-login")({
  head: () => ({
    meta: [
      { title: "Client Login — Diligent Investors LLC" },
      { name: "description", content: "Access your Diligent Investors client portal, Schwab account, or M.S. Howells NetX Investor account." },
      { property: "og:title", content: "Client Login — Diligent Investors LLC" },
      { property: "og:description", content: "Secure access to your investment accounts and client portal." },
    ],
  }),
  component: ClientLoginPage,
});

const portals = [
  {
    name: "Diligent Investors Client Portal",
    description: "View your full financial picture, performance reports, and planning documents.",
    href: "https://wealth.emaplan.com/ema/ria/diligentinvestors",
  },
  {
    name: "Schwab Account Access",
    description: "Log in directly to your Charles Schwab brokerage account.",
    href: "https://client.schwab.com/Login/SignOn/CustomerCenterLogin.aspx?&kc=y&sim=y",
  },
  {
    name: "M.S. Howells NetX Investor",
    description: "Access accounts custodied with M.S. Howells via NetX Investor.",
    href: "https://www.netxinvestor.com/web/netxinvestor/login",
  },
];

function ClientLoginPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Secure Access"
        title="Client Login"
        subtitle="Choose the portal that matches where your accounts are held. Each link opens the custodian's secure login page in a new tab."
      />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 grid gap-6">
          {portals.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-5 p-8 rounded-2xl border border-border bg-card hover:border-accent hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--gradient-gold)] flex items-center justify-center text-navy shrink-0">
                <Lock size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
                    {p.name}
                  </h2>
                  <ExternalLink size={16} className="text-muted-foreground" />
                </div>
                <p className="mt-2 text-muted-foreground">{p.description}</p>
              </div>
            </a>
          ))}

          <div className="mt-8 p-6 rounded-xl bg-muted/40 border border-border text-sm text-muted-foreground">
            Trouble logging in? Call us at{" "}
            <a href="tel:8007985713" className="text-accent font-medium">800-798-5713</a> or email{" "}
            <a href="mailto:contact@diligentinvestorsllc.com" className="text-accent font-medium">
              contact@diligentinvestorsllc.com
            </a>
            .
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
