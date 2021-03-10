import React from "react";
import api from "../services/api";

type Props = {
  note?: any;
  setNotes: any;
};

const NoteCard: React.FC<Props> = ({ note, setNotes }) => {
  const userId = localStorage.getItem("user_id");
  const handleDelete = () => {
    const config = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
      body: {},
    };
    api.note.deleteNote(note.ID, config).then((data) => {
      if (data.msg === "success") {
        api.note.getNotes(userId).then((data) => setNotes(data.data));
      }
    });
  };
  const date = new Date(note.CreatedAt);
  return (
    <div className="w-64 transition duration-500 transform bg-gray-300 rounded h-36 hover:scale-105">
      <button onClick={handleDelete}>X</button>
      <h1 className="text-lg font-extrabold">
        Date: {date.toLocaleDateString()}
      </h1>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteCard;
