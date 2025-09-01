const mongoose = require("mongoose");

function connectToDB() {
  // console.log("Connecting to DB with:", process.env.DB_CONNECTION_STRING);

  mongoose
    .connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

module.exports = connectToDB;
