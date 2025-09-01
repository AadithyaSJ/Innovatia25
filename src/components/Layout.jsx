// components/Layout.jsx
import React, { useRef, useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9; // slow motion (0.3x speed)
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="relative w-full flex flex-col bg-black overflow-hidden">
        {/* Background video */}
        <video
          ref={videoRef}
          src="/bg_2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full min-h-screen object-cover object-top opacity-38"
        />

        <m.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 1.05, filter: "blur(2px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex-1 flex flex-col relative z-10"
        >
          
          <main className="flex-1 bg-black/50 text-white p-4 sm:p-6">
            <div className="max-w-6xl mx-auto w-full px-2 sm:px-4">
              {children}
            </div>
          </main>
        </m.div>

        
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
