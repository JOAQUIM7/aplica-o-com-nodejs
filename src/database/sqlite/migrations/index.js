const sqliteConnection = require("../../sqlite");
const createUSers = require('./createUsers');

async function migrationsRun() {
    const schemas = [
        createUSers
    ].join("");

    sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error));
}

module.exports = migrationsRun;