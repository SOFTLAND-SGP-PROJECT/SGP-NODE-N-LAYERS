const { Router } = require("express");

module.exports = function({ ContactoController }) {
    const router = Router();

    router.get("/:nrocta/:termino", ContactoController.getAllWithTwoParams.bind(ContactoController));
    router.get("/:nrocta", ContactoController.getAllWithOneParams.bind(ContactoController));
    return router;
};