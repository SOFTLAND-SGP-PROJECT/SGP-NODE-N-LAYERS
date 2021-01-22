//=============================================
// Semilla: para la creacion del nombre del archivo imagen
//=============================================
module.exports.SEED = '@este-@es-@un-@seed-@dificil';
//=============================================
// Zona de intercambio
//=============================================
module.exports.rutaZI = '//Apollo/Global/Sistema de Gestion/uploads';
//=============================================
// Carpeta de Partes publicos
//=============================================
module.exports.rutaPP = '../QA-NODE-N-LAYERS/upload';
//=============================================
// Carpeta de assets
//=============================================
module.exports.rutaA = '../QA-NODE-N-LAYERS/assets';
//=============================================
// Archivos adjuntos de partes nuevos
//=============================================
module.exports.rutaPN = '//Apollo/Global/Sistema de Gestion/Documentacion SP';
//=============================================
// Imagenes de perfil
//=============================================
module.exports.rutaImagenPerfil = './assets/perfiles/';
//=============================================
// Puerto
//=============================================
process.env.PORT = process.env.PORT || 3100;
//=============================================
// Entorno
//=============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//=============================================
// Base de datos : acceso
//=============================================

// process.env.USER_DB = process.env.USER_DB || 'sgp';
// process.env.PASS_DB = process.env.PASS_DB || 'AguanteDar987!';
// process.env.BASENAME_DB = process.env.BASENAME_DB || 'cwSGDesarrolloSP';
process.env.USER_DB_SARADM = process.env.USER_DB_SARADM || 'sgp';
process.env.PASS_DB_SARADM = process.env.PASS_DB_SARADM || 'AguanteDar987!';
process.env.BASENAME_DB_SARADM = process.env.BASENAME_DB_SARADM || 'SARADM';

process.env.USER_DB = process.env.USER_DB || 'admindam';
process.env.PASS_DB = process.env.PASS_DB || 'Softland2020!!';
process.env.BASENAME_DB = process.env.BASENAME_DB || 'cwSGDesarrolloSP';
//=============================================
// Base de datos : configuracion
//=============================================
let urlDB;
// if (process.env.NODE_ENV === 'dev') {
//     urlDB = {
//         "host": "mariner",
//         "dialect": "mssql",
//         "port": "1433",
//         "logging": false,
//         "dialectOptions": {
//             "instanceName": ""
//         }
//     };
// } else {
//     urlDB = process.env.MSSQL_URI;
// }

if (process.env.NODE_ENV === 'dev') {
    urlDB = {
        "host": "SARDDBB",
        "dialect": "mssql",
        "port": "1433",
        "logging": false,
        "dialectOptions": {
            "instanceName": "DESAMED"
        }
    };
} else {
    urlDB = process.env.MSSQL_URI;
}
let urlSARADM;
if (process.env.NODE_ENV === 'dev') {
    urlSARADM = {
        "host": "saradm",
        "dialect": "mssql",
        "port": "1433",
        "logging": false,
        "dialectOptions": {
            "instanceName": ""
        }
    };
} else {
    urlSARADM = process.env.MSSQL_URI;
}
let urlDB2;
if (process.env.NODE_ENV === 'dev') {
    urlDB2 = 'mongodb://localhost:27017/mariner';
} else {
    urlDB2 = process.env.MONGO_URI;
}
process.env.URLDB = JSON.stringify(urlDB);
process.env.URLDB2 = JSON.stringify(urlDB2);
process.env.URLDBSARADM = JSON.stringify(urlSARADM);