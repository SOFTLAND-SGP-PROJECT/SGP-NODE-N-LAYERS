const Controller = require("./controller");


class SptestController extends Controller {
    constructor({ SptestService }) {
        super(SptestService);
    }
}

module.exports = SptestController;