export const getAllNotes = (req, res) => {
  res.status(200).send("fetched all notes");
};

export const createNote = (req, res) => {
  res.status(201).json({ message: "note created" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "note updated" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "note deleted" });
};
