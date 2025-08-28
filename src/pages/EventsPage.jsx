import React from "react";
import { Link, useParams } from "react-router-dom";
import { EventCard } from "./Events";
import backButton from "/public/back-button.png";
import eventData from "../data/data.json";
import Header from "../components/Headers";

const EventsPage = () => {
  const { type } = useParams(); // "code" or "creative"
  const events = type === "creative" ? eventData.creative : eventData.code;

  const title = type === "creative" ? "Creative Events" : "Code Events";

  return (
    <div className="z-10 p-4 lg:w-4/5 mx-auto text-amber-50 font-spicy min-h-screen">
      <Header title={title} backLink="/events" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.key}
            name={event.name}
            pic={event.image}
            info={event.description}
            path={event.key}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
