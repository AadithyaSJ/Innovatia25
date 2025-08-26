import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div
      id="footer"
      className="flex flex-col md:flex-row justify-between items-center bottom-0 w-full 
                 text-cyan-300 px-6 sm:px-10 py-6 space-y-5 md:space-y-0 z-10 lg:h-[12%] 
                 bg-black border-t-2 border-cyan-500 font-[VT323] tracking-wider shadow-[0_0_10px_#0ff]"
    >
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/sec-logo-white.png"
          alt="sec-white-logo"
          className="h-14 sm:h-16"
        />
        <RetroDivider />
        <Socials />
      </div>

      <RetroDivider />

      {/* Year */}
      <h3 className="text-base sm:text-lg md:text-xl neon-text">© 2024-2025</h3>

      <RetroDivider />

      {/* Address */}
      <h3 className="font-light text-center text-sm sm:text-base md:text-lg lg:text-xl neon-text leading-snug">
        Sai Leo Nagar, West Tambaram, Chennai - 44
      </h3>

      <RetroDivider />

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-4 text-base sm:text-lg md:text-xl">
        <a
          href="https://www.sairam.edu.in"
          target="_blank"
          className="retro-link"
        >
          www.sairam.edu.in
        </a>
        <RetroDivider />
        <a
          href="https://mtech-cse-sairam.github.io/pulse-newsletter/"
          target="_blank"
          className="retro-link"
        >
          Newsletter
        </a>
        <RetroDivider />
        <img
          src="/chairman.png"
          alt="sec-white-logo"
          className="h-14 sm:h-16"
        />
      </div>
    </div>
  );
}

function Socials() {
  const hoverClass =
    "hover:scale-125 hover:text-pink-400 transition-all ease-in-out duration-300 cursor-pointer drop-shadow-[0_0_6px_#f0f]";
  return (
    <div className="flex items-center gap-6 sm:gap-8 text-xl sm:text-2xl text-cyan-300">
      <a href="https://www.instagram.com/mtechcsesairam/" target="_blank">
        <Instagram className={hoverClass} />
      </a>
      <a
        href="https://www.linkedin.com/in/sairam-m-tech-cse-794733229/"
        target="_blank"
      >
        <Linkedin className={hoverClass} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100076604003632"
        target="_blank"
      >
        <Facebook className={hoverClass} />
      </a>
      <a
        href="https://www.youtube.com/@sairam-m.tech-cse5yearinte455"
        target="_blank"
      >
        <Youtube className={hoverClass} />
      </a>
    </div>
  );
}

function RetroDivider() {
  return <span className="hidden md:block text-pink-400 text-lg">◆</span>;
}
