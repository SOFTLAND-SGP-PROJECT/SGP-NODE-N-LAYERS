const container = require('./api/container');

const application = container.resolve("app");
const db = container.resolve("db");
const mongodb = container.resolve("mongodb");
application
    .start()
    .then(async() => {
        await db.sequelize.sync();
    })
    .then(async() => {
        await mongodb;
    })
    .catch(err => {
        console.log(err);
        porcess.exit();
    });