import React from "react";
import SpeechToText from "../components/SpeechToText";

const DemoPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.text.value);
  };
  return (
    <div className="h-screen">
      <h1 className="flex justify-center text-5xl">Don't Be Shy, Speak Up!</h1>
      <div className="w-6/12 mx-auto border border-black border-solid ">
        <form action="" onSubmit={handleSubmit}>
          <SpeechToText />
        </form>
      </div>
    </div>
  );
};

export default DemoPage;
