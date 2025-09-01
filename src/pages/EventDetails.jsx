import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Headers";
import eventData from "../data/data.json";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const { eventName } = useParams();
  const allEvents = [...eventData.code, ...eventData.creative];
  const event = allEvents.find((e) => e.key === eventName);
  const navigate = useNavigate();

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
      <Header title={event.name} backLink={backLink} />

      {/* Top Split: Image (mobile first) + Details */}
      <div className="bg-yellow-50/95 p-6 rounded-lg border-4 border-orange-800 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Image on mobile top / desktop right */}
          <div className="lg:order-2 flex justify-center items-start w-full">
  <img
    src={event.image}
    alt={event.name}
    className="rounded-md w-full max-w-full aspect-[16/9] object-cover border-2 border-orange-700 shadow-md"
    onError={(e) => {
      e.target.src = "/placeholder-image.png";
      console.log("Event image load failed");
    }}
  />
</div>


          {/* Details */}
          <div className="lg:order-1 lg:col-span-2">
            <h2 className="text-2xl font-rye font-bold text-orange-900 mb-2">
              Event Details
            </h2>
            <p className="text-sm font-righteous text-orange-700 mb-4">
              {event.description}
            </p>

            <div className="text-sm font-righteous text-orange-700 space-y-2 mb-6">
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

            {/* Instructions */}
            {event.instructions && (
              <>
                <h2 className="text-2xl font-rye font-bold text-orange-900 mb-2">
                  Instructions
                </h2>
                <p className="text-sm font-righteous text-orange-700 mb-6">
                  {event.instructions}
                </p>
              </>
            )}
          </div>
        </div>

        {/* BELOW BOTH */}
        <div className="mt-8">
          {/* Rounds */}
          <h2 className="text-2xl font-rye font-bold text-orange-900 mb-4">
            Rounds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {event.rounds.map((round, index) => (
              <div
                key={index}
                className="bg-yellow-100/50 p-4 rounded-md border-2 border-orange-700"
              >
                <h3 className="text-xl font-rye font-bold text-orange-900">
                  Round {index + 1} {round.name && `- ${round.name}`}
                </h3>
                <p className="text-sm font-righteous text-orange-700">
                  <strong>Mode:</strong> {round.mode}
                </p>
                <p className="text-sm font-righteous text-orange-700">
                  <strong>Date:</strong> {round.date}
                </p>
                {round.time && (
                  <p className="text-sm font-righteous text-orange-700">
                    <strong>Time:</strong> {round.time}
                  </p>
                )}
                <p className="text-sm font-righteous text-orange-700 mt-2">
                  {round.info}
                </p>
              </div>
            ))}
          </div>

          {/* Registration Links */}
          <h2 className="text-2xl font-rye font-bold text-orange-900 mb-4">
            Registration Links
          </h2>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {event.formLink && (
              <a
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-700 text-white font-kavoon px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center w-full md:w-auto"
              >
                Register Now
              </a>
            )}
            {/* {event.groupLink && (
              <a
                href={event.groupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-700 text-white font-kavoon px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center w-full md:w-auto"
              >
                Group Link
              </a>
            )} */}
            {event.brochureLink && (
              <button
    onClick={() => 
      navigate(`/brochure/${event.key}`, { state: { event } })
    }
    className="bg-orange-700 text-white font-kavoon px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center w-full md:w-auto"
  >
    Event Brochure
  </button>
            )}
          </div>

          {/* Coordinators */}
          <h2 className="text-2xl font-rye font-bold text-orange-900 mb-4">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-kavoon text-orange-900 mb-2">
                Student Coordinators
              </h3>
              {event.coordinators
                .filter((person) => person.type === "Student")
                .map((person, index) => (
                  <p
                    key={index}
                    className="text-sm font-righteous text-orange-700"
                  >
                    {person.name} - {person.phone}
                  </p>
                ))}
            </div>
            <div>
              <h3 className="text-xl font-kavoon text-orange-900 mb-2">
                Staff Coordinators
              </h3>
              {event.coordinators
                .filter((person) => person.type === "Staff")
                .map((person, index) => (
                  <p
                    key={index}
                    className="text-sm font-righteous text-orange-700"
                  >
                    {person.name} - {person.phone}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
