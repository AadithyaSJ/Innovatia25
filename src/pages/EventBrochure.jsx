// pages/EventBrochure.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Headers";

// all event keys must match the URL first word
const events = [
  { key: "paper-powerhouse", name: "Paper Powerhouse", brochure: "/events/PAPER-POWERHOUSE-BROCHURE.png" },
  { key: "past-to-profit", name: "Past TO Profit", brochure: "/events/past-to-profit-brochure.png" },
  { key: "golden-blueprint", name: "The Golden Blueprint", brochure: "/events/golden-blueprint-brochure.png" },
  { key: "cybernoir", name: "CYBERNOIR", brochure: "/events/CYBERNOIR-BROCHURE.png" },
  { key: "retro-code-chronicles", name: "Retro Code Chronicles", brochure: "/events/retro-code-chronicles-brochure.png" },
  { key: "vintage-webverse", name: "Vintage Webverse", brochure: "/events/vintage-webverse-brochure.png" },
  { key: "Other", name: "Other Event", brochure: "/brochure-other-event.png" },
];

const EventBrochure = () => {
  const { eventName } = useParams();

  const event = events.find(e => e.key === eventName) || {
    name: "Event Name",
    brochure: "/placeholder-brochure.png",
  };
  console.log("EventBrochure eventName:", eventName, event);

  return (
    <div className="min-h-screen bg-gray-900/60 flex flex-col rounded-lg items-center justify-start p-4">
      {/* Header with dynamic back button */}
      <Header title={`${event.name} - Brochure`} backLink={`/event/${event.key}`} />

      {/* Scrollable container for tall brochures */}
      <div className="w-full max-w-5xl overflow-y-auto">
        <img
          src={event.brochure}
          alt={`${event.name} Brochure`}
          className="w-full h-auto rounded-lg shadow-xl border-2 border-orange-700 object-contain"
        />
      </div>
    </div>
  );
};

export default EventBrochure;
