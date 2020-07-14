const { Router } = require("express");
const express = require("express");
var fileUpload = require('express-fileupload');
var app = express();

module.exports = function({ HabilitacionController }) {
    const router = Router();

    router.post("/upload/:nrocta/:tipo/:opcion/:mail/:motivo/:filename", app.use(fileUpload()), HabilitacionController.postHabilitacion.bind(HabilitacionController));
    router.get("/tipo/", HabilitacionController.getTipoHabilitacion.bind(HabilitacionController));
    router.get("/novedades", HabilitacionController.getNovedades.bind(HabilitacionController));

    return router;
};