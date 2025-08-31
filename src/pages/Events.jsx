import React from "react";
import BountyButton from "../components/BountyButton";

const EventCard = ({ name, pic, info, path }) => {
  return (
    <div className="relative flex flex-col bg-yellow-50/95 p-4 rounded-lg border-4 border-red-900 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      {/* Wrinkled/Torn Paper Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              rgba(0,0,0,0.02),
              rgba(0,0,0,0.02) 2px,
              transparent 2px,
              transparent 6px
            ),
            repeating-linear-gradient(
              135deg,
              rgba(0,0,0,0.02),
              rgba(0,0,0,0.02) 2px,
              transparent 2px,
              transparent 6px
            ),
            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.05) 0%, transparent 20%),
            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.03) 0%, transparent 25%)`,
          backgroundBlendMode: 'multiply',
        }}
      />

      {/* Top rectangle banner for WANTED */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-red-900 flex items-center justify-center rounded-b-md shadow-md z-10">
        <span className="font-Besta text-white text-2xl uppercase tracking-widest drop-shadow-md">
          WANTED
        </span>
      </div>

      {/* Event Image */}
      <img
        src={pic}
        alt={name}
        className="rounded-md w-full h-52 object-cover border-2 border-orange-700 mt-10 relative z-10 filter contrast-110 brightness-95"
        onError={(e) => { e.target.src = "/placeholder-image.png"; console.log("Event image load failed"); }}
      />

      {/* Event Name */}
      <h3 className="text-2xl font-rye font-bold mt-4 text-orange-900 text-center drop-shadow-md relative z-10">
        {name}
      </h3>

      {/* Event Info */}
      <p className="mt-2 text-sm font-righteous text-orange-700 text-center relative z-10">
        {info}
      </p>

      {/* Button */}
      <div className="mt-4 flex justify-center relative z-10">
        <BountyButton to={`/event/${path}`}>Conquer</BountyButton>
      </div>

      {/* Optional Torn Edges using pseudo-elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-full h-2 bg-black/5 rounded-b-full blur-sm" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-black/5 rounded-t-full blur-sm" />
      </div>
    </div>
  );
};

export { EventCard };