const { Router } = require("express");

module.exports = function({ ObjetoController }) {
    const router = Router();

    router.get("/:modulo/:termino", ObjetoController.getAllWithParams.bind(ObjetoController));

    return router;
};