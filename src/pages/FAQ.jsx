import { useState } from "react";
import CTASection from "../components/CTASection.jsx";
import { faqs } from "../data/faq.js";

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[15px]">{q}</span>
        <span className={`shrink-0 w-6 h-6 flex items-center justify-center text-teal-600 transition-transform ${isOpen ? "rotate-45" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {isOpen && <p className="pb-5 text-sm text-ink/60 leading-relaxed max-w-xl">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <section className="border-b border-ink/10 bg-teal-900/[0.03]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
          <p className="section-eyebrow mb-2">Frequently asked</p>
          <h1 className="text-3xl md:text-4xl font-semibold max-w-2xl">
            Answers before you have to ask.
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16">
        {faqs.map((item, i) => (
          <AccordionItem
            key={item.q}
            q={item.q}
            a={item.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </section>

      <CTASection
        title="Still have a question?"
        subtitle="Message us directly and we'll answer within the hour during business hours."
      />
    </div>
  );
}
