import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="flex justify-center pt-7">
      <div className="flex flex-col items-center justify-center h-screen prose text-center">
        <h1 className="text-5xl font-bold">
          Take Better Notes with Speech-to-text Technology
        </h1>
        <div className="py-7">
          <Link to="/signup">
            <button className="px-20 py-5 text-lg text-white transition duration-100 bg-blue-800 rounded hover:bg-blue-600">
              Sign up for free here
            </button>
          </Link>
        </div>
        <Link to="/signin">
          <p className="hover:text-blue-800">
            Have an account already? Sign-in here.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
