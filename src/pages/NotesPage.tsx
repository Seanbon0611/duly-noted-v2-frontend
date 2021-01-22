import { useState, useEffect } from "react";
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
    <div className="h-screen px-10">
      <h1 className="text-3xl">Notes</h1>
      <div>
        {notes.map((note: any) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default NotesPage;
