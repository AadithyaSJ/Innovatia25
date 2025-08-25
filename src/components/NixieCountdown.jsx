import { useEffect, useState } from "react";

export default function NixieCountdown({ targetDate }) {
  const calc = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto py-12">
      <h2 className="text-center text-2xl font-oi text-[#f5e6c5] drop-shadow-[0_0_10px_#000] tracking-widest uppercase">
        Starts In
      </h2>

      <div className="mt-8 flex items-end justify-center gap-4">
        <Group label="Days" value={t.days} />
        <Colon />
        <Group label="Hours" value={t.hours} />
        <Colon />
        <Group label="Minutes" value={t.minutes} />
        <Colon />
        <Group label="Seconds" value={t.seconds} />
      </div>
    </section>
  );
}

function Colon() {
  return (
    <span className="text-5xl md:text-7xl font-vt323 text-neon-orange"
          style={{ textShadow: "0 0 8px #ff7b54, 0 0 16px #ff5e2f" }}>
      :
    </span>
  );
}

function Group({ label, value }) {
  const digits = String(value).padStart(2, "0").split("");
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {digits.map((d, i) => (
          <Tube key={i} digit={d} />
        ))}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-[0.25em] font-spicy text-[#f5e6c5]">
        {label}
      </div>
    </div>
  );
}

function Tube({ digit }) {
  return (
    <div className="tube w-12 h-20 md:w-16 md:h-28 flex items-center justify-center">
      <span
        className="text-4xl md:text-6xl font-vt323 text-neon-orange animate-flicker select-none"
        style={{ textShadow: "0 0 8px #ff7b54, 0 0 16px #ff5e2f, 0 0 28px #ff5e2f" }}
      >
        {digit}
      </span>
      {/* filament grill lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="absolute left-1/2 -translate-x-1/2 h-[2px] w-10 bg-white"
               style={{ top: `${10 + i * 10}%` }} />
        ))}
      </div>
    </div>
  );
}
