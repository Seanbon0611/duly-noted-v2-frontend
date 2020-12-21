import React from "react";
import SpeechToText from "../components/SpeechToText";

const DemoPage = () => {
  return (
    <div className="h-screen">
      <h1 className="flex justify-center text-5xl">Don't Be Shy, Speak Up!</h1>
      <div className="w-6/12 mx-auto">
        <SpeechToText />
      </div>
    </div>
  );
};

export default DemoPage;
