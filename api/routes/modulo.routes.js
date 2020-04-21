const { Router } = require("express");

module.exports = function({ ModuloController }) {
    const router = Router();

    router.get("/:nrocta/:termino", ModuloController.getAllWithParams.bind(ModuloController));
    router.get("/", ModuloController.getAllWithParams.bind(ModuloController));
    return router;
};