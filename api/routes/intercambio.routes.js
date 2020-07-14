const { Router } = require("express");
const express = require("express");
var fileUpload = require('express-fileupload');
var app = express();

module.exports = function({ IntercambioController }) {
    const router = Router();
    router.post("/:username/:newfolder", app.use(fileUpload()), IntercambioController.postArchivos.bind(IntercambioController));
    router.delete("/:username/borrado", IntercambioController.deleteArchivo.bind(IntercambioController));
    router.get("/:ruta", IntercambioController.descargarArchivos.bind(IntercambioController));

    return router;
};