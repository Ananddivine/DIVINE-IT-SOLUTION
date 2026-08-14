import { Link } from "react-router-dom";
import CircuitTrace from "../components/CircuitTrace.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { serviceCategories, stats, process, brands } from "../data/services.js";
import { testimonials } from "../data/testimonials.js";
import { PHONE, PHONE_DISPLAY, WHATSAPP_LINK } from "../data/business.js";

export default function Home() {
  const featuredServices = serviceCategories
    .flatMap((c) => c.items)
    .filter((i) => i.featured)
    .concat(
      serviceCategories[0].items.slice(1, 5)
    )
    .slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <CircuitTrace variant="light" className="absolute -right-24 -top-16 w-[560px] h-[420px] hidden md:block" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <span className="chip-tag mb-6">Chip-Level Repair Specialists</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] font-semibold leading-[1.08] max-w-2xl">
            We fix laptops other shops call <span className="text-teal-600">un-fixable.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/60 max-w-xl leading-relaxed">
            Divine IT Solutions repairs down to the individual chip on the motherboard —
            not just parts-swapping. 5+ years of experience, 5000+ laptops and computers repaired
            in Port Moresby.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary">
              WhatsApp Us
            </a>
            <a href={`tel:${PHONE}`} className="btn-secondary">
              Call {PHONE_DISPLAY}
            </a>
            <Link to="/contact" className="btn-secondary !border-transparent !text-teal-600 hover:!text-teal-700">
              Get Free Diagnosis →
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative bg-ink">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl md:text-3xl font-semibold text-white">{s.value}</p>
                <p className="text-xs md:text-sm text-white/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="section-eyebrow mb-2">What we repair</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Component-level expertise,<br />not guesswork.</h2>
          </div>
          <Link to="/services" className="text-teal-600 font-medium text-sm hover:text-teal-700 whitespace-nowrap">
            View all services →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredServices.map((s) => (
            <ServiceCard key={s.name} {...s} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-teal-900/[0.03] border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-eyebrow mb-2">Why choose us</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Most shops swap boards. We find the one bad chip.
            </h2>
            <ul className="space-y-5">
              {[
                ["Chip-level diagnosis", "We trace faults to the exact IC on the board instead of replacing entire assemblies."],
                ["Genuine & tested parts", "Every replacement part is sourced and tested before it goes in your machine."],
                ["Transparent pricing", "Free diagnosis, itemized quote, nothing charged without your approval."],
                ["Warranty on repairs", "Every chip-level and part repair is backed by a warranty period."],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 w-6 h-6 shrink-0 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-[15px]">{title}</p>
                    <p className="text-sm text-ink/60 mt-0.5">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] bg-ink rounded-sm overflow-hidden">
            <CircuitTrace variant="dark" className="absolute inset-0 w-full h-full opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 border-2 border-teal-400 rounded-sm flex items-center justify-center relative">
                <div className="w-14 h-14 border border-teal-400/60" />
                {[...Array(4)].map((_, i) => (
                  <span key={i} className={`absolute w-4 h-[2px] bg-teal-400 ${
                    i === 0 ? "-left-4 top-1/3" : i === 1 ? "-left-4 bottom-1/3" : i === 2 ? "-right-4 top-1/3" : "-right-4 bottom-1/3"
                  }`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <p className="section-eyebrow mb-2">How it works</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Five steps, start to finish.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden">
          {process.map((p, i) => (
            <div key={p.title} className="bg-card p-6">
              <p className="font-mono text-xs text-amber-600 mb-3">{String(i + 1).padStart(2, "0")}</p>
              <p className="font-semibold mb-1.5">{p.title}</p>
              <p className="text-sm text-ink/60 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-teal-900/[0.03] border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20">
          <div className="flex md:items-end md:justify-between flex-col md:flex-row gap-4 mb-10">
            <div>
              <p className="section-eyebrow mb-2">Customer stories</p>
              <h2 className="text-2xl md:text-3xl font-semibold">Real repairs, real machines.</h2>
            </div>
            <Link to="/testimonials" className="text-teal-600 font-medium text-sm hover:text-teal-700 whitespace-nowrap">
              Read all reviews →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.slice(0, 2).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <p className="text-center text-sm text-ink/50 mb-6">Brands we service</p>
        <div className="flex flex-wrap justify-center gap-3">
          {brands.map((b) => (
            <span key={b} className="chip-tag !text-ink/70 !bg-transparent !border-ink/15">{b}</span>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
