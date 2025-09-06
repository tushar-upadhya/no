import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import notesRoute from "./routes/notesRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;
const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// custom middleware

// app.use((req, res, next) => {
//   // console.log(`Hello from middleware ${req.method} ${req.url}`);
//   next();
// });
app.use("/api/notes", notesRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (requset, response) => {
    response.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running ${PORT}`);
  });
});
