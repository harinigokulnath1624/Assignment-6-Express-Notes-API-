const notesModel = require("../models/notes.models");

//getAllNotes
const getAllNotes = () => {
  return notesModel;
};

//getSingleNote
const getSingleNote = (id) => {
  const note = notesModel.find((data) => data.id === Number(id));
  if (!note) {
    const error = new Error("Note not found");
    error.statusCode = 404;
    throw error;
  }
  return note;
};

//createNote
const createNote = (title, content, category) => {
  const newNote = {
    id: Date.now(),
    title,
    content,
    category,
  };
  notesModel.push(newNote);
  return newNote;
};

//updateNote
const updateNote = (id, title, content, category) => {
  const note = notesModel.find((data) => data.id === Number(id));
  if (!note) {
    const error = new Error("Note not found");
    error.statusCode = 404;
    throw error;
  }
  note.title = title || note.title;
  note.content = content || note.content;
  note.category = category || note.category;
  return note;
};

//deleteNote
const deleteNote = (id) => {
  const index = notesModel.findIndex((data) => data.id === Number(id));
  if (index === -1) {
    const error = new Error("Note not found");
    error.statusCode = 404;
    throw error;
  }
  notesModel.splice(index, 1);
};

module.exports = {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
};
