const Repository = require("./repository");

class ImpactoRepository extends Repository {
  constructor({ db }) {
    super(db, "USR_SPTIMH", {
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
                                {USR_SPTIMH_CODIGO:
                                  {
                                    [Op.like]: `${termino}%`
                                  }
                                },
                                {USR_SPTIMH_DESCRP:
                                  {
                                    [Op.like]: `${termino}%`
                                  }
                                }
                              ]
                          }
                       });
  }

}

module.exports = ImpactoRepository;
