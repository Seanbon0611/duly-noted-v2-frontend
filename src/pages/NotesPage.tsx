import { useState, useEffect } from "react";
import api from "../services/api";

type Props = {
  id?: any;
};
const NotesPage: React.FC<Props> = ({ id }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api.note.getNotes(id).then((data: any) => setNotes(data.data));
  }, [id]);
  return (
    <div className="px-10">
      <h1 className="text-3xl">Notes</h1>
      <div>
        {notes.map((note: any) => {
          return <h1 key={note.id}>{note.content}</h1>;
        })}
      </div>
    </div>
  );
};

export default NotesPage;
