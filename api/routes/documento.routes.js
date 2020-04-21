const { Router } = require("express");

module.exports = function({ DocumentoController }) {
    const router = Router();

    router.get("/:nrocta", DocumentoController.getDocumentos.bind(DocumentoController));

    return router;
};