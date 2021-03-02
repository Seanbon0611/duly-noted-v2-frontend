import React from "react";
import { Link } from "react-router-dom";

type Props = { loggedIn: boolean };

const NotFound: React.FC<Props> = ({ loggedIn }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl">404</h1>
      <h1 className="text-3xl">
        Oops! The page you are looking for does not exist.
      </h1>
      <Link to={loggedIn ? "/notes" : "/"}>
        <h2 className="pt-3 text-3xl font-bold underline">Take me home</h2>
      </Link>
    </div>
  );
};

export default NotFound;
