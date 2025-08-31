import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const colors = ["#FF00FF", "#00FFFF", "#FFFF00"]; // Neon colors

export default function PowerUpLoader({ currentLoadValue = 0, onComplete }) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const requestRef = useRef();

  // Animate displayProgress smoothly up to currentLoadValue
  const animateProgress = () => {
    setDisplayProgress((prev) => {
      if (prev < currentLoadValue) {
        const nextValue = Math.min(currentLoadValue, prev + 1);
        return nextValue;
      }
      return prev;
    });
    requestRef.current = requestAnimationFrame(animateProgress);
  };

  useEffect(() => {
    if (displayProgress < currentLoadValue) {
      requestRef.current = requestAnimationFrame(animateProgress);
    } else {
      cancelAnimationFrame(requestRef.current);
      if (displayProgress >= 100 && onComplete) {
        const timeout = setTimeout(() => onComplete(), 700);
        return () => clearTimeout(timeout);
      }
    }
    // Cleanup on unmount or dependency change
    return () => cancelAnimationFrame(requestRef.current);
  }, [currentLoadValue, displayProgress, onComplete]);

  // Neon flickering animation for lightning bolt
  const boltVariants = {
    flicker: {
      opacity: [0.3, 1, 0.3],
      scale: [0.85, 1, 0.85],
      rotate: [2, -2, 2],
      transition: { duration: 0.8, repeat: Infinity, repeatType: "loop" },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#000014",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Press Start 2P', monospace",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 2px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 2px)
          `,
          pointerEvents: "none",
          zIndex: 0,
          animation: "scanlineMove 3s linear infinite",
        }}
      />
      <style>{`
        @keyframes scanlineMove {
          from { background-position: 0 0, 0 0; }
          to { background-position: 0 100%, 100% 0; }
        }
      `}</style>

      {/* Loading title */}
      <div
        style={{
          marginBottom: 24,
          fontSize: 24,
          textShadow: "0 0 8px #0ff, 0 0 12px #f0f",
        }}
      >
        POWERING UP INNOVATIA 4.0...
      </div>

      {/* Neon Power Bar Container */}
      <div
        style={{
          width: 60,
          height: 300,
          border: "4px solid #0ff",
          borderRadius: 12,
          boxShadow: "0 0 40px #0ff",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#001622",
        }}
      >
        {/* Filling power bar */}
        <motion.div
          style={{
            width: "100%",
            background: `linear-gradient(180deg, #FF00FF, #00FFFF, #FFFF00)`,
            boxShadow: "0 0 12px 4px currentColor",
            position: "absolute",
            bottom: 0,
            borderRadius: 8,
            filter: "drop-shadow(0 0 6px currentColor)",
          }}
          animate={{ height: `${displayProgress}%` }}
          initial={{ height: "0%" }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
        />

        {/* Lightning bolt sparkle */}
        <motion.div
          variants={boltVariants}
          animate="flicker"
          style={{
            position: "absolute",
            left: "50%",
            top: `${100 - displayProgress}%`,
            width: 30,
            height: 30,
            background: `
              radial-gradient(circle, rgba(255,255,255,0.85) 10%, transparent 60%),
              radial-gradient(circle, #f0f 30%, transparent 80%)
            `,
            filter: "drop-shadow(0 0 6px #f0f)",
            borderRadius: "50%",
            transformOrigin: "center",
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      {/* Loading percent indicator */}
      <div
        style={{
          marginTop: 24,
          fontSize: 20,
          color: "#0ff",
          textShadow: "0 0 6px #0ff",
          userSelect: "none",
        }}
      >
        {Math.floor(displayProgress)}%
      </div>
    </div>
  );
}
