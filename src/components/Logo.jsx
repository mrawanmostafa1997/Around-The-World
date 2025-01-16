import { Link } from "react-router-dom";
import { AboutTheWorld } from "../assets/icons";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-center gap-3 font-semibold"
    >
      <img className="h-9 w-auto" src={AboutTheWorld} alt="Issue Icon" />
      About The World
    </Link>
  );
};
export default Logo;
