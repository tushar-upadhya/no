import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import notesRoute from "./routes/notesRoute.js";

dotenv.config();

const PORT = process.env.PORT || 5002;
const app = express();

// middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);
// custom middleware

// app.use((req, res, next) => {
//   // console.log(`Hello from middleware ${req.method} ${req.url}`);
//   next();
// });
app.use("/api/notes", notesRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running ${PORT}`);
  });
});
