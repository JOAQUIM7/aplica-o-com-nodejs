const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRoutes = require("./movieNotes.routes");
const tagsRoutes = require("./movieTags.routes")

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRoutes)

module.exports = routes;