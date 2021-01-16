import { useState } from "react";
import { Redirect } from "react-router";
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
        setUser({ email: data.email, notes: data.notes });
        setLoggedIn(true);
        return <Redirect push to="/" />;
      });
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  return (
    <div className="h-screen px-10">
      <h1 className="text-4xl font-bold">Sign In</h1>
      <form
        className="flex flex-col items-center justify-center space-y-6"
        onSubmit={handleSubmit}
      >
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
      </form>
    </div>
  );
};

export default SignIn;
