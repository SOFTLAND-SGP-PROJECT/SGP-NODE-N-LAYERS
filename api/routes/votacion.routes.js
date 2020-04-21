const { Router } = require("express");

module.exports = function({ VotacionController }) {
    const router = Router();

    router.post("/:id", VotacionController.postVotoNuevo.bind(VotacionController));
    router.put("/:nrocta/:codigo", VotacionController.putVotoNuevo.bind(VotacionController));
    router.get("/", VotacionController.getAll.bind(VotacionController));
    router.get("/:id/:nrocta", VotacionController.get.bind(VotacionController));


    return router;
};