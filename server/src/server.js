import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import notesRoute from "./routes/notesRoute.js";
dotenv.config();

const PORT = process.env.PORT || 5002;
const app = express();
connectDB();

// middleware
app.use(express.json());
app.use("/api/notes", notesRoute);

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
