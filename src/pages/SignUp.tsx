import FormInput from "../components/FormInput";

const SignUp: React.FC = () => {
  return (
    <div className="h-screen px-10">
      <h1 className="text-4xl font-bold">Signup</h1>
      <div className="flex items-center justify-center mx-auto">
        <form action="" className="space-y-6">
          <FormInput
            type="email"
            label="Email"
            asterisk={false}
            textarea={false}
            placeholder="email@example.com"
          />
          <FormInput
            type="password"
            label="Password"
            asterisk={false}
            textarea={false}
            placeholder="Password"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
