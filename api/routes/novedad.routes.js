const { Router } = require("express");

module.exports = function({ NovedadController }) {
    const router = Router();

    router.get("/:nrocta", NovedadController.getNovedadesGeneral.bind(NovedadController));

    return router;
};