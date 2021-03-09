import React, { useState } from "react";
import SpeechToText from "../components/SpeechToText";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import api from "../services/api";

const NewNotePage = () => {
  const [content, setContent] = useState("");
  const userId = localStorage.getItem("user_id");
  const commands = [
    {
      command: "clear",
      callback: ({ resetTranscript }: any) => resetTranscript(),
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: parseInt(userId || "{}"),
        content: transcript,
      }),
    };
    api.note.newNote(config).then(console.log);
  };
  return (
    <div className="h-screen px-3 sm:px-10">
      <h1 className="pt-5 text-4xl">New Note</h1>
      <div className="flex flex-col pt-20 mx-auto text-center">
        <h1 className="py-4 text-5xl">Don't Be Shy, Speak Up!</h1>
        <div className="mx-auto">
          <SpeechToText
            transcript={transcript}
            SpeechRecognition={SpeechRecognition}
            resetTranscript={resetTranscript}
            handleSubmit={handleSubmit}
            setContent={setContent}
          />
        </div>
      </div>
    </div>
  );
};

export default NewNotePage;
