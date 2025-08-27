import React from "react";
import { Link } from "react-router-dom";
import { EventCard } from "./Events";
import backButton from "/public/back-button.png";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-amber-50 font-spicy">
          <h2 className="text-2xl text-orange-300">Something went wrong.</h2>
          <p className="text-lg text-orange-700">Please try refreshing the page or contact support.</p>
          <p className="text-sm text-orange-500">Error details: Check console for more information.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const NonTechnicalEvents = () => {
  const nonTechnicalEvents = [
    {
      name: "CraftWave",
      key: "craft-wave",
      image: "/assets/events/craft-wave-poster.png",
      info: "A creative and environmentally-focused competition raising awareness about ocean pollution through art, innovation, and sustainability.",
    },
    {
      name: "M.A.D.D Wars",
      key: "madd-wars",
      image: "/assets/events/madd-wars-poster.jpg",
      info: "Celebrate iconic worlds of adventure, heroism, and magic through epic battles and immersive challenges.",
    },
    {
      name: "Sictone",
      key: "sictone",
      image: "/assets/events/sictone-poster.jpg",
      info: "Challenge teams with cinematic quizzes, puzzles, and lyrical memory tests in a fun, dynamic environment.",
    },
  ];

  return (
    <ErrorBoundary>
      <div className="z-10 p-4 lg:w-4/5 mx-auto text-amber-50 font-spicy min-h-screen">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/events" className="w-[15%] lg:w-fit">
            <img
              src={backButton}
              alt="backButton"
              className="h-12 w-12 hover:scale-110 transition-transform"
              onError={(e) => { e.target.src = "/placeholder-image.png"; console.log("Image load failed, using placeholder"); }}
            />
          </Link>
          <h2 className="text-2xl lg:text-3xl font-spicy text-amber-300">Code Quest</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nonTechnicalEvents.map((event) => (
            <EventCard key={event.key} name={event.name} pic={event.image} info={event.info} path={event.key} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default NonTechnicalEvents;