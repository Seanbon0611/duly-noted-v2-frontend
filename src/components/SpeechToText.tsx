import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const { transcript } = useSpeechRecognition();

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
      <textarea name="text" rows={10} cols={50} value={transcript}></textarea>
    </div>
  );
};

export default SpeechToText;
