const { Router } = require("express");

module.exports = function({ SptestController }) {
    const router = Router();

    router.get("/", SptestController.getAll.bind(SptestController));
    router.get("/:id", SptestController.get.bind(SptestController));
    router.post("/", SptestController.create.bind(SptestController));
    router.put("/:id", SptestController.update.bind(SptestController));
    router.delete("/:id", SptestController.delete.bind(SptestController));

    return router;
};