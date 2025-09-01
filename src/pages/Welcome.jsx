import NeonButton from "../components/NeonButton.jsx";
import NixieCountdown from "../components/NixieCountdown.jsx";
import SDG from "../components/SDG.jsx";

export default function Welcome() {
  const target = new Date("2025-10-09T00:00:00");

  return (
    <main className="min-h-dvh w-full relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-72 h-72 md:w-96 md:h-96 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-72 h-72 md:w-96 md:h-96 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[25rem] md:w-[40rem] h-[25rem] md:h-[40rem] rounded-full blur-[200px]" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-10 pt-20 md:pt-24 pb-12 md:pb-16 max-w-6xl mx-auto relative z-10 text-center font-righteous">
        {/* College & Department */}
        <div className="mb-8 space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            Sri Sairam Engineering College
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-300">
            Department of M.Tech Computer Science & Engineering
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-1">presents</p>
        </div>

        {/* Innovatia Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/Innovatia2.png"
            alt="Innovatia 4.0"
            className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center font-gloria">
          <NeonButton to="/events" glowColor="cyan">ARCADE</NeonButton>
          <NeonButton to="/team" glowColor="cyan">LEGENDS</NeonButton>
          <NeonButton to="/about" glowColor="orange">The Story</NeonButton>
          <NeonButton to="/showcase" glowColor="orange">Enter Timeline</NeonButton>
        </div>
      </section>


      {/* Countdown */}
      <div className="relative z-10 px-4 sm:px-6 md:px-0 flex justify-center">
        <NixieCountdown 
          targetDate={target} 
          tubeWidth={window.innerWidth < 640 ? 40 : window.innerWidth < 1024 ? 60 : 80}
          tubeHeight={window.innerWidth < 640 ? 100 : window.innerWidth < 1024 ? 160 : 200}
        />
      </div>
      {/* Promo Video */}
      <div className="mt-12 space-y-4 text-white text-center w-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-kavoon drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
          Promo Video
        </h1>
        <video
          className="w-full max-w-md sm:max-w-xl md:max-w-2xl mx-auto rounded-md focus:outline-none"
          src="/promo.mp4"
          controls
        ></video>
      </div>
      {/* SDG Section */}
      {/* <div className="mt-12 px-4 w-full">
        <SDG />
      </div> */}
    </main>
  );
}