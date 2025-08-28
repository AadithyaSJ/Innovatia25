import React from "react";
import goal1 from "/sdg/goal-1.png";
import goal2 from "/sdg/goal-2.png";
import goal3 from "/sdg/goal-3.png";
import goal4 from "/sdg/goal-4.png";

export default function SDG() {
  return (
    <section className="px-6 md:px-10 py-16 max-w-5xl mx-auto relative z-10">
      {/* Title */}
      <h1 className="font-kavoon text-4xl md:text-6xl text-center bg-gradient-to-r from-[#FF6A00] via-[#FFB347] to-[#FFD194] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,178,71,0.6)]">
        Aiding Hearts – Donation Stall
      </h1>

      {/* Quote */}
      <p className="mt-6 font-gloria text-2xl md:text-3xl text-center bg-gradient-to-r from-pink-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        <q>Empowering Lives, One Contribution at a Time.</q>
      </p>

      {/* Body text */}
      <p className="mt-8 text-justify text-white/90 font-righteous leading-relaxed">
        In the boundless spirit of compassion and community, we extend a
        Heartfelt Invitation to you to grace us with your presence at the{" "}
        <q>AIDING HEARTS - DONATION STALL</q> where every act of generosity, no
        matter how modest, possesses the transformative power to create profound
        and enduring change. Your support, whether through financial
        contributions or essential items like clothing and books, will weave a
        tapestry of hope for those in need. Here, we stand united in pursuit of
        the Sustainable Development Goals (SDGs), embracing the names that
        represent our collective aspirations.
      </p>

      {/* SDG Grid */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[goal1, goal2, goal3, goal4].map((goal, i) => (
          <div
            key={i}
            className="p-2 rounded-xl border border-white/30 shadow-[0_0_15px_rgba(255,178,71,0.5)] hover:shadow-[0_0_25px_rgba(255,178,71,0.9)] transition"
          >
            <img
              src={goal}
              alt={`goal-${i + 1}`}
              className="rounded-md w-full"
            />
          </div>
        ))}
      </div>

      {/* Closing paragraph */}
      <p className="mt-10 text-justify text-white/90 font-righteous leading-relaxed">
        Your presence and contributions will not merely touch lives; they will
        sculpt destinies and breathe life into dreams. This is more than an
        event; it is a convergence of hearts, a symphony of humanity in action.
        By joining hands with us, you become an architect of change, fostering a
        sense of communal responsibility that resonates far beyond the confines
        of the day. We are driven by a shared purpose—to extend a lifeline to
        those who truly need it.
      </p>

      {/* Closing Quote */}
      <p className="mt-8 font-gloria text-2xl md:text-3xl text-center bg-gradient-to-r from-cyan-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
        <q>Together, let’s make a difference that reverberates beyond measure.</q>
      </p>
    </section>
  );
}
