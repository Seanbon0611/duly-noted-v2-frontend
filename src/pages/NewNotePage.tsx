import React, { useState } from "react";
import SpeechToText from "../components/SpeechToText";
import api from "../services/api";

type Props = {
  id: number;
};

const NewNotePage: React.FC<Props> = ({ id }) => {
  console.log(id);
  const [content, setContent] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const config = {
      method: "POST",
      credentials: "include",
      "Access-Control-Allow-Credentials": "true",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        content: content,
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
          <SpeechToText handleSubmit={handleSubmit} setContent={setContent} />
        </div>
      </div>
    </div>
  );
};

export default NewNotePage;
