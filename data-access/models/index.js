'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { DB } = require("../../config/config");
const config = DB;
const db = {};
const dbSM = {};

const Op = Sequelize.Op;

let sequelize = new Sequelize(process.env.BASENAME_DB, process.env.USER_DB, process.env.PASS_DB, JSON.parse(process.env.URLDB));

let saradm = new Sequelize(process.env.BASENAME_DB_SARADM, process.env.USER_DB_SARADM, process.env.PASS_DB_SARADM, JSON.parse(process.env.URLDBSARADM));


//Autenticando conexión a la base de datos

// Mariner 
sequelize.authenticate()
    .then(() => console.log(`Base de datos mariner en el puerto: ${1433} \x1b[36m%s\x1b[0m`, 'online'))
    .catch(err => console.error('Error en la conexión a la base de datos: ', err));

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-11) === '.mariner.js');
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

// saradm
saradm.authenticate()
    .then(() => console.log(`Base de datos saradm en el puerto: ${1433} \x1b[36m%s\x1b[0m`, 'online'))
    .catch(err => console.error('Error en la conexión a la base de datos: ', err));

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-10) === '.saradm.js');
    })
    .forEach(file => {
        const model = saradm['import'](path.join(__dirname, file));
        dbSM[model.name] = model;
    });

Object.keys(dbSM).forEach(modelName => {
    if (dbSM[modelName].associate) {
        dbSM[modelName].associate(dbSM);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

dbSM.sequelize = saradm;
dbSM.Sequelize = Sequelize;


module.exports = [db, dbSM];