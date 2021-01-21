const { Router } = require("express");
const { JobController } = require("../controllers");

module.exports = function({ JobController }) {
    const router = Router();
    router.post("/", JobController.executeJob.bind(JobController));
    router.post("/mail", JobController.enviaMail.bind(JobController));

    // router.post("/sysadmin", JobController.loginSysAdmin.bind(JobController));

    return router;
};