import { ReactComponent as Logo } from "../assets/notebook.svg";
import { Link } from "react-router-dom";

type Props = {
  loggedIn?: any;
  logout?: () => void;
};

const Header: React.FC<Props> = ({ loggedIn, logout }) => {
  return (
    <div className="flex items-center justify-between h-24 px-10 bg-gradient-to-br from-blue-400 to-indigo-400">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <Logo className="w-16" />
          <p className="pl-2 text-3xl satisfy hover:text-white">Duly-noted</p>
        </Link>
        {!loggedIn ? (
          <div className="pl-5">
            <ul className="flex">
              <Link to="/demo">
                <li className="pr-3 cursor-pointer hover:text-white">Demo</li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-white">Contact</li>
              </Link>
            </ul>
          </div>
        ) : (
          <div className="pl-5">
            <ul className="flex">
              <Link to="/contact">
                <li className="pr-3 hover:text-white">Notes</li>
              </Link>
              <Link to="/contact">
                <li className="pr-3 hover:text-white">Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      {!loggedIn ? (
        <div>
          <Link to="/signup" className="pr-3">
            <button className="p-1 text-white bg-blue-800 border border-gray-500 rounded hover:bg-blue-600">
              Sign-Up
            </button>
          </Link>
          <Link to="/signin">
            <button className="p-1 hover:text-white">Sign-In</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/" className="pr-3">
            <button
              onClick={logout}
              className="p-1 text-white bg-blue-800 border border-gray-500 rounded hover:bg-blue-600"
            >
              Signout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
