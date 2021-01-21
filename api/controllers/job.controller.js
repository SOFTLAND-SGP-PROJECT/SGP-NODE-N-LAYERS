const { response } = require('express');
const jsonMapper = require("json-mapper-json/lib/json-mapper");

class JobController {

    constructor({ Job }) {
        this._entityBuisness = Job;
    }
    async executeJob(req, res = response) {
        const job = req.body
        await this._entityBuisness.execute(job)
            .then(data => {
                console.log(data);
                res.status(200).json({
                    ok: true,
                    payload: data
                });

            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }
    async enviaMail(req, res = response) {
        const options = req.body;

        await this._entityBuisness.enviarEmail(options.mail, options.subject, options.codigo)
            .then(data => {
                console.log(data);
                res.status(200).json({
                    ok: true,
                    payload: data
                });

            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }




}

module.exports = JobController;