const { Router } = require("express");
const express = require("express");
var fileUpload = require('express-fileupload');
var app = express();

module.exports = function({ ImagenPerfilController }) {
    const router = Router();

    router.post("/:nrocta", app.use(fileUpload()), ImagenPerfilController.postArchivos.bind(ImagenPerfilController));
    router.get("/:nrocta", ImagenPerfilController.getImagenes.bind(ImagenPerfilController));
    return router;
};