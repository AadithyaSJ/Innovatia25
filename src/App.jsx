import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Arcades from "./pages/Arcades";
import EventDetails from "./pages/EventDetails";
import PowerUpLoader from "./components/Loader";
import Layout from "./components/Layout";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Team from "./pages/Team";
import EventsPage from "./pages/EventsPage";
import Welcome from "./pages/Welcome";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [realProgress, setRealProgress] = useState(0);
  const location = useLocation();

 useEffect(() => {
    if (!loaded) {
      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += Math.random() * 12; // Increment progress by random 0-12%
        if (progressValue >= 100) {
          progressValue = 100;
          clearInterval(interval);
          setTimeout(() => setLoaded(true), 700); // Allow final animations
        }
        setRealProgress(progressValue);
      }, 150); // Adjust speed as needed
      return () => clearInterval(interval);
    }
  }, [loaded]);

  if (!loaded)
    return (
      <PowerUpLoader
        currentLoadValue={realProgress}
        onComplete={() => setLoaded(true)}
      />
    );

  return (
    <div className="min-h-dvh select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          // initial={{ opacity: 0, filter: "blur(4px)" }}
          // animate={{ opacity: 1, filter: "blur(0px)" }}
          // exit={{ opacity: 0, filter: "blur(6px)" }}
          // transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                // <Layout>
                  <Home />
                // </Layout>
              }
            />
            <Route
              path="/welcome"
              element={
                <Layout>
                  <Welcome />
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