export default function TestimonialCard({ name, role, quote, device }) {
  return (
    <div className="bg-card border border-ink/10 rounded-sm p-6 flex flex-col h-full">
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="text-teal-400 mb-4">
        <path d="M0 20V11.5C0 5.15 4.3.65 11 0v3.7C7.15 4.6 5 7 5 10h5v10H0zm14 0V11.5c0-6.35 4.3-10.85 11-11.5v3.7c-3.85.9-6 3.3-6 6.3h5v10H14z" fill="currentColor"/>
      </svg>
      <p className="text-[15px] leading-relaxed text-ink/80 flex-1">"{quote}"</p>
      <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-ink/50">{role}</p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-1 rounded-sm whitespace-nowrap">
          {device}
        </span>
      </div>
    </div>
  );
}
