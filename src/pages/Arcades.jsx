import React, { useState } from "react";
import sheriffBadgeTechnical from "../assets/sheriff-badge-technical.jpeg";
import sheriffBadgeNonTechnical from "../assets/sheriff-badge-nontechnical.jpeg";
import { Link, useNavigate } from "react-router-dom";
import Headers from "../components/Headers";

const Arcades = () => {
  const [loaded, setLoaded] = useState({}); // track image loads
  const navigate = useNavigate();

  const handleBadgeClick = (tabValue) => {
    navigate(`/event/${tabValue}`);
  };

  return (
    <div className="z-10 p-4 lg:w-4/5 space-y-10 mx-auto text-amber-50 font-spicy relative  min-h-screen">
      {/* Header */}
      <Headers title={"Our Arcades"}/>

      {/* Badges Grid */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
        {/* Technical Events */}
        <div
          className="flex-1 py-2 text-center cursor-pointer"
          onClick={() => handleBadgeClick("technical")}
        >
          <div className="relative w-[80%] mx-auto">
            {!loaded.technical && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 animate-pulse rounded-lg" />
            )}
            <img
              src={sheriffBadgeTechnical}
              alt="Technical Events Badge"
              loading="lazy"
              className={`w-full h-auto object-contain mx-auto transition-all duration-500 ${
                loaded.technical ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } hover:scale-105`}
              onLoad={() => setLoaded((prev) => ({ ...prev, technical: true }))}
            />
          </div>
          <p className="mt-2 text-3xl font-spicy text-orange-300 text-center">
            Technical Events
          </p>
        </div>

        {/* Non-Technical Events */}
        <div
          className="flex-1 py-2 text-center cursor-pointer"
          onClick={() => handleBadgeClick("non-technical")}
        >
          <div className="relative w-[80%] mx-auto">
            {!loaded.nonTechnical && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 animate-pulse rounded-lg" />
            )}
            <img
              src={sheriffBadgeNonTechnical}
              alt="Non-Technical Events Badge"
              loading="lazy"
              className={`w-full h-auto object-contain mx-auto transition-all duration-500 ${
                loaded.nonTechnical
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              } hover:scale-105`}
              onLoad={() =>
                setLoaded((prev) => ({ ...prev, nonTechnical: true }))
              }
            />
          </div>
          <p className="mt-2 text-3xl font-spicy text-orange-300 text-center">
            Non-Technical Events
          </p>
        </div>
      </div>
    </div>
  );
};

export default Arcades;