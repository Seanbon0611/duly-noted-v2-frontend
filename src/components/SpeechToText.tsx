import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const commands = [
    {
      command: "clear",
      callback: ({ resetTranscript }: any) => resetTranscript(),
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [message, setMessage] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(
      `You can save this note: "${e.target.text.value}" if you've signed up!`
    );
  };

  useEffect(() => {
    //Initiate speech recognition on component mounting
    SpeechRecognition.startListening({ continuous: true });
    console.log("Now listening...");
    return () => {
      //cleanup
      SpeechRecognition.stopListening();
      console.log("Stopped Listening");
    };
  }, []);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    alert("Browser does not support speech to text");
  }
  return (
    <div>
      <form className="flex-col" onSubmit={handleSubmit}>
        <textarea
          className="flex justify-center border border-black border-solid"
          name="text"
          rows={10}
          cols={50}
          value={transcript}
          onChange={(): void => setMessage(transcript)}
        ></textarea>
        <div className="flex justify-between w-56 pt-4 mx-auto">
          <button type="submit" className="p-2 border border-black">
            Save note
          </button>
          <button
            type="reset"
            onClick={resetTranscript}
            className="p-2 border border-black"
          >
            Clear note
          </button>
        </div>
      </form>
    </div>
  );
};

export default SpeechToText;
