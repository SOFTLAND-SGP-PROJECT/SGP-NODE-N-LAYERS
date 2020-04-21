const Repository = require("./repository");

class UsuarioRepository extends Repository {
  constructor({ db }) {
    super(db, "VTMCLH",{
       limit: 50
    });
    this._Op = db.Sequelize.Op
    this.entity = "VTMCLH";
  }
  getUsuario(nrocta) {
    const Op = this._Op;
    return this._db[this.entity].findAll({
               where:
               {[Op.and]: [
                     {VTMCLH_NROCTA:
                       {
                         [Op.like]: `${nrocta}%`
                       }
                     },
                     {
                       VTMCLH_DEBAJA: 'N'
                     }
                   ]
               }
            });
  }
}
module.exports = UsuarioRepository;
