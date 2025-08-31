import { Link } from "react-router-dom";

export default function NeonButton({ to = "#", children }) {
  return (
    <Link
      to={to}
      className="group relative inline-flex items-center gap-2 sm:gap-3 
                 px-3 py-2 sm:px-5 sm:py-2
                 border-2 border-neon-orange bg-stone-900/20 rounded-xl
                 text-neon-orange font-righteous uppercase text-sm sm:text-base
                 transition-all duration-300 hover:-translate-y-1
                 hover:shadow-[0_0_10px_rgba(255,180,100,0.6),0_0_10px_rgba(255,140,60,0.6)] 
                 overflow-hidden"
    >
      {/* Shine overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-40 pointer-events-none animate-[shine_2s_infinite]" />

      {/* Glow overlay */}
      <span className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-20 pointer-events-none" />

      {/* Button text */}
      <span className="relative z-10">{children}</span>

      {/* Arrow with hover animation */}
      <span
        className="relative z-10 text-white/90 text-xs sm:text-sm transform transition-all duration-300
                   group-hover:translate-x-2 group-hover:scale-125 "
      >
        ▶
      </span>

      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%) skewX(-20deg); }
            50% { transform: translateX(100%) skewX(-20deg); }
            100% { transform: translateX(100%) skewX(-20deg); }
          }
        `}
      </style>
    </Link>
  );
}
