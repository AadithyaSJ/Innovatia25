// components/Header.jsx
import { Link } from "react-router-dom";
import backButton from "/back-button.png";

const Header = ({ title, backLink = "/welcome" }) => {
  return (
    <div className="flex items-center gap-4 w-full max-w-5xl mb-10">
      {/* Back Button */}
      <Link to={backLink}>
        <img
          src={backButton}
          alt="Back"
          className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,179,71,0.8)] hover:scale-110 transition-transform"
          loading="lazy"
        />
      </Link>

      {/* Title */}
      <h1 className="text-3xl lg:text-5xl drop-shadow-md text-orange-300 font-spicy">
        {title}
      </h1>
    </div>
  );
};

export default Header;
