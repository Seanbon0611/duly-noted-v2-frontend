import React from "react";
import SpeechToText from "../components/SpeechToText";

const DemoPage = () => {
  return (
    <div className="h-screen">
      <h1 className="flex justify-center text-5xl">Don't Be Shy, Speak Up!</h1>
      <div className="flex justify-center w-6/12 border border-black border-solid">
        <SpeechToText />
      </div>
    </div>
  );
};

export default DemoPage;
