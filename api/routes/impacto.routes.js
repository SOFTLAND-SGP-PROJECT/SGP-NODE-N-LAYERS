const { Router } = require("express");

module.exports = function({ ImpactoController }) {
    const router = Router();

    router.get("/:termino", ImpactoController.getAllWithParams.bind(ImpactoController));
    router.get("", ImpactoController.getAll.bind(ImpactoController));
    return router;
};