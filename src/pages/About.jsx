import CircuitTrace from "../components/CircuitTrace.jsx";
import CTASection from "../components/CTASection.jsx";
import { stats } from "../data/services.js";

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10">
        <CircuitTrace variant="light" className="absolute -left-32 -bottom-24 w-[520px] h-[400px] hidden md:block" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <p className="section-eyebrow mb-2">Our story</p>
          <h1 className="text-3xl md:text-4xl font-semibold max-w-2xl">
            Started with one soldering iron and a refusal to say "unfixable."
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-5 text-ink/70 leading-relaxed">
          <p>
            Divine IT Solution was built around a simple frustration: too many repair shops
            in Port Moresby, when faced with a dead motherboard, would only offer one answer —
            replace the whole board, or buy a new laptop.
          </p>
          <p>
            Most of the time, that's not necessary. A "dead" board is usually one failed
            component — a burnt IC, a cracked solder joint, a short from liquid damage. Find
            that one point of failure, repair it directly, and the machine works again for a
            fraction of the cost of a replacement.
          </p>
          <p>
            That's the whole premise of chip-level, component-level repair, and it's what
            Divine IT Solution has specialized in for over five years — working through more
            than 5,000 laptops and computers across student machines, office fleets, and
            gaming rigs.
          </p>
          <p>
            Every device that comes through the door gets the same process: a free, honest
            diagnosis, a clear quote before any work starts, and a repair done by hand at the
            component level wherever possible — not a guess-and-swap.
          </p>
        </div>
        <div className="bg-card border border-ink/10 rounded-sm p-8">
          <p className="font-mono text-xs tracking-[0.16em] uppercase text-teal-600 mb-6">By the numbers</p>
          <div className="grid grid-cols-2 gap-y-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold">{s.value}</p>
                <p className="text-sm text-ink/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-ink/10">
            <p className="font-semibold text-sm mb-1">Owner &amp; Lead Technician</p>
            <p className="text-ink/60 text-sm">Divine — specializing in chip-level motherboard repair since day one.</p>
          </div>
        </div>
      </section>

      <section className="bg-teal-900/[0.03] border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
          <p className="section-eyebrow mb-2">Our mission</p>
          <h2 className="text-2xl md:text-3xl font-semibold max-w-xl mb-6">
            Keep good machines running, at a price that makes sense.
          </h2>
          <p className="text-ink/60 max-w-xl leading-relaxed">
            We believe most "dead" laptops deserve a second opinion before they're written off.
            Our job is to give you an honest one — and the technical skill to back it up.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
