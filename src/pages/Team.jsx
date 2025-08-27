import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import Headers from "../components/Headers.jsx";

const Team = () => {
  const staff = [
    { name: "Dr Nithya M", designation: "Head of the Department", image: "/team/nithya.png" },
    { name: "Shiny A", designation: "Staff Coordinator", image: "/team/shiny.png" },
    { name: "Shiny A", designation: "Staff Coordinator", image: "/team/shiny.png" },
  ];

  const webdevs = [
    {
      name: "Muthu Aanand SU",
      designation: "Student - 4th Year",
      image: "/team/muthu-aanand.jpg",
      github: "https://github.com/majestymewtwo",
      linkedIn: "https://www.linkedin.com/in/muthu-aanand-su-b36188218/",
    },
    // ... repeat
  ];

  return (
    <div className="z-10 text-yellow-100 p-4 space-y-12 lg:w-2/3 mx-auto font-mono">
      <Headers title={"The Legends"} />

      {/* Faculty */}
      <div className="space-y-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-rye text-neon-orange drop-shadow-lg animate-flicker tracking-wider text-center break-words">
          Faculty Coordinators
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {staff.map((person, index) => (
            <Card key={index} name={person.name} role={person.designation} image={person.image} />
          ))}
        </div>
      </div>

      {/* Website Team */}
      <div className="space-y-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg relative">
        <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-rye text-neon-orange drop-shadow-lg animate-flicker tracking-wider text-center break-words">
          <span className="absolute inset-0 bg-gradient-to-r from-neon-amber to-neon-cyan blur-xl opacity-30 animate-pulse -z-10"></span>
          Website Team
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {webdevs.map((person, index) => (
            <Card
              key={index}
              name={person.name}
              role={person.designation}
              image={person.image}
              github={person.github}
              linkedIn={person.linkedIn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ name, role, image, github, linkedIn }) => {
  const [spin, setSpin] = useState(false);

  return (
    <div className="text-center text-yellow-100 flex flex-col items-center gap-1">
      {/* Badge frame */}
      <div
  className="relative hover:scale-105 transition-transform duration-300 w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52"
  onMouseEnter={() => setSpin(true)}
  onMouseLeave={() => setSpin(false)}
>
  {/* Yellow glowing backdrop */}
  {/* <div className="absolute inset-0 rounded-4xl  bg-yellow-400/20 blur-sm"></div> */}

  {/* Rotating Badge */}
  <img
    src="/badge.png"
    className={`w-full h-full relative z-10 ${spin ? "animate-spin-slow" : ""}`}
    alt="badge"
  />

  {/* Profile Image */}
  <img
    src={image}
    alt={name}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               w-[45%] h-[45%] rounded-full shadow-md object-cover z-20"
  />
</div>


      {/* Name + Role */}
      <h3 className="font-spicy text-sm sm:text-lg lg:text-xl mt-1 break-words">{name}</h3>
      <p className="retro-role text-xs sm:text-sm lg:text-base text-center break-words">{role}</p>

      {/* Social Links */}
      <div className="flex flex-row gap-2 justify-center mt-1">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <Github className="w-5 h-5" color="#FFD700" />
          </a>
        )}
        {linkedIn && (
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5" color="#FFD700" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Team;
