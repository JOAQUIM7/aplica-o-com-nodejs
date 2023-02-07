const { Router } = require("express");

const MovieNotesController = require("../controllers/MovieNotesController");

const notesRoutes = Router();

const movieNotesController = new MovieNotesController();

notesRoutes.get("/", movieNotesController.create);

module.exports = notesRoutes