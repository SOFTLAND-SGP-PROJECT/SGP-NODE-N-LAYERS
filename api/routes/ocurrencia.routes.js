const { Router } = require("express");

module.exports = function({ OcurrenciaController }) {
    const router = Router();

    router.get("/:termino", OcurrenciaController.getAllWithParams.bind(OcurrenciaController));
    router.get("", OcurrenciaController.getAll.bind(OcurrenciaController));
    return router;
};