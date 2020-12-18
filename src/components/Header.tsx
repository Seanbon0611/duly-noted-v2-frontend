import { ReactComponent as Logo } from "../assets/notebook.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-24 px-10 bg-blue-400">
      <div className="flex items-center">
        <Link to="/">
          <Logo className="w-16" />
        </Link>
        <p className="pl-2 text-3xl satisfy">Duly-noted</p>
        <div className="pl-5">
          <ul className="flex">
            <li className="pr-3 cursor-pointer">About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>
        <Link to="/signup" className="pr-3">
          <button className="p-1 border border-black rounded">Sign-Up</button>
        </Link>
        <Link to="/signin">
          <button className="p-1">Sign-In</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
