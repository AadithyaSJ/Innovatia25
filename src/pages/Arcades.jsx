import React, { useState } from "react";
import backButton from "/public/back-button.png";
import sheriffBadgeTechnical from "../assets/sheriff-badge-technical.jpeg";
import sheriffBadgeNonTechnical from "../assets/sheriff-badge-nontechnical.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Arcades = () => {
  const [showFullImage, setShowFullImage] = useState(null);
  const navigate = useNavigate();

  const handleBadgeClick = (tabValue) => {
    setShowFullImage(tabValue); // Show full-size image temporarily
    setTimeout(() => {
      setShowFullImage(null); // Hide full-size image after a brief display
      navigate(`/event/${tabValue}`); // Navigate to the event page
    }, 500); // Delay to show full image (0.5 seconds)
  };

  return (
    <div className="z-10 p-4 lg:w-4/5 space-y-10 mx-auto text-amber-50 font-spicy relative">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/welcome" className="w-[15%] lg:w-fit">
          <img
            src={backButton}
            alt="backButton"
            className="h-12 w-12 hover:scale-110 transition-transform"
          />
        </Link>
        <h1 className="text-3xl lg:text-5xl drop-shadow-md text-orange-300">
          Our Arcades
        </h1>
      </div>

      {/* Badges Table */}
      <table className="w-full table-auto">
        <tbody>
          <tr className="flex flex-col md:flex-row gap-6">
            <td className="flex-1 py-2 text-center hover:opacity-80 cursor-pointer" onClick={() => handleBadgeClick("technical")}>
              <img
                src={sheriffBadgeTechnical}
                alt="Technical Events Badge"
                className="w-[80%] h-auto object-contain mx-auto"
              />
              <p className="mt-2 text-3xl font-spicy text-orange-300 text-center mb-13">Technical Events</p>
              {showFullImage === "technical" && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                  onClick={() => setShowFullImage(null)}
                >
                  <img
                    src={sheriffBadgeTechnical}
                    alt="Full Technical Badge"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
            </td>
            <td className="flex-1 py-2 text-center hover:opacity-80 cursor-pointer" onClick={() => handleBadgeClick("non-technical")}>
              <img
                src={sheriffBadgeNonTechnical}
                alt="Non-Technical Events Badge"
                className="w-[80%] h-auto object-contain mx-auto"
              />
              <p className="mt-2 text-3xl font-spicy text-orange-300 text-center mb-13">Non-Technical Events</p>
              {showFullImage === "non-technical" && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                  onClick={() => setShowFullImage(null)}
                >
                  <img
                    src={sheriffBadgeNonTechnical}
                    alt="Full Non-Technical Badge"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Arcades;