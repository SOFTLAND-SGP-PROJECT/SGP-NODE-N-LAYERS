const { Router } = require("express");
const express = require("express");

module.exports = function({ ImagenesController }) {
    const router = Router();

    router.get("/:tipo/:parte/:folder/:img", ImagenesController.getImagenes.bind(ImagenesController));
    router.get("/:codigo/:tipo", ImagenesController.getImagenesCursos.bind(ImagenesController));
    return router;
};