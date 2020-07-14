const Repository = require("./repository");

class SptestRepository extends Repository {
    constructor({ db }) {
        super(db, "SPTEST");
    }
}

module.exports = SptestRepository;