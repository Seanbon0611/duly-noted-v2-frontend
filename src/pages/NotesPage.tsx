import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import api from "../services/api";

type Props = {
  id?: any;
};
const NotesPage: React.FC<Props> = ({ id }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api.note.getNotes(id).then((data: any) => setNotes(data.data));
  }, [id]);
  console.log(notes);
  return (
    <div className="h-screen px-3 sm:px-10">
      <h1 className="pt-5 text-3xl">Notes</h1>
      <div>
        {notes.map((note: any) => {
          return <NoteCard key={note.id} note={note} />;
        })}
        <Link to="/notes/new">
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
