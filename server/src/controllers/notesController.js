import Note from "../models/noteModel.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(notes);
  } catch (error) {
    console.log("error: controller : getAllNotes ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("error: controller : createNote", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("error: controller : updateNote", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "note not found" });
    res.status(200).json({ message: "note deleted successfully" });
  } catch (error) {
    console.log("error: controller : deleteNote", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "note not found" });
    res.json(note);
  } catch (error) {
    console.log("error: controller : getNoteById", error);
    res.status(500).json({ message: "internal server error" });
  }
};
