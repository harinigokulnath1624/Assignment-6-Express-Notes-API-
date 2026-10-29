const express = require("express");
const router = express.Router();

const notesController = require("../controllers/notes.controller");
const notesValidation = require("../middlewares/notesValidation");

router.get("/", notesController.getAllnotes);
router.get("/:id", notesController.getSingleNote);
router.post("/", notesValidation, notesController.addNote);
router.put("/:id", notesValidation, notesController.editNote);
router.delete("/:id", notesController.deleteNote);

module.exports = router;
