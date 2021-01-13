import { useState } from "react";
import FormInput from "../components/FormInput";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen">
      <h1 className="text-5xl">Sign In</h1>
      <FormInput label="Email" type="email" value={email} />
      <FormInput label="Password" type="password" value={password} />
    </div>
  );
};

export default SignIn;
