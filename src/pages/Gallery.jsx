import CircuitTrace from "../components/CircuitTrace.jsx";
import CTASection from "../components/CTASection.jsx";
import { galleryItems } from "../data/gallery.js";

function GalleryThumb({ tag }) {
  return (
    <div className="relative aspect-[4/3] bg-ink rounded-sm overflow-hidden">
      <CircuitTrace variant="dark" className="absolute inset-0 w-full h-full opacity-25" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-teal-400/70 rounded-sm flex items-center justify-center">
          <div className="w-7 h-7 border border-teal-400/50" />
        </div>
      </div>
      <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider text-white/70 bg-white/10 px-2 py-1 rounded-sm">
        {tag}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <section className="border-b border-ink/10 bg-teal-900/[0.03]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
          <p className="section-eyebrow mb-2">Work showcase</p>
          <h1 className="text-3xl md:text-4xl font-semibold max-w-2xl">
            A look at repairs that came through the shop.
          </h1>
          <p className="mt-4 text-ink/60 max-w-xl">
            Photo placeholders shown below — real before/after repair photos will replace these
            as they're added.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.title}>
              <GalleryThumb tag={item.tag} />
              <h3 className="font-semibold mt-4 mb-1">{item.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Have a repair like one of these?"
        subtitle="Send us the details and we'll give you a free, honest diagnosis."
      />
    </div>
  );
}
