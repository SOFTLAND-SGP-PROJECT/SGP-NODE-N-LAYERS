const { Router } = require("express");
const express = require("express");
var fileUpload = require('express-fileupload');
var app = express();

module.exports = function({ ContactoController }) {
    const router = Router();
    router.post("/:username/:newfolder/:sgpuid/:tipo/:type", app.use(fileUpload()), ContactoController.postArchivos.bind(ContactoController));
    router.post("/crear/:nrocta", ContactoController.postCrearContacto.bind(ContactoController));
    router.get("/:nrocta/:termino", ContactoController.getAllWithTwoParams.bind(ContactoController));
    router.get("/:nrocta", ContactoController.getAllWithOneParams.bind(ContactoController));
    router.put("/actualizar/:nrocta", ContactoController.putActualizarContacto.bind(ContactoController));
    router.post("/eliminar/:nrocta", ContactoController.deleteEliminarContacto.bind(ContactoController));

    return router;
};