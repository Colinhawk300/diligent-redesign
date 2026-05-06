import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-md bg-[var(--gradient-gold)] flex items-center justify-center text-navy font-serif font-bold text-lg">
              D
            </div>
            <div className="font-serif text-white text-lg">Diligent Investors LLC</div>
          </div>
          <p className="text-sm leading-relaxed max-w-md">
            Independent wealth management dedicated to professionally supporting,
            educating, and providing informed direction to each and every client.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif mb-4 text-base">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/team" className="hover:text-accent">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif mb-4 text-base">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone size={16} className="text-accent shrink-0 mt-0.5" /> <a href="tel:8007985713">800-798-5713</a></li>
            <li className="flex gap-2"><Mail size={16} className="text-accent shrink-0 mt-0.5" /> <a href="mailto:contact@diligentinvestorsllc.com" className="break-all">contact@diligentinvestorsllc.com</a></li>
            <li className="flex gap-2"><MapPin size={16} className="text-accent shrink-0 mt-0.5" /> 1447 Ford St, Suite 200<br />Redlands, CA 92374</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 text-xs text-white/60 leading-relaxed space-y-3">
          <p>
            Investment advisory services are offered through Diligent Investors, LLC, an SEC-registered investment adviser.
            Registration with the SEC does not imply a certain level of skill or training. Securities are offered through
            M.S. Howells &amp; Co., a registered broker/dealer, and Member FINRA/SIPC. The entities listed are not affiliated,
            and neither offers legal or tax advice. This site is published for residents of the United States only.
          </p>
          <p>© {new Date().getFullYear()} Diligent Investors, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
