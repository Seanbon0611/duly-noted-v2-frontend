import { useState } from "react";
import api from "../services/api";
import FormInput from "../components/FormInput";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      return setError("Password do not match");
    }
    const config = {
      method: "POST",
      credentials: "include",
      headers: {
        accept: "application/json",
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password: password,
      }),
    };
    api.user
      .signUp(config)
      .then((data) => {
        console.log(data);
        if (data.msg === "success") {
          setSuccess(true);
        } else if (data.msg === "error") {
          setError(data.err);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen px-10 pt-5">
      <h1 className="text-4xl font-bold">Signup</h1>
      {error ? (
        <div className="flex justify-center pb-2">
          <h1 className="text-3xl font-bold text-red-600">{error}</h1>
        </div>
      ) : null}
      <div className="flex justify-center pt-16 mx-auto">
        {success ? (
          <h1>Account Created!</h1>
        ) : (
          <div className="p-8 border border-black rounded sm:w-3/4 md:w-2/5 bg-gradient-to-br from-blue-400 to-indigo-500">
            <h1 className="pb-10 text-2xl font-bold">
              Welcome to Duly-Noted, you're just one step away from saving
              notes!
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-6 ">
                <FormInput
                  type="email"
                  label="Email"
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  name="email"
                  placeholder="email@example.com"
                />
                <FormInput
                  type="password"
                  label="Password"
                  value={password}
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
                <FormInput
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setConfirmPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="p-2 text-white bg-blue-800 border border-gray-700 rounded hover:bg-blue-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
