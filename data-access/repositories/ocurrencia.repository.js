const Repository = require("./repository");

class OcurrenciaRepository extends Repository {
  constructor({ db }) {
    super(db, "USR_SPTOCH", {
       limit: 50
    });
    this._Op = db.Sequelize.Op
  }

  getAllWithParams(termino) {
    const Op = this._Op;
    return this._db[this.entity]
               .findAll({
                          where:
                          {[Op.or]: [
                                {USR_SPTOCH_CODIGO:
                                  {
                                    [Op.like]: `${termino}%`
                                  }
                                },
                                {USR_SPTOCH_DESCRP:
                                  {
                                    [Op.like]: `${termino}%`
                                  }
                                }
                              ]
                          }
                       });
  }

}

module.exports = OcurrenciaRepository;
