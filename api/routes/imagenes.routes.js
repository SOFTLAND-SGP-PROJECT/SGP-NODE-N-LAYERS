const { Router } = require("express");
const express = require("express");

module.exports = function({ ImagenesController }) {
    const router = Router();

    router.get("/:tipo/:parte/:img", ImagenesController.getImagenes.bind(ImagenesController));
    return router;
};