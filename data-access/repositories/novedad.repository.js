const Repository = require("./repository");

class NovedadRepository extends Repository {
  constructor({ db }) {
    super(db, "USR_SPWEBNOVEDADES");
    this._db = db;
    this._sequelize = db.sequelize;
    this._Op = db.Sequelize.Op;
    this.entity = "USR_SPWEBNOVEDADES";
  }
  getNovedadesGeneral(nrocta) {
    return  this._sequelize
      .query('EXEC SLSPWEB_Novedades :NROCTA', {
        replacements: { NROCTA: nrocta}, type: this._sequelize.QueryTypes.SELECT })
  }

}
module.exports = NovedadRepository;
