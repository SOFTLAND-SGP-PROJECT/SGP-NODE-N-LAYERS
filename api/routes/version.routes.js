const { Router } = require("express");

module.exports = function({ VersionController }) {
    const router = Router();

    router.get("/:termino", VersionController.getAllWithParams.bind(VersionController));
    router.get("", VersionController.getAll.bind(VersionController));
    return router;
};