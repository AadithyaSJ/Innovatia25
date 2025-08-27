import React from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";
import { EventTimeline } from "../components/Timeline";
import Headers from "../components/Headers";

const Schedule = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-14 pb-10">
      {/* CRT / VHS Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[url('/noise-texture.png')] mix-blend-overlay"></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

      <Headers title={"Events & Schedule"} />

      {/* Sub-note */}
      <h2 className="text-sm sm:text-base md:text-lg font-mono text-[#f4a7b9] mb-4 text-center">
        NOTE: This is a tentative schedule and is subject to changes.
      </h2>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl p-4 sm:p-6 rounded-2xl bg-black/40 border border-[#80d4c3] shadow-[0_0_20px_rgba(128,212,195,0.5)] backdrop-blur-sm">
        <EventTimeline />
      </div>
    </div>
  );
};

export default Schedule;
