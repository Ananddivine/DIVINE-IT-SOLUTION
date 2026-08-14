import ServiceCard from "../components/ServiceCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { serviceCategories, brands } from "../data/services.js";

export default function Services() {
  return (
    <div>
      <section className="border-b border-ink/10 bg-teal-900/[0.03]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
          <p className="section-eyebrow mb-2">Full service list</p>
          <h1 className="text-3xl md:text-4xl font-semibold max-w-2xl">
            Every repair, explained in plain language.
          </h1>
          <p className="mt-4 text-ink/60 max-w-xl">
            Technical detail where it matters — BGA reballing, IC-level diagnosis — and
            plain terms everywhere else, so you know exactly what you're paying for.
          </p>
        </div>
      </section>

      {serviceCategories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`max-w-6xl mx-auto px-5 md:px-8 py-16 ${idx !== 0 ? "border-t border-ink/10" : ""}`}
        >
          <div className="mb-8">
            <p className="section-eyebrow mb-2">{cat.eyebrow}</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">{cat.label}</h2>
            <p className="text-ink/60 max-w-xl">{cat.description}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.items.map((item) => (
              <ServiceCard key={item.name} {...item} />
            ))}
          </div>
        </section>
      ))}

      <section className="border-t border-ink/10 max-w-6xl mx-auto px-5 md:px-8 py-16">
        <p className="section-eyebrow mb-2">Coverage</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Brands we service</h2>
        <div className="flex flex-wrap gap-3">
          {brands.map((b) => (
            <span key={b} className="chip-tag !text-ink/70 !bg-transparent !border-ink/15">{b}</span>
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        subtitle="Send us a photo or description of the problem and we'll point you in the right direction."
      />
    </div>
  );
}
