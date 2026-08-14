import TestimonialCard from "../components/TestimonialCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { testimonials } from "../data/testimonials.js";
import { stats } from "../data/services.js";

export default function Testimonials() {
  return (
    <div>
      <section className="border-b border-ink/10 bg-teal-900/[0.03]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
          <p className="section-eyebrow mb-2">Customer reviews</p>
          <h1 className="text-3xl md:text-4xl font-semibold max-w-2xl">
            What people say after their machine comes back.
          </h1>
          <div className="flex flex-wrap gap-8 mt-8">
            {stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-teal-600">{s.value}</p>
                <p className="text-sm text-ink/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to get your machine looked at?"
        subtitle="Join thousands of customers who got a second opinion before writing off their laptop."
      />
    </div>
  );
}
