import React, { useState, useRef, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [speechText, setSpeechText] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.text.value);
  };
  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    console.log("Now listening...");
    return () => {
      SpeechRecognition.stopListening();
      console.log("Stopped Listening");
    };
  }, []);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    alert("Browser does not support speech to text");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea name="text" rows={10} cols={50} value={transcript}></textarea>
        <button type="submit" className="p-2 border border-black">
          Save note
        </button>
        <button onClick={resetTranscript} className="p-2 border border-black">
          Clear note
        </button>
      </form>
    </div>
  );
};

export default SpeechToText;
