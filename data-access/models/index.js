'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { DB } = require("../../config/config");
const config = DB;
const db = {};
const Op = Sequelize.Op

let  sequelize = new Sequelize(process.env.BASENAME_DB, process.env.USER_DB , process.env.PASS_DB, JSON.parse(process.env.URLDB));



//Autenticando conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log(`Base de datos en el puerto: ${1433} \x1b[36m%s\x1b[0m`,'online'))
  .catch(err => console.error('Error en la conexión a la base de datos: ', err));


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
