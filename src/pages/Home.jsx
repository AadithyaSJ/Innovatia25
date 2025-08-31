import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PacmanArcade from "../components/PacmanArcade.jsx";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/welcome");
  };

  return (
    <main className="relative min-h-screen w-full bg-black">
      <PacmanArcade />
      {showButton && (
        <button
          onClick={handleClick}
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "20px 50px",
            fontFamily: "'Press Start 2P', cursive", // pixelated arcade font
            fontSize: "18px",
            color: "#FFD700", // Gold/yellow arcade color
            background: "#000080", // Classic deep blue arcade button
            border: "5px solid #FFD700",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 0 15px #FFD700, inset 0 0 10px #FFA500",
            textShadow: "2px 2px 0 #000000",
            letterSpacing: "2px",
            transition: "all 0.2s ease-in-out",
            userSelect: "none",
            outline: "none",
          }}
          onMouseEnter={e => {
            e.target.style.background = "#0000CD"; // lighter blue on hover
            e.target.style.boxShadow = "0 0 25px #FFD700, inset 0 0 15px #FFA500";
            e.target.style.transform = "translateX(-50%) scale(1.1)";
          }}
          onMouseLeave={e => {
            e.target.style.background = "#000080";
            e.target.style.boxShadow = "0 0 15px #FFD700, inset 0 0 10px #FFA500";
            e.target.style.transform = "translateX(-50%) scale(1)";
          }}
        >
          START GAME
        </button>
      )}
      {/* Link to Google Fonts for arcade pixel font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
    </main>
  );
}
