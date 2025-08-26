import React from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import BountyButton from "../components/BountyButton";

const Events = () => {
  const technicalEvents = [
    {
      name: "Cryptic Heist",
      key: "cryptic-heist",
      image: "/events/cryptic-heist-poster.png",
      info: "Dive into a thrilling online adventure solving cryptographic puzzles and cracking codes to complete a high-stakes virtual heist.",
    },
    {
      name: "DevQuest",
      key: "dev-quest",
      image: "/events/devquest-poster.jpg",
      info: "An exhilarating coding competition testing problem-solving skills and algorithmic prowess in a stimulating environment.",
    },
    {
      name: "Voyage of Visions",
      key: "voyage-of-visions",
      image: "/events/voyage-of-visions-poster.jpg",
      info: "Present groundbreaking ideas across technologies, exploring knowledge and creativity in an immersive setting.",
    },
  ];

  const nonTechnicalEvents = [
    {
      name: "CraftWave",
      key: "craft-wave",
      image: "/events/craft-wave-poster.png",
      info: "A creative and environmentally-focused competition raising awareness about ocean pollution through art, innovation, and sustainability.",
    },
    {
      name: "M.A.D.D Wars",
      key: "madd-wars",
      image: "/events/madd-wars-poster.jpg",
      info: "Celebrate iconic worlds of adventure, heroism, and magic through epic battles and immersive challenges.",
    },
    {
      name: "Sictone",
      key: "sictone",
      image: "/events/sictone-poster.jpg",
      info: "Challenge teams with cinematic quizzes, puzzles, and lyrical memory tests in a fun, dynamic environment.",
    },
  ];

  return (
    <div className="z-10 p-4 lg:w-4/5 space-y-10 mx-auto text-amber-50 font-spicy">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/welcome" className="w-[15%] lg:w-fit">
          <img
            src={backButton}
            alt="backButton"
            className="h-12 w-12 hover:scale-110 transition-transform"
          />
        </Link>
        <h1 className="text-3xl lg:text-5xl drop-shadow-md text-orange-300">
          Our Arcades
        </h1>
      </div>

      {/* Tabs */}
      <Tabs.Root defaultValue="technical" className="w-full rounded-lg text-white">
        <Tabs.List className="flex border-b-2 border-orange-800 bg-yellow-100/80 rounded-md">
            <Tabs.Trigger
                value="technical"
                className="flex-1 py-2 text-center font-spicy text-lg text-orange-900
                        hover:text-orange-700
                        data-[state='active']:text-white
                        data-[state='active']:bg-orange-800
                        data-[state='active']:border-b-2
                        data-[state='active']:border-orange-900
                        transition-colors"
            >
                Arcade 1
            </Tabs.Trigger>
            <Tabs.Trigger
                value="non-technical"
                className="flex-1 py-2 text-center font-spicy text-lg text-orange-900
                        hover:text-orange-700
                        data-[state='active']:text-white
                        data-[state='active']:bg-orange-800
                        data-[state='active']:border-b-2
                        data-[state='active']:border-orange-900
                        transition-colors"
            >
                Arcade 2
            </Tabs.Trigger>
        </Tabs.List>


        {/* Technical Events */}
        <Tabs.Content value="technical" className="p-4">
          <h2 className="text-2xl font-spicy mb-4 text-amber-300">
            CREATIVE POWER-UP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalEvents.map((event) => (
              <EventCard key={event.key} {...event} />
            ))}
          </div>
        </Tabs.Content>

        {/* Non-Technical Events */}
        <Tabs.Content value="non-technical" className="p-4">
          <h2 className="text-2xl font-spicy mb-4 text-amber-300">
            CODE QUEST
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalEvents.map((event) => (
              <EventCard key={event.key} {...event} />
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

// Bounty Poster Event Card
// Bounty Poster Event Card
const EventCard = ({ name, pic, info, path }) => {
  return (
    <div className="relative flex flex-col bg-yellow-50/95 p-4 rounded-lg border-4 border-orange-800 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">

      {/* Wrinkled/Torn Paper Effect */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            `repeating-linear-gradient(
              45deg,
              rgba(0,0,0,0.02),
              rgba(0,0,0,0.02) 2px,
              transparent 2px,
              transparent 6px
            ),
            repeating-linear-gradient(
              135deg,
              rgba(0,0,0,0.02),
              rgba(0,0,0,0.02) 2px,
              transparent 2px,
              transparent 6px
            ),
            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.05) 0%, transparent 20%),
            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.03) 0%, transparent 25%)`,
          backgroundBlendMode: 'multiply',
        }}
      />

      {/* Top rectangle banner for WANTED */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-red-700 flex items-center justify-center rounded-b-md shadow-md z-10">
        <span className="font-spicy text-white text-lg uppercase tracking-wider drop-shadow-md">
          WANTED
        </span>
      </div>

      {/* Event Image */}
      <img
        src={pic}
        alt={name}
        className="rounded-md w-full h-52 object-cover border-2 border-orange-700 mt-10 relative z-10 filter contrast-110 brightness-95"
      />

      {/* Event Name */}
      <h3 className="text-2xl font-gloria font-bold mt-4 text-orange-900 text-center drop-shadow-md relative z-10">
        {name}
      </h3>

      {/* Event Info */}
      <p className="mt-2 text-sm font-kavoon text-orange-700 text-center relative z-10">
        {info}
      </p>

      {/* Button */}
      <div className="mt-4 flex justify-center relative z-10">
        <BountyButton to={`/event/${path}`}>Conquer</BountyButton>
      </div>

      {/* Optional Torn Edges using pseudo-elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-full h-2 bg-black/5 rounded-b-full blur-sm" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-black/5 rounded-t-full blur-sm" />
      </div>
    </div>
  );
};



export default Events;
