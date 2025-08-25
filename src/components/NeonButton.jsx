import { Link } from "react-router-dom";

export default function NeonButton({ to = "#", children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neon-orange/50 bg-base-panel/40
                 text-neon-orange font-righteous tracking-wide
                 shadow-neon hover:shadow-[0_0_20px_rgba(255,155,84,.9),0_0_35px_rgba(255,94,47,.7)]
                 transition-all duration-300 hover:-translate-y-0.5"
    >
      {children}
      <span className="text-white/70 text-xs font-vt323">→</span>
    </Link>
  );
}
