const { Router } = require("express");
const express = require("express");
var fileUpload = require('express-fileupload');
var app = express();

module.exports = function({ ParteController }) {
    const router = Router();

    router.post("/uploadPSP/:modfor/:codfor/:nrofor", app.use(fileUpload()), ParteController.postArchivos.bind(ParteController));
    router.post("/", ParteController.postParte.bind(ParteController));
    router.get("/historia/:nrocta/:codfor/:nrofor", ParteController.getHistoriaParte.bind(ParteController));
    router.get("/:nrocta/:codfor/:nrofor", ParteController.getParte.bind(ParteController));
    router.get("/acciones/:nrocta/:codfor/:nrofor", ParteController.getAccionesParte.bind(ParteController));
    router.get("/relacionado/:nrocta/:modulo/:fechaDesde/:fechaHasta/:info/:numero", ParteController.getPartesRelacionados.bind(ParteController));
    router.get("/todos/:nrocta/:limit/:pendingOnly", ParteController.getPartes.bind(ParteController));
    router.get("/count/:nrocta", ParteController.getPartesCount.bind(ParteController));
    router.get("/estado/:nrocta", ParteController.getEstadosDeParte.bind(ParteController));
    router.get("/informantes/:termino", ParteController.getInformantesdePartes.bind(ParteController));
    router.get("/informantes", ParteController.getInformantesdePartes.bind(ParteController));
    router.put("/cambiosEstado", ParteController.putCambioEstado.bind(ParteController));

    return router;
};