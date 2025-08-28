import React from "react";
import eventData from "../data/data.json";

export function EventTimeline() {
  // Combine all events
  const allEvents = [...eventData.code, ...eventData.creative];

  // Separate online and offline rounds from all events
  const onlineAgenda = [];
  const offlineAgenda = [];

  allEvents.forEach((event) => {
    event.rounds.forEach((round) => {
      const roundInfo = {
        title: `${event.name} - ${round.name}`,
        time: round.time || "",
        venue: round.mode.toLowerCase() === "offline" ? event.venue : round.venue || "To be posted in group",
      };

      if (round.mode.toLowerCase() === "online") {
        onlineAgenda.push(roundInfo);
      } else {
        offlineAgenda.push(roundInfo);
      }
    });
  });

  const RetroTimeline = ({ title, agenda, extra }) => (
    <div className="w-full lg:w-1/2 p-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-rye text-[#ffb347] mb-4 text-center">
        {title}
      </h2>
      {extra && (
        <h3 className="text-sm sm:text-base md:text-lg font-mono text-[#ffe28a] text-center -mt-4 mb-4">
          ({extra})
        </h3>
      )}
      <ol className="relative px-2 border-l-4 border-[#80d4c3]/70 ">
        {agenda.map((plan, idx) => (
          <li key={idx} className="mb-12 relative group">
            {/* Timeline Node */}
            <span className="absolute -left-5 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#171b22] border-2 border-[#80d4c3] shadow-[0_0_10px_rgba(128,212,195,0.5)] transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:shadow-[0_0_20px_rgba(128,212,195,0.8)]">
              <span className="w-2 h-2 rounded-full bg-[#f4a7b9]"></span>
            </span>

            {/* Content */}
            <h3 className="text-lg sm:text-xl ml-10 font-kavoon text-[#80d4c3] group-hover:text-[#ffb347] transition-colors duration-300">
              {plan.title}
            </h3>
            <time className="block text-sm ml-10 sm:text-base font-vt323 text-[#ffe28a] group-hover:text-[#ffb347] transition-colors duration-300">
              {plan.time}
            </time>
            {plan.venue && (
              <p className="text-sm ml-10 sm:text-base text-[#fefae0] font-righteous group-hover:text-[#ffe28a] transition-colors duration-300">
                {plan.venue}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <section className="flex flex-col lg:flex-row gap-6">
      <RetroTimeline title="Online Schedule" agenda={onlineAgenda} />
      <RetroTimeline
        title="Offline Schedule"
        agenda={offlineAgenda}
        extra="October 09, 2025"
      />
    </section>
  );
}
