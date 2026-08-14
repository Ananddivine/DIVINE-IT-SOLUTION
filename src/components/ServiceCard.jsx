export default function ServiceCard({ name, detail, featured }) {
  return (
    <div
      className={`p-5 border rounded-sm bg-card transition-colors ${
        featured ? "border-teal-400/60" : "border-ink/10 hover:border-teal-400/40"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display font-semibold text-[15px] leading-snug">{name}</h3>
        {featured && (
          <span className="shrink-0 font-mono text-[10px] tracking-wider uppercase text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-sm">
            Specialty
          </span>
        )}
      </div>
      <p className="text-sm text-ink/60 leading-relaxed">{detail}</p>
    </div>
  );
}
