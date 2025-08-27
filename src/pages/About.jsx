import React from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";
import Header from "../components/Headers";

const About = () => {
  return (
    <div className="relative z-10 p-4 text-[#fefae0] lg:w-2/3 mx-auto space-y-10">
      
      {/* Header */}
      <Header title={"The Story"} />

      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
        {/* Text Card */}
        <div className="w-full lg:w-1/2 p-6 rounded-xl bg-black/40 border border-[#80d4c3] shadow-[0_0_20px_rgba(128,212,195,0.5)] hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-rye text-[#ffb347] mb-3">Vision of the Department</h2>
          <p className="text-base font-vt323 text-[#ffe28a] ">
            To be a pioneer in providing industry and research focused
            integrated curriculum in computer science and engineering and to
            transform young minds to sustain technically and compete globally
            with enriched, ethical and moral values to serve the nation and
            beyond.
          </p>
        </div>

        <div className="w-full lg:w-1/2 h-64 bg-transparent rounded-xl flex items-center justify-center">
          <img
            src="final2.gif"
            alt="Hourglass Animation"
            className="max-h-60 object-contain"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Text Card */}
        <div className="w-full lg:w-1/2 p-6 rounded-xl bg-black/40 border border-[#80d4c3] shadow-[0_0_20px_rgba(128,212,195,0.5)] hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-rye text-[#ffb347] mb-3">Mission of the Department</h2>
          <ul className="list-disc px-4 text-[#ffe28a] font-vt323 space-y-2">
            <li>Accelerate learning by collaborating undergraduate & postgraduate research.</li>
            <li>Tie-up with industries for real-time projects & internships.</li>
            <li>Impart research mindset, ethical & moral values for societal benefit.</li>
          </ul>
        </div>

        <div className="w-full lg:w-1/2 h-64 bg-transparent rounded-xl flex items-center justify-center">
          <img
            src="final.gif"
            alt="Hourglass Animation"
            className="max-h-60 object-contain"
          />
        </div>
      </div>

      {/* How to Reach Us */}
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-rye text-[#ffb347] drop-shadow-[0_0_8px_rgba(255,179,71,0.4)]">
          How to reach us?
        </h2>
        <p className="text-[#ffe28a] font-vt323 font-bold">
          Our college buses will be available for transport at Tambaram. Other college students can avail them.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.1818975171714!2d80.05476192507626!3d12.960209587354123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700556169454!5m2!1sen!2sin"
          className="w-full h-[450px] md:h-72 rounded-lg border border-[#80d4c3] shadow-[0_0_20px_rgba(128,212,195,0.5)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default About;
