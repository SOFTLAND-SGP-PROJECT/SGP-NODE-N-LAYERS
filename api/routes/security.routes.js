const { Router } = require("express");

module.exports = function({ SecurityController }) {
    const router = Router();

    router.post("/:nrocta", SecurityController.postPerfilSeguridad.bind(SecurityController));
    router.put("/:nrocta", SecurityController.putPerfilSeguridad.bind(SecurityController));
    router.get("/:nrocta", SecurityController.getPerfiles.bind(SecurityController));
    router.post("/menu/:nrocta", SecurityController.getMenu.bind(SecurityController));
    router.put("/perfil/admin/:nrocta", SecurityController.postAsignarAdmin.bind(SecurityController));
    router.delete("/:nrocta/:id", SecurityController.deletePerfilSeguridad.bind(SecurityController));

    // router.get("/perfil/:nombre", SecurityController.getPerfilNombre.bind(SecurityController));
    // router.get("/asignado/:email", SecurityController.getAsignadoMail.bind(SecurityController));
    router.get("/nrocta/:id", SecurityController.getPerfilById.bind(SecurityController));
    router.get("/todos/:nrocta/:id", SecurityController.getPerfilesAsignados.bind(SecurityController));

    return router;
};