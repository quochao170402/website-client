import axios from "axios";
import { useEffect, useState } from "react";

interface Note {
  id: number;
  title: string;
  description: string;
}

const Getter = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function getUsers(): Promise<Note[]> {
    const response = await axios.get<Note[]>("https://quochao.id.vn/api/notes");
    return response.data;
  }

  useEffect(() => {
    getUsers()
      .then((notes) => {
        setNotes(notes);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Getter;
