const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieNotesController {
    async create(request, response) {
        const { title, description, rating, tags } = request.body;
        const { user_id } = request.params;

        const isRating = rating >= 1 && rating <= 5
        
        if (!isRating) {
            throw new AppError("A avaliação precisa ser Valores inteiros que podem variar de 1 até o 5");
        }   
     
        const note_id = await knex("notes").insert({
            title,
            description,
            rating,
            user_id
        });

        const tagsInsert = tags.map(name => {
            return {
                name,
                note_id,
                user_id
            }
        });

        await knex("tags").insert(tagsInsert)

        response.json();
    }

    async show(request, response) {
        const { id } = request.params

        const note = await knex("notes").where({ id }).first();
        const tags = await knex("tags").where({ note_id: id} ).orderBy("name");
        
        return response.json({...note, tags});
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("notes").where({ id }).delete();

        return response.json();
    }

    async index(request, response) {
        const { user_id } = request.query;

        const notes = await knex("notes")
            .where({ user_id })
            .orderBy("title")

            return response.json({ notes });
    }
}

module.exports = MovieNotesController;