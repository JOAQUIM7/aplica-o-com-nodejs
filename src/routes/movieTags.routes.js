const { Router } = require("express");

const MovieTagsController = require("../controllers/MovieTagsController");

const tagsRoutes = Router();

const movieTagsController = new MovieTagsController();

tagsRoutes.post("/:user_id", movieTagsController.index)

module.exports = tagsRoutes;