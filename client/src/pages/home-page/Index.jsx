import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../../component/Navbar/Index";
import NoteCard from "../../component/note-card/NoteCard";
import RateLimitedUI from "../../component/rate-limited/Index";
import axiosInstance from "../../lib/axios";

const HomePage = () => {
  const [rateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const result = await axiosInstance.get("/notes");
        console.log("result:", result.data);
        setNotes(result.data);
        setRateLimited(false); // Use setRateLimited to update state
      } catch (error) {
        console.error("Error fetching notes:", error);
        if (error.response?.status === 429) {
          setRateLimited(true);
        } else {
          toast.error("Failed to fetch notes. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {rateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary pt-10">Loading...</div>
        )}

        {notes.length > 0 && !rateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
