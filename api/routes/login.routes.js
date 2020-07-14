const { Router } = require("express");

module.exports = function({ LoginController }) {
    const router = Router();
    router.get("/:uid/:pwd", LoginController.login.bind(LoginController));

    return router;
};