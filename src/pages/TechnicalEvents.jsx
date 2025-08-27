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

const TechnicalEvents = () => {
  const technicalEvents = [
    {
      name: "Cryptic Heist",
      key: "cryptic-heist",
      image: "/assets/events/cryptic-heist-poster.png",
      info: "Dive into a thrilling online adventure solving cryptographic puzzles and cracking codes to complete a high-stakes virtual heist.",
    },
    {
      name: "DevQuest",
      key: "dev-quest",
      image: "/assets/events/devquest-poster.jpg",
      info: "An exhilarating coding competition testing problem-solving skills and algorithmic prowess in a stimulating environment.",
    },
    {
      name: "Voyage of Visions",
      key: "voyage-of-visions",
      image: "/assets/events/voyage-of-visions-poster.jpg",
      info: "Present groundbreaking ideas across technologies, exploring knowledge and creativity in an immersive setting.",
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
          <h2 className="text-2xl lg:text-3xl font-spicy text-amber-300">Creative Power-Up</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalEvents.map((event) => (
            <EventCard key={event.key} name={event.name} pic={event.image} info={event.info} path={event.key} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default TechnicalEvents;