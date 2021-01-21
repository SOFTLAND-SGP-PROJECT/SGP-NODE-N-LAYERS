const { Router } = require("express");

module.exports = function({ MenuController }) {
    const router = Router();
    router.get("/", MenuController.menu.bind(MenuController));
    router.post("/", MenuController.postItemMenu.bind(MenuController));
    router.put("/:codigo", MenuController.putItemMenu.bind(MenuController));
    router.post("/borrado", MenuController.deleteItemMenu.bind(MenuController));
    return router;
};