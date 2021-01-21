const { Router } = require("express");

module.exports = function({ ClienteController }) {
    const router = Router();

    router.get("/cliente/:id", ClienteController.getUsuario.bind(ClienteController));
    router.get("/cliente/nrocta/:direml", ClienteController.getUsuarioByNrocta.bind(ClienteController));

    router.get("/cliente/", ClienteController.getAll.bind(ClienteController));
    router.get("/:id", ClienteController.get.bind(ClienteController));
    router.post("/", ClienteController.create.bind(ClienteController));
    router.put("/:id", ClienteController.update.bind(ClienteController));
    router.delete("/:id", ClienteController.delete.bind(ClienteController));

    return router;
};