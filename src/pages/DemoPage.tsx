import React from "react";
import SpeechToText from "../components/SpeechToText";

const DemoPage = () => {
  return (
    <div className="h-screen">
      <h1 className="text-4xl">Demo</h1>
      <div className="flex flex-col justify-center mx-auto text-center">
        <h1 className="py-4 text-5xl">Don't Be Shy, Speak Up!</h1>
        <div className="mx-auto">
          <SpeechToText />
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
