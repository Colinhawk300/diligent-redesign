import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Diligent Investors LLC" },
      { name: "description", content: "Get in touch with Diligent Investors LLC in Redlands, California." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's start the conversation."
        subtitle="We'd love the opportunity to become your trusted advisor."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center shrink-0">
                <Phone className="text-navy" size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:8007985713" className="font-serif text-2xl text-foreground hover:text-accent">800-798-5713</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center shrink-0">
                <Mail className="text-navy" size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:contact@diligentinvestorsllc.com" className="font-serif text-xl text-foreground hover:text-accent break-all">contact@diligentinvestorsllc.com</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center shrink-0">
                <MapPin className="text-navy" size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Office</div>
                <div className="font-serif text-xl text-foreground">1447 Ford St, Suite 200<br />Redlands, CA 92374</div>
                <a href="http://maps.google.com/?daddr=1447+Ford+St%2C+Suite+200%2C+Redlands%2C+CA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent text-sm mt-2">
                  Get directions <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="p-8 rounded-2xl bg-card border border-border space-y-5"
          >
            <h2 className="font-serif text-2xl text-foreground">Send us a message</h2>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Name</label>
              <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Email</label>
              <input required type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Message</label>
              <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <button type="submit" className="w-full px-6 py-4 rounded-full bg-[var(--gradient-gold)] text-navy font-semibold hover:shadow-[var(--shadow-elegant)] transition-shadow inline-flex items-center justify-center gap-2">
              {sent ? "Thank you — we'll be in touch" : <>Send message <ArrowRight size={18} /></>}
            </button>
            <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted by a Diligent Investors representative.</p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
