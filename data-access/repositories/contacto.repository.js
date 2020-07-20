const Repository = require("./repository");

class ContactoRepository extends Repository {
    constructor({ db }) {
        super(db, "VTMCLC");
        this._Op = db.Sequelize.Op
        this.entity = "VTMCLC";
    }
    getAllWithTwoParams(nrocta, termino) {
        const Op = this._Op;
        return this._db[this.entity]
            .findAll({
                where: {
                    [Op.and]: [
                        { VTMCLC_NROCTA: nrocta },
                        {
                            USR_VTMCLC_INACTI: {
                                [Op.or]: {
                                    [Op.eq]: null,
                                    [Op.eq]: 'N'
                                }
                            }
                        },
                        {
                            VTMCLC_CODCON: {
                                [Op.like]: `%${termino}%`
                            }
                        }
                    ]
                }
            });
    }
    getAllWithOneParams(nrocta) {
        const Op = this._Op;
        return this._db[this.entity]
            .findAll({
                where: {
                    [Op.and]: [
                        { VTMCLC_NROCTA: nrocta },
                        {
                            USR_VTMCLC_INACTI: {
                                [Op.or]: {
                                    [Op.eq]: null,
                                    [Op.eq]: 'N'
                                }
                            }
                        }
                    ]
                }
            });
    }
}
module.exports = ContactoRepository;