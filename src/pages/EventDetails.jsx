import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Headers";
import eventData from "../data/data.json";

const EventDetails = () => {
  const { eventName } = useParams();
  const allEvents = [...eventData.code, ...eventData.creative];
  const event = allEvents.find((e) => e.key === eventName);

  // Determine backLink based on event category
  const backLink = event
    ? event.category === "creative"
      ? "/event/list/creative"
      : "/event/list/code"
    : "/events";

  if (!event) {
    return (
      <div className="min-h-screen p-4 lg:w-4/5 mx-auto text-amber-50 font-spicy">
        <Header title="Event Not Found" backLink="/events" />
        <p className="text-lg text-orange-700">
          Sorry, the event you're looking for doesn't exist. Please check the
          events page for available events.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 lg:w-4/5 mx-auto text-amber-50 font-spicy">
      {/* Reusable Header */}
      <Header title={event.name} backLink={backLink} />

      {/* Event Details */}
      <div className="bg-yellow-50/95 p-6 rounded-lg border-4 border-orange-800 shadow-lg">
        <img
          src={event.image}
          alt={event.name}
          className="rounded-md w-full h-64 object-cover border-2 border-orange-700 mb-4"
        />

        <h2 className="text-2xl font-gloria font-bold text-orange-900 mb-2">
          Event Details
        </h2>
        <p className="text-sm font-kavoon text-orange-700 mb-4">
          {event.description}
        </p>

        <div className="text-sm font-kavoon text-orange-700 space-y-2">
          <p>
            <strong>Team:</strong> {event.team}
          </p>
          <p>
            <strong>Venue:</strong> {event.venue}
          </p>
          <p>
            <strong>Reporting Time:</strong> {event.reportingTime}
          </p>
        </div>

        {/* Rounds */}
        <h2 className="text-2xl font-gloria font-bold text-orange-900 mt-6 mb-2">
          Rounds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {event.rounds.map((round, index) => (
            <div
              key={index}
              className="bg-yellow-100/50 p-4 rounded-md border-2 border-orange-700"
            >
              <h3 className="text-xl font-gloria font-bold text-orange-900">
                Round {index + 1} {round.name && `- ${round.name}`}
              </h3>
              <p className="text-sm font-kavoon text-orange-700">
                <strong>Mode:</strong> {round.mode}
              </p>
              <p className="text-sm font-kavoon text-orange-700">
                <strong>Date:</strong> {round.date}
              </p>
              {round.time && (
                <p className="text-sm font-kavoon text-orange-700">
                  <strong>Time:</strong> {round.time}
                </p>
              )}
              <p className="text-sm font-kavoon text-orange-700 mt-2">
                {round.info}
              </p>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <h2 className="text-2xl font-gloria font-bold text-orange-900 mt-6 mb-2">
          Instructions
        </h2>
        <p className="text-sm font-kavoon text-orange-700 mb-4">
          {event.instructions}
        </p>

        {/* Links */}
        <h2 className="text-2xl font-gloria font-bold text-orange-900 mt-6 mb-2">
          Registration Links
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {event.formLink && (
            <a
              href={event.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-700 text-white font-kavoon px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center"
            >
              Register Now
            </a>
          )}
          {event.groupLink && (
            <a
              href={event.groupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-700 text-white font-kavoon px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center"
            >
              Group Link
            </a>
          )}
          {event.brochureLink && (
            <a
              href={event.brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-700 text-white font-kavoon px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center"
            >
              Event Brochure
            </a>
          )}
        </div>

        {/* Coordinators */}
        <h2 className="text-2xl font-gloria font-bold text-orange-900 mt-6 mb-2">
          Coordinators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-gloria font-bold text-orange-900 mb-2">
              Student Coordinators
            </h3>
            {event.coordinators
              .filter((person) => person.type === "Student")
              .map((person, index) => (
                <p key={index} className="text-sm font-kavoon text-orange-700">
                  {person.name} - {person.phone}
                </p>
              ))}
          </div>
          <div>
            <h3 className="text-xl font-gloria font-bold text-orange-900 mb-2">
              Staff Coordinators
            </h3>
            {event.coordinators
              .filter((person) => person.type === "Staff")
              .map((person, index) => (
                <p key={index} className="text-sm font-kavoon text-orange-700">
                  {person.name} - {person.phone}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
