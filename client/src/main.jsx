import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowerserRouter } from "react-router";
import App from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowerserRouter>
      <App />
    </BrowerserRouter>
  </StrictMode>
);
