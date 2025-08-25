import NeonButton from "../components/NeonButton.jsx";
import NixieCountdown from "../components/NixieCountdown.jsx";

export default function Home() {
  const target = new Date();
  target.setHours(target.getHours() + 36); // demo: 36 hours from now

  return (
    <main className="min-h-dvh bg-gradient-to-b from-base-bg to-black relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl bg-neon-orange/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl bg-neon-cyan/20" />

      <section className="px-6 md:px-10 pt-20 pb-10 max-w-6xl mx-auto">
        <h1 className="font-kavoon text-5xl md:text-7xl leading-tight text-white rgb-fringe">
        WELCOME TO <span className="text-neon-orange drop-shadow-[0_0_14px_#ff7b54]">Innovatia 4.0</span>
        </h1>

        <p className="mt-4 max-w-2xl text-white/80 font-vt323 text-lg">
          Nostalgia meets innovation. A retro-futuristic journey crafted with
          motion, glow, and story-driven UI.
        </p>

        <div className="mt-8 flex gap-4">
          <NeonButton to="/showcase">Enter Timeline</NeonButton>
          <NeonButton to="/about">The Story</NeonButton>
        </div>
      </section>

      <NixieCountdown targetDate={target} />
    </main>
  );
}
