import { useState } from "react";
import { ReactComponent as Logo } from "../assets/notebook.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { Link } from "react-router-dom";

type Props = {
  loggedIn?: any;
  logout?: () => void;
};

const Header: React.FC<Props> = ({ loggedIn, logout }) => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="flex items-center justify-between h-24 px-3 sm:px-10 bg-gradient-to-br from-blue-400 to-indigo-400">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <Logo className="w-16" />
          <p className="pl-2 text-3xl satisfy hover:text-white">Duly-noted</p>
        </Link>
        {!loggedIn ? (
          <div>
            <div className="hidden pl-5 sm:block">
              <ul className="flex">
                <Link to="/demo">
                  <li className="pr-3 cursor-pointer hover:text-white">Demo</li>
                </Link>
                <Link to="/contact">
                  <li className="hover:text-white">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          <div className="pl-5">
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
                Sign-Up
              </button>
            </Link>
            <Link to="/signin">
              <button className="p-1 hover:text-white">Sign-In</button>
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
      <div
        className={
          click
            ? "origin-top-right absolute top-20 right-0 mt-2 w-full rounded-md shadow-lg py-1 bg-blue-600 ring-1 ring-black ring-opacity-5 sm:hidden"
            : "hidden"
        }
      >
        <ul className="flex flex-col items-center">
          <Link to="/demo" onClick={closeMobileMenu}>
            <li className="py-3 text-white hover:opacity-70">Demo</li>
          </Link>
          <Link to="/contact" onClick={closeMobileMenu}>
            <li className="py-3 text-white hover:text-white">Contact</li>
          </Link>
          <Link to="/signin" onClick={closeMobileMenu}>
            <li className="py-3 text-white hover:text-white">Signin</li>
          </Link>
          <Link to="/signup" onClick={closeMobileMenu}>
            <li className="py-3 text-white hover:text-white">Signup</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
