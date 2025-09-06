import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/create-page/Index.jsx";
import HomePage from "./pages/home-page/Index.jsx";
import NoteDetailsPage from "./pages/note-details-page/Index.jsx";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
