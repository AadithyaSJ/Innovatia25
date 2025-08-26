import { Link } from "react-router-dom";

export default function BountyButton({ to = "#", children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 px-6 py-2 rounded-md border-2 border-orange-800
                 bg-orange-100/20 text-orange-900 font-bold tracking-wide
                 shadow-md hover:shadow-lg
                 transition-all duration-300 hover:-translate-y-0.5"
    >
      {children}
      <span className="text-orange-700 text-xs font-bold">→</span>
    </Link>
  );
}
