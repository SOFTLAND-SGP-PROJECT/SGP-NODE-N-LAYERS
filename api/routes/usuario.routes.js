const { Router } = require("express");

module.exports = function({ UsuarioController }) {
    const router = Router();

    router.get("/cliente/:id", UsuarioController.getUsuario.bind(UsuarioController));
    router.get("/cliente/", UsuarioController.getAll.bind(UsuarioController));
    router.get("/:id", UsuarioController.get.bind(UsuarioController));
    router.post("/", UsuarioController.create.bind(UsuarioController));
    router.put("/:id", UsuarioController.update.bind(UsuarioController));
    router.delete("/:id", UsuarioController.delete.bind(UsuarioController));

    return router;
};