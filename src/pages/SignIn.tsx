import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import api from "../services/api";

type Props = {
  setToken?: any;
  setUser?: any;
  setLoggedIn: any;
};

const SignIn: React.FC<Props> = ({ setToken, setUser, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: JSON.stringify({
        email: email.toLocaleLowerCase(),
        password: password,
      }),
    };
    try {
      api.auth.login(config).then((data) => {
        console.log(data);
        console.log(data.msg === "success");
        setToken(data.token);
        setUser({
          id: data.user.ID,
          email: data.user.email,
        });
        setLoggedIn(true);
        history.push("/notes");
      });
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <div className="h-screen px-3 sm:px-10">
      <h1 className="pt-5 text-4xl font-bold">Sign In</h1>
      <div className="flex justify-center pt-16 mx-auto">
        <div className="p-8 border border-black rounded sm:w-3/4 md:w-2/5 bg-gradient-to-br from-blue-400 to-indigo-400">
          <h1 className="pb-3 text-2xl font-bold">
            Welcome back to Duly-Noted, you're just one step away from saving
            notes!
          </h1>
          <Link to="/signup">
            <p className="pb-2 underline">
              Don't have an account? Sign up here
            </p>
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6 ">
              <FormInput
                label="Email"
                type="email"
                value={email}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
              <FormInput
                label="Password"
                type="password"
                value={password}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                type="submit"
                className="p-2 text-white bg-blue-800 border border-gray-800 rounded hover:bg-blue-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
