// App.jsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
// import Details from "./pages/Details";
// import Team from "./pages/Team";
// import About from "./pages/About";
// import Schedule from "./pages/Schedule";
// import Events from "./pages/Events";
// import EventInfo from "./pages/EventInfo";
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import Events from "./pages/Events";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // fake boot time; replace with real preload if needed
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
                  <Events />
                </Layout>
              }
            />
            {/* <Route
              path="/team"
              element={
                <MainLayout>
                  <Team />
                </MainLayout>
              }
            />
            <Route
              path="/about"
              element={
                <MainLayout>
                  <About />
                </MainLayout>
              }
            />
            <Route
              path="/schedule"
              element={
                <MainLayout>
                  <Schedule />
                </MainLayout>
              }
            />
            <Route
              path="/events"
              element={
                <MainLayout>
                  <Events />
                </MainLayout>
              }
            />
            <Route
              path="/event/:eventName"
              element={
                <MainLayout>
                  <EventInfo />
                </MainLayout>
              }
            />
            <Route path="*" element={<Navigate to="/welcome" />} /> */}
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
