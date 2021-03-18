import { useState } from "react";
import { ReactComponent as Logo } from "../assets/notebook.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { Link } from "react-router-dom";

type Props = {
  loggedIn: boolean;
  logout?: () => void;
};

const Header: React.FC<Props> = ({ loggedIn, logout }) => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="flex items-center justify-between h-24 px-3 sm:px-10 bg-gradient-to-br from-blue-400 to-indigo-400">
      <div className="flex items-center">
        <Link to={loggedIn ? "/notes" : "/"} className="flex items-center">
          <Logo className="w-16" />
          <p className="pl-2 text-3xl satisfy hover:text-white">Duly-noted</p>
        </Link>
        {!loggedIn ? (
          <div>
            <div className="hidden pl-5 sm:block">
              <ul className="flex">
                <Link to="/contact">
                  <li className="hover:text-white">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          <div className="hidden pl-5 sm:block">
            <ul className="flex">
              <Link to="/notes">
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
          <div className="hidden sm:block">
            <Link to="/signup" className="pr-3">
              <button className="p-1 text-white bg-blue-800 border border-gray-500 rounded hover:bg-blue-600">
                Create account
              </button>
            </Link>
            <Link to="/signin">
              <button className="p-1 hover:text-white">Login</button>
            </Link>
          </div>
          <div onClick={() => setClick(!click)} className="sm:hidden">
            {click ? (
              <CloseMenu className="w-12" />
            ) : (
              <MenuIcon className="w-12" />
            )}
          </div>
        </div>
      ) : (
        <div>
          <Link to="/" className="hidden pr-3 sm:block">
            <button
              onClick={logout}
              className="p-1 text-white bg-blue-800 border border-gray-500 rounded hover:bg-blue-600"
            >
              Signout
            </button>
          </Link>
          <div onClick={() => setClick(!click)} className="sm:hidden">
            {click ? (
              <CloseMenu className="w-12" />
            ) : (
              <MenuIcon className="w-12" />
            )}
          </div>
        </div>
      )}
      <div
        className={
          click
            ? "origin-top-right absolute top-20 right-0 mt-2 w-full rounded-md shadow-lg py-1 bg-blue-600 ring-1 ring-black ring-opacity-5 sm:hidden"
            : "hidden"
        }
      >
        {!loggedIn ? (
          <ul className="flex flex-col items-center">
            <Link to="/contact" onClick={closeMobileMenu}>
              <li className="py-3 text-white hover:text-white">Contact</li>
            </Link>
            <Link to="/signin" onClick={closeMobileMenu}>
              <li className="py-3 text-white hover:text-white">Login</li>
            </Link>
            <Link to="/signup" onClick={closeMobileMenu}>
              <li className="py-3 text-white hover:text-white">
                Create account
              </li>
            </Link>
          </ul>
        ) : (
          <ul className="z-50 flex flex-col items-center">
            <Link to="/notes" onClick={closeMobileMenu}>
              <li className="py-3 text-white hover:text-white">Notes</li>
            </Link>
            <Link to="/contact" onClick={closeMobileMenu}>
              <li className="py-3 text-white hover:text-white">Contact</li>
            </Link>
            <Link to="/">
              <button
                className="py-3 text-white hover:text-white"
                onClick={logout}
              >
                Signout
              </button>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
