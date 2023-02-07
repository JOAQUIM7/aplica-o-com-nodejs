const knex = require("../database/knex");

class MovieNotesController {
    async create(request, response) {
        return response.status(201).json("dasddsadasdasa");
    }
}

module.exports = MovieNotesController;