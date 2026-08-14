// Signature visual motif: PCB-style traces with via dots.
// Grounded in the subject (motherboards) rather than decorative for its own sake.
export default function CircuitTrace({ variant = "light", className = "" }) {
  const stroke = variant === "light" ? "#1C9C96" : "#CBDBD8";
  const dot = variant === "light" ? "#E8873A" : "#CBDBD8";
  const opacity = variant === "light" ? 0.35 : 1;

  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth="1.5">
        <path d="M0 60 H180 V140 H420 V60 H800" />
        <path d="M0 240 H120 V400 H320 V240 H560 V320 H800" />
        <path d="M60 0 V180 H260 V500" />
        <path d="M700 0 V120 H480 V260" />
        <path d="M0 460 H200 V500" />
      </g>
      <g fill={dot}>
        <circle cx="180" cy="60" r="4" />
        <circle cx="180" cy="140" r="4" />
        <circle cx="420" cy="140" r="4" />
        <circle cx="420" cy="60" r="4" />
        <circle cx="120" cy="240" r="4" />
        <circle cx="120" cy="400" r="4" />
        <circle cx="320" cy="400" r="4" />
        <circle cx="320" cy="240" r="4" />
        <circle cx="560" cy="240" r="4" />
        <circle cx="560" cy="320" r="4" />
        <circle cx="60" cy="180" r="4" />
        <circle cx="260" cy="180" r="4" />
        <circle cx="700" cy="120" r="4" />
        <circle cx="480" cy="120" r="4" />
        <circle cx="480" cy="260" r="4" />
        <circle cx="200" cy="460" r="4" />
      </g>
    </svg>
  );
}
