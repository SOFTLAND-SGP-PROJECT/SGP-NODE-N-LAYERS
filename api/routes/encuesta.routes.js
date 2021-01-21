const { Router } = require("express");
const express = require("express");

module.exports = function({ EncuestaController }) {
    const router = Router();

    router.post("/:nrocta/:codpro", EncuestaController.postRespuestaEncuesta.bind(EncuestaController));
    router.get("/:tipcur", EncuestaController.getEncuestaPorTipo.bind(EncuestaController));
    return router;
};