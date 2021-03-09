import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import api from "../services/api";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    api.note.getNotes(userId).then((data: any) => setNotes(data.data));
  }, []);
  console.log(notes);
  return (
    <div className="px-3 pb-48 sm:px-10">
      <h1 className="pt-5 text-3xl">Notes</h1>
      <div className="flex flex-col items-center pt-10">
        {notes.map((note: any, idx: number) => {
          return (
            <div className="py-3" key={idx}>
              <NoteCard note={note} />
            </div>
          );
        })}
        <Link to="/notes/new" className="pt-3">
          <div className="flex flex-col items-center justify-center w-64 border-4 border-blue-400 border-dashed h-36">
            <p className="text-xl">Add a new note</p>
            <button className="flex justify-center w-12 h-12 text-5xl text-white bg-blue-600 rounded-full">
              +
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotesPage;
