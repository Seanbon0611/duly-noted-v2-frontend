import React from "react";
import SpeechToText from "../components/SpeechToText";

const DemoPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(
      `You can save this note: "${e.target.text.value}" if you've signed up!`
    );
  };
  return (
    <div className="h-screen px-3 sm:px-10">
      <h1 className="pt-5 text-4xl">Demo</h1>
      <div className="flex flex-col pt-20 mx-auto text-center">
        <h1 className="py-4 text-5xl">Don't Be Shy, Speak Up!</h1>
        <div className="mx-auto">
          <SpeechToText handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
