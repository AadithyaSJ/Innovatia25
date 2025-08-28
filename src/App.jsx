import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Arcades from "./pages/Arcades";
import EventDetails from "./pages/EventDetails";
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Team from "./pages/Team";
import EventsPage from "./pages/EventsPage";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!loaded) return <Loader />;

  return (
    <div className="min-h-dvh select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/welcome"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/events"
              element={
                <Layout>
                  <Arcades />
                </Layout>
              }
            />
            <Route
              path="/event/list/:type"
              element={
                <Layout>
                  <EventsPage />
                </Layout>
              }
            />
            <Route
              path="/event/:eventName"
              element={
                <Layout>
                  <EventDetails />
                </Layout>
              }
            />
            <Route
              path="/showcase"
              element={
                <Layout>
                  <Schedule />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/team"
              element={
                <Layout>
                  <Team />
                </Layout>
              }
            />
            <Route path="*" element={<Navigate to="/welcome" />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}