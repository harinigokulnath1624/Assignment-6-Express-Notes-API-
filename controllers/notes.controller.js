const notesService = require("../services/notes.service");

//get all notes
function getAllnotes(req, res, next) {
  try {
    res.status(200).json(notesService.getAllNotes());
  } catch (error) {
    next(error);
  }
}

//get single note
function getSingleNote(req, res, next) {
  try {
    res.status(200).json(notesService.getSingleNote(req.params.id));
  } catch (error) {
    next(error);
  }
}

//add note
function addNote(req, res, next) {
  try {
    const { title, content, category } = req.body;
    const note = notesService.createNote(title, content, category);
    res.status(201).json({ message: "Note Added", note });
  } catch (error) {
    next(error);
  }
}

//edit note
function editNote(req, res, next) {
  try {
    const { title, content, category } = req.body;
    const note = notesService.updateNote(
      req.params.id,
      title,
      content,
      category,
    );
    res.status(200).json({ message: "Note updated", note });
  } catch (error) {
    next(error);
  }
}

//delete note
function deleteNote(req, res, next) {
  try {
    notesService.deleteNote(req.params.id);
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllnotes,
  getSingleNote,
  addNote,
  editNote,
  deleteNote,
};
