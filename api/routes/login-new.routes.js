const { Router } = require("express");

module.exports = function({ LoginNewController }) {
    const router = Router();
    router.post("/", LoginNewController.login.bind(LoginNewController));
    // router.post("/sysadmin", LoginNewController.loginSysAdmin.bind(LoginNewController));
    router.post("/contactos", LoginNewController.getUsuarioSGP.bind(LoginNewController));
    router.post("/crear/:nrocta", LoginNewController.CrearUsuariosSGP.bind(LoginNewController));
    router.get("/:nrocta/:termino", LoginNewController.getAllWithTwoParams.bind(LoginNewController));
    router.get("/:nrocta", LoginNewController.getAllWithOneParams.bind(LoginNewController));
    router.get("/todos/nrocta/:sgpuid", LoginNewController.getUsuarioById.bind(LoginNewController));

    router.put("/", LoginNewController.ActualizarUsuarioSGP.bind(LoginNewController));
    router.put("/:nrocta", LoginNewController.ActualizacionClienteSGP.bind(LoginNewController));



    return router;
};