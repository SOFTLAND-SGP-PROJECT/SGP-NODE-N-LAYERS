const { Router } = require("express");

module.exports = function({ ContactoController }) {
    const router = Router();
    router.post("/crear/:nrocta", ContactoController.postCrearContacto.bind(ContactoController));
    router.get("/:nrocta/:termino", ContactoController.getAllWithTwoParams.bind(ContactoController));
    router.get("/:nrocta", ContactoController.getAllWithOneParams.bind(ContactoController));
    router.put("/actualizar/:nrocta", ContactoController.putActualizarContacto.bind(ContactoController));
    router.post("/eliminar/:nrocta", ContactoController.deleteEliminarContacto.bind(ContactoController));

    return router;
};