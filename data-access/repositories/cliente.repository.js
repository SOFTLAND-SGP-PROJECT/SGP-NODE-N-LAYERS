const Repository = require("./repository");

class ClienteRepository extends Repository {
    constructor({ db }) {
        super(db, "VTMCLH", {
            limit: 50
        });
        this._Op = db.Sequelize.Op;
        this.entity = "VTMCLH";
        this._sequelize = db.sequelize;
    }
    async getUsuario(nrocta) {
        const Op = this._Op;
        return await this._db[this.entity].findAll({
            where: {
                [Op.and]: [{
                        VTMCLH_NROCTA: {
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
    async getUsuarioByNrocta(direml) {
        direml = (direml == 'null') ? '' : direml;
        direml = (direml == undefined) ? '' : direml;

        return await this._sequelize
            .query(`select * 
                    from vtmclh
                    inner join vtmclc on vtmclc_nrocta = vtmclH_nrocta
                    where (('${direml}' <> '' and vtmclc_direml  = '${direml}') or '${direml}' = '')`, { type: this._sequelize.QueryTypes.SELECT });
    }
}
module.exports = ClienteRepository;