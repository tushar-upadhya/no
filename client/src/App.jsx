import { Route, Routes } from "react-router-dom";

import toast from "react-hot-toast";
import CreatePage from "./pages/create-page/Index.jsx";
import HomePage from "./pages/home-page/Index.jsx";
import NoteDetailsPage from "./pages/note-details-page/Index.jsx";

const App = () => {
  return (
    <div className="">
      <button
        onClick={() => toast.success("congrualtions")}
        className="text-red-500"
      >
        Click{" "}
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
