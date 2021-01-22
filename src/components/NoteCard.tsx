import React from "react";

type Props = {
  note?: any;
};

const NoteCard: React.FC<Props> = ({ note }) => {
  const date = new Date(note.CreatedAt);
  return (
    <div className="w-64 transition duration-500 transform bg-gray-300 rounded h-36 hover:scale-105">
      <h1 className="text-lg font-extrabold">
        Date: {date.toLocaleDateString()}
      </h1>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteCard;
