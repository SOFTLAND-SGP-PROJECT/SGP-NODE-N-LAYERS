const Service = require("./service");

class SptestService extends Service {
  constructor({ SptestRepository }) {
    super(SptestRepository);
  }
}

module.exports = SptestService;
