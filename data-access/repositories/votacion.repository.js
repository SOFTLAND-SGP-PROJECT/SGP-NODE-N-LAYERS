const Repository = require("./repository");

class VotacionRepository extends Repository {
    constructor({ db }) {
        super(db, "USR_SGPLOG", {});
        this._db = db;
        this._Op = db.Sequelize.Op;
        this._Sequelize = db.sequelize;
    }
    get(id, nrocta) {
        const Op = this._Op;
        const sequelize = this._Sequelize;
        return this._db[this.entity].findAll({}).then((data) => {
            var voto = data;
            var totales = data.length;
            var isVoto = voto.filter((result) => result.USR_SGPLOG_NROCTA === nrocta && result.USR_SGPLOG_CODIGO === id).length > 0;
            var positivos = data.filter((result) => result.USR_SGPLOG_VALORA === 1 && result.USR_SGPLOG_CODIGO === id).length;
            var negativos = data.filter((result) => result.USR_SGPLOG_VALORA > 1 && result.USR_SGPLOG_CODIGO === id).length;
            return {
                totales,
                isVoto,
                positivos,
                negativos
            }
        });
    }
    putVotoNuevo(nrocta, codigo, body) {
        const Op = this._Op;
        const sequelize = this._Sequelize;
        console.log(body);

        return this._db[this.entity].findAll({
            where: {
                [Op.and]: [
                    { USR_SGPLOG_NROCTA: `${nrocta}` },
                    { USR_SGPLOG_CODIGO: `${codigo}` },
                    {
                        USR_SGPLOG_VALORA: {
                            [Op.eq]: 0
                        }
                    }

                ]
            }
        }).then(data => {
            if (!data) return [];
            return this._db[this.entity].update(body, {
                where: {
                    [Op.and]: [
                        { USR_SGPLOG_NROCTA: `${nrocta}` },
                        { USR_SGPLOG_CODIGO: `${codigo}` }
                    ]
                }
            });
        });
    }
}

module.exports = VotacionRepository;