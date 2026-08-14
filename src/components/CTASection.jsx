import { PHONE, PHONE_DISPLAY, WHATSAPP_LINK } from "../data/business.js";
import CircuitTrace from "./CircuitTrace.jsx";

export default function CTASection({
  title = "Laptop acting up? Let's find out why.",
  subtitle = "Free diagnosis. No obligation. Most repairs done in 24–48 hours.",
}) {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <CircuitTrace variant="dark" className="absolute inset-0 w-full h-full opacity-[0.08]" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h2>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${PHONE}`} className="btn-ghost-light">
            Call {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
