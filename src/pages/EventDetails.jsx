import React from "react";
import { useParams, Link } from "react-router-dom";
import backButton from "/back-button.png";

const EventDetails = () => {
  const { eventName } = useParams();

  const eventDetails = [
    {
      key: "cryptic-heist",
      name: "Cryptic Heist",
      description:
        "Join the ultimate cryptographic challenge where teams solve complex puzzles and crack codes to execute a virtual heist. Test your problem-solving skills and teamwork in this thrilling online adventure.",
      team: "2-4 members",
      venue: "Online",
      "reporting-time": "9:30 AM",
      image: "/events/cryptic-heist-poster.png",
      rounds: [
        {
          name: "Code Breaker",
          mode: "Online",
          date: "September 10, 2025",
          time: "10:00 AM - 12:00 PM",
          info: "Solve a series of cryptographic puzzles to unlock the vault."
        },
        {
          name: "Final Heist",
          mode: "Offline",
          date: "September 10, 2025",
          time: "1:00 PM - 2:00 PM",
          info: "Compete in a timed challenge to execute the heist."
        }
      ],
      instructions: "Participants must bring their own laptops and have a stable internet connection. No external software allowed.",
      "form-link": "https://example.com/register/cryptic-heist",
      "group-link": "https://example.com/group/cryptic-heist",
      "brochure-link": "https://example.com/brochure/cryptic-heist",
      coordinators: [
        { name: "Alice Smith", phone: "+1234567890", type: "Student" },
        { name: "Bob Johnson", phone: "+0987654321", type: "Student" },
        { name: "Dr. Emma Brown", phone: "+1122334455", type: "Staff" }
      ]
    },
    {
      key: "dev-quest",
      name: "DevQuest",
      description:
        "Compete in a fast-paced coding competition designed to push your algorithmic skills to the limit. Solve challenging problems under time constraints and rise to the top of the leaderboard.",
      team: "Individual",
      venue: "Online",
      "reporting-time": "8:30 AM",
      image: "/events/devquest-poster.jpg",
      rounds: [
        {
          name: "Qualifier",
          mode: "Online",
          date: "September 11, 2025",
          time: "9:00 AM - 11:00 AM",
          info: "Solve beginner to intermediate coding problems."
        },
        {
          name: "Final Round",
          mode: "Online",
          date: "September 11, 2025",
          time: "1:00 PM - 3:00 PM",
          info: "Tackle advanced algorithmic challenges."
        }
      ],
      instructions: "Use of standard programming languages like Python, Java, or C++ is allowed. No external libraries permitted.",
      "form-link": "https://example.com/register/dev-quest",
      "group-link": "https://example.com/group/dev-quest",
      "brochure-link": "https://example.com/brochure/dev-quest",
      coordinators: [
        { name: "Charlie Davis", phone: "+1234567891", type: "Student" },
        { name: "Prof. Linda White", phone: "+1122334456", type: "Staff" }
      ]
    },
    {
      key: "voyage-of-visions",
      name: "Voyage of Visions",
      description:
        "Showcase your innovative ideas in a dynamic presentation format. Explore cutting-edge technologies and creative solutions in a collaborative and immersive environment.",
      team: "1-3 members",
      venue: "Virtual Conference Hall",
      "reporting-time": "10:30 AM",
      image: "/events/voyage-of-visions-poster.jpg",
      rounds: [
        {
          name: "Idea Pitch",
          mode: "Online",
          date: "September 12, 2025",
          time: "11:00 AM - 1:00 PM",
          info: "Present your initial idea to the judges."
        },
        {
          name: "Prototype Demo",
          mode: "Online",
          date: "September 12, 2025",
          time: "2:00 PM - 4:00 PM",
          info: "Showcase a working prototype or detailed plan."
        }
      ],
      instructions: "Prepare a 10-minute presentation and a prototype. Slides must be submitted 24 hours in advance.",
      "form-link": "https://example.com/register/voyage-of-visions",
      "group-link": "https://example.com/group/voyage-of-visions",
      "brochure-link": "https://example.com/brochure/voyage-of-visions",
      coordinators: [
        { name: "Eve Wilson", phone: "+1234567892", type: "Student" },
        { name: "Dr. Mark Taylor", phone: "+1122334457", type: "Staff" }
      ]
    },
    {
      key: "craft-wave",
      name: "CraftWave",
      description:
        "Create impactful art and innovative solutions to raise awareness about ocean pollution. This competition blends creativity and sustainability to inspire change.",
      team: "1-4 members",
      venue: "Online",
      "reporting-time": "9:30 AM",
      image: "/events/craft-wave-poster.png",
      rounds: [
        {
          name: "Art Submission",
          mode: "Online",
          date: "September 13, 2025",
          time: "10:00 AM - 11:00 AM",
          info: "Submit your artwork or innovative solution."
        },
        {
          name: "Presentation",
          mode: "Online",
          date: "September 13, 2025",
          time: "11:30 AM - 1:00 PM",
          info: "Present your work to the judges."
        }
      ],
      instructions: "All materials must be eco-friendly. Digital submissions are preferred.",
      "form-link": "https://example.com/register/craft-wave",
      "group-link": "https://example.com/group/craft-wave",
      "brochure-link": "https://example.com/brochure/craft-wave",
      coordinators: [
        { name: "Grace Lee", phone: "+1234567893", type: "Student" },
        { name: "Prof. Sarah Green", phone: "+1122334458", type: "Staff" }
      ]
    },
    {
      key: "madd-wars",
      name: "M.A.D.D Wars",
      description:
        "Dive into epic battles inspired by iconic worlds of adventure and magic. Compete in challenges that test your strategy, creativity, and teamwork.",
      team: "3-5 members",
      venue: "Online",
      "reporting-time": "11:30 AM",
      image: "/events/madd-wars-poster.jpg",
      rounds: [
        {
          name: "Strategy Round",
          mode: "Online",
          date: "September 14, 2025",
          time: "12:00 PM - 2:00 PM",
          info: "Compete in strategic challenges."
        },
        {
          name: "Creative Battle",
          mode: "Online",
          date: "September 14, 2025",
          time: "3:00 PM - 5:00 PM",
          info: "Showcase your creativity in themed challenges."
        }
      ],
      instructions: "Teams must collaborate closely. No external resources allowed during challenges.",
      "form-link": "https://example.com/register/madd-wars",
      "group-link": "https://example.com/group/madd-wars",
      "brochure-link": "https://example.com/brochure/madd-wars",
      coordinators: [
        { name: "Henry Brown", phone: "+1234567894", type: "Student" },
        { name: "Dr. Laura Adams", phone: "+1122334459", type: "Staff" }
      ]
    },
    {
      key: "sictone",
      name: "Sictone",
      description:
        "Test your knowledge of cinema and music through quizzes, puzzles, and memory challenges. A fun and engaging event for teams to showcase their pop culture expertise.",
      team: "2-3 members",
      venue: "Online",
      "reporting-time": "1:30 PM",
      image: "/events/sictone-poster.jpg",
      rounds: [
        {
          name: "Quiz Round",
          mode: "Online",
          date: "September 15, 2025",
          time: "2:00 PM - 3:00 PM",
          info: "Answer questions on movies and music."
        },
        {
          name: "Puzzle Round",
          mode: "Online",
          date: "September 15, 2025",
          time: "3:00 PM - 4:00 PM",
          info: "Solve cinematic and lyrical puzzles."
        }
      ],
      instructions: "Participants should have a good knowledge of pop culture. Devices with internet access are required.",
      "form-link": "https://example.com/register/sictone",
      "group-link": "https://example.com/group/sictone",
      "brochure-link": "https://example.com/brochure/sictone",
      coordinators: [
        { name: "Ivy Clark", phone: "+1234567895", type: "Student" },
        { name: "Prof. James Wilson", phone: "+1122334460", type: "Staff" }
      ]
    }
  ];

  // Find the event based on the eventName from the URL
  const event = eventDetails.find((e) => e.key === eventName);


  if (!event) {
    return (
      <div className="min-h-screen p-4 lg:w-4/5 mx-auto text-amber-50 font-spicy">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/events" className="w-[15%] lg:w-fit">
            <img
              src={backButton}
              alt="backButton"
              className="h-12 w-12 hover:scale-110 transition-transform"
            />
          </Link>
          <h1 className="text-3xl lg:text-5xl drop-shadow-md text-orange-300">
            Event Not Found
          </h1>
        </div>
        <p className="text-lg text-orange-700">
          Sorry, the event you're looking for doesn't exist. Please check the events page for available arcades.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 lg:w-4/5 mx-auto text-amber-50 font-spicy">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link to="/events" className="w-[15%] lg:w-fit">
          <img
            src={backButton}
            alt="backButton"
            className="h-12 w-12 hover:scale-110 transition-transform"
          />
        </Link>
        <h1 className="text-3xl lg:text-5xl drop-shadow-md text-orange-300">
          {event.name}
        </h1>
      </div>

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
          <p><strong>Team:</strong> {event.team}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
          <p><strong>Reporting Time:</strong> {event["reporting-time"]}</p>
          <p><strong>Prize:</strong> {event.prize}</p>
        </div>
        <h2 className="text-2xl font-gloria font-bold text-orange-900 mt-6 mb-2">
          Rounds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {event.rounds.map((round, index) => (
            <div key={index} className="bg-yellow-100/50 p-4 rounded-md border-2 border-orange-700">
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
        <h2 className="text-2xl font-gloria font-bold text-orange-900 mt-6 mb-2">
          Instructions
        </h2>
        <p className="text-sm font-kavoon text-orange-700 mb-4">
          {event.instructions}
        </p>
        <h2 className="text-2xl font-gloria font-bold text-orange-900 mt-6 mb-2">
          Registration Links
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <a
            href={event["form-link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-700 text-white font-kavoon px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center"
          >
            Register Now
          </a>
          <a
            href={event["group-link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-700 text-white font-kavoon px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center"
          >
            Group Link
          </a>
          <a
            href={event["brochure-link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-700 text-white font-kavoon px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center"
          >
            Event Brochure
          </a>
        </div>
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