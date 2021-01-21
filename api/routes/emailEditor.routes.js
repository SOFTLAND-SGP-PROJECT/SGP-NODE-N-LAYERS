const { Router } = require("express");
const express = require("express");

var fileUpload = require('express-fileupload');
var app = express();
module.exports = function({ EmailEditorController }) {
    const router = Router();


    router.post("/", EmailEditorController.postEmailEditor.bind(EmailEditorController));
    router.put("/", EmailEditorController.putEmailEditor.bind(EmailEditorController));
    router.delete("/:codigo", EmailEditorController.deleteEmailEditorByCodigo.bind(EmailEditorController));
    router.get("/:codigo", EmailEditorController.getEmailEditorByCodigo.bind(EmailEditorController));
    router.get("/", EmailEditorController.getAllEmailEditor.bind(EmailEditorController));

    return router;
};