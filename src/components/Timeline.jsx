import React from "react";

export function EventTimeline() {
  const offlineAgenda = [
    { time: "9:30 AM - 10:45 AM", title: "Inauguration", venue: "Beta Hall" },
    { time: "10:45 AM - 11:00 AM", title: "Break" },
    { time: "11:00 AM - 12:35 PM", title: "Voyage of Visions - Round 1", venue: "Alpha Hall" },
    { time: "11:00 AM - 12:35 PM", title: "Devquest - Round 1", venue: "Beta Hall" },
    { time: "11:00 AM - 12:35 PM", title: "Cryptic Heist - Round 1", venue: "Gamma Hall" },
    { time: "11:00 AM - 12:35 PM", title: "Craftwaves - Round 1", venue: "Classroom" },
    { time: "11:00 AM - 12:35 PM", title: "Sictone - Round 1", venue: "Smart Classroom - I" },
    { time: "11:00 AM - 12:35 PM", title: "M.A.D.D Wars - Round 1", venue: "Smart Classroom - II" },
    { time: "12:35 PM - 1:25 PM", title: "Lunch Break" },
    { time: "1:25 PM - 2:45 PM", title: "Voyage of Visions - Round 2", venue: "Alpha Hall" },
    { time: "1:25 PM - 2:45 PM", title: "Devquest - Round 2", venue: "Beta Hall" },
    { time: "1:25 PM - 2:45 PM", title: "Cryptic Heist - Round 2", venue: "Gamma Hall" },
    { time: "1:25 PM - 2:45 PM", title: "Craftwaves - Round 2", venue: "Classroom" },
    { time: "1:25 PM - 2:45 PM", title: "Sictone - Round 2", venue: "Smart Classroom - I" },
    { time: "1:25 PM - 2:45 PM", title: "M.A.D.D Wars - Round 2", venue: "Smart Classroom - II" },
    { time: "2:45 PM - 3:00 PM", title: "Break" },
    { time: "3:00 PM - 4:00 PM", title: "Valedictory", venue: "Beta Hall" },
  ];

  const onlineAgenda = [
    { time: "02/10/2025", title: "Vintage WEBVERSE", venue: "To be posted in group" },
    { time: "02/10/2025", title: "Cryptic Heist", venue: "To be posted in group" },
    { time: "02/10/2025", title: "M.A.D.D Wars", venue: "To be posted in group" },
    { time: "02/10/2025", title: "Sictone", venue: "To be posted in group" },
    { time: "02/10/2025", title: "Voyage of Visions", venue: "To be posted in group" },
    { time: "02/10/2025", title: "Craftwaves", venue: "To be posted in group" },
  ];

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
        {/* Vertical Gradient Bar */}
        {/* <span className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-[#ffb347]/50 via-[#80d4c3]/50 to-[#f4a7b9]/50 rounded-full"></span> */}

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
