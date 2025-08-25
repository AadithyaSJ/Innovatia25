import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home.jsx";
import Loader from "./components/Loader.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // fake boot time; replace with real asset preload if needed
    const t = setTimeout(() => setLoaded(true), 4200);
    return () => clearTimeout(t);
  }, []);

  if (!loaded) return <Loader />;

  return (
    <div className="min-h-dvh crt">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
