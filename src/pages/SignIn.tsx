import { useState } from "react";
import FormInput from "../components/FormInput";
import api from "../services/api";

const SignIn = () => {
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
      });
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  return (
    <div className="h-screen">
      <h1 className="text-5xl">Sign In</h1>
      <form onSubmit={handleSubmit}>
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
          className="p-2 text-white bg-blue-800 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
