import React, { useState } from "react";
import code from "/Code.jpg";
import creative from "/Creative.jpg";
import sheriffBadgeCreative from "../assets/sheriff-badge-nontechnical.jpeg"; // rename if needed
import { useNavigate } from "react-router-dom";
import Headers from "../components/Headers";

const Arcades = () => {
  const [loaded, setLoaded] = useState({});
  const navigate = useNavigate();

  const handleBadgeClick = (tabValue) => {
    navigate(`/event/list/${tabValue}`);
  };

  return (
    <div className="z-10 p-4 lg:w-4/5 space-y-10 mx-auto text-amber-50 font-spicy relative min-h-screen">
      {/* Header */}
      <Headers title={"Our Arcades"} />

      {/* Badges Grid */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
        {/* Code Events */}
        <div
          className="flex-1 py-2 text-center cursor-pointer"
          onClick={() => handleBadgeClick("code")}
        >
          <div className="relative w-[80%] mx-auto">
            {!loaded.code && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 animate-pulse rounded-lg" />
            )}
            <img
              src={code}
              alt="Code Events Badge"
              loading="lazy"
              className={`w-full h-auto object-contain mx-auto rounded-4xl transition-all duration-500 ${
                loaded.code ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } hover:scale-105`}
              onLoad={() => setLoaded((prev) => ({ ...prev, code: true }))}
            />
          </div>
          <p className="mt-2 text-3xl font-spicy text-orange-300 text-center">
            Code Quest
          </p>
        </div>

        {/* Creative Events */}
        <div
          className="flex-1 py-2 text-center cursor-pointer"
          onClick={() => handleBadgeClick("creative")}
        >
          <div className="relative w-[80%] mx-auto">
            {!loaded.creative && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 animate-pulse rounded-lg" />
            )}
            <img
              src={creative}
              alt="Creative Events Badge"
              loading="lazy"
              className={`w-full h-auto object-contain mx-auto rounded-4xl transition-all duration-500 ${
                loaded.creative
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              } hover:scale-105`}
              onLoad={() =>
                setLoaded((prev) => ({ ...prev, creative: true }))
              }
            />
          </div>
          <p className="mt-2 text-3xl font-spicy text-orange-300 text-center">
            Creative Power-Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Arcades;
