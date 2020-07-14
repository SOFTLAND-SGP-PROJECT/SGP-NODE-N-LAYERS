const { Router } = require("express");

module.exports = function({ SecurityController }) {
    const router = Router();

    router.post("/", SecurityController.postPerfilSeguridad.bind(SecurityController));
    router.get("/", SecurityController.getPerfiles.bind(SecurityController));
    router.get("/perfil/:nombre", SecurityController.getPerfilNombre.bind(SecurityController));
    router.get("/asignado/:email", SecurityController.getAsignadoMail.bind(SecurityController));


    return router;
};