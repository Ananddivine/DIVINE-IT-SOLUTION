import { Link } from "react-router-dom";
import { PHONE, PHONE_DISPLAY, EMAIL, WHATSAPP_LINK, ADDRESS_LINE_1, ADDRESS_LINE_2, HOURS } from "../data/business.js";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-8 h-8 relative flex items-center justify-center bg-teal-400 rounded-sm">
              <span className="w-3 h-3 border border-ink" />
            </span>
            <span className="font-display font-semibold text-lg text-white">
              Divine IT<span className="text-amber-400">.</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-white/60">
            Chip-level laptop &amp; computer repair in Port Moresby. Five-plus years
            diagnosing faults down to the individual component — not just swapping parts.
          </p>
          <p className="chip-tag mt-5 !text-teal-300 !bg-white/5 !border-white/15">
            5000+ Devices Repaired
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-[0.16em] uppercase text-white/40 mb-4">Navigate</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" className="hover:text-amber-400">Services</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-amber-400">Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-amber-400">Reviews</Link></li>
            <li><Link to="/faq" className="hover:text-amber-400">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-[0.16em] uppercase text-white/40 mb-4">Reach Us</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href={`tel:${PHONE}`} className="hover:text-amber-400">{PHONE_DISPLAY}</a></li>
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-amber-400">WhatsApp Chat</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-amber-400 break-all">{EMAIL}</a></li>
            <li className="pt-1 text-white/60">{ADDRESS_LINE_1}</li>
            <li className="text-white/60">{ADDRESS_LINE_2}</li>
            <li className="text-white/60">{HOURS}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Divine IT Png. All rights reserved.</p>
          <p className="font-mono">PORT MORESBY · NCD · PNG</p>
        </div>
      </div>
    </footer>
  );
}
