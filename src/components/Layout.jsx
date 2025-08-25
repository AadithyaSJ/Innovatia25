// components/Layout.jsx
import React from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div className="relative min-h-screen flex flex-col bg-black">
        {/* Background section only at the top */}
          <img
            src="/bg.png"
            alt="Background"
            className="absolute inset-0 w-full h-[100vh] object-cover opacity-60"
          />
        

        {/* Page Transition Wrapper */}
        <m.div
          key={location.pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex-1 flex flex-col"
        >
          {/* Page content starts AFTER bg section */}
          <main className="flex-1 bg-black text-white p-6">
            <div className="max-w-6xl mx-auto">{children}</div>
          </main>
        </m.div>

        {/* Footer always visible */}
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
