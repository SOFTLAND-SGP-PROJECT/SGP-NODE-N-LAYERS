const Repository = require("./repository");
const path = require('path');
const fs = require('fs');
class PartePublicoRepository extends Repository {
    constructor({ db }) {
        super(db, "USR_SPTERH", null);
        this._db = db;
        this._Op = db.Sequelize.Op;
        this._Sequelize = db.sequelize;
        this.resultado = {};
    }
    postParte(parte) {
        const Op = this._Op;
        const sequelize = this._Sequelize;
        return this._db.USR_SPTERH.create(parte, { include: [{ model: this._db.USR_SPTERI, as: "items" }] });
    }
    getAllWithTermino(tippub, codigo) {
        console.log(tippub, codigo);
        return this._Sequelize
            .query('EXEC SLSPWEB_PartesPublicos :TIPPUB, :TEXTO ', {
                replacements: { TIPPUB: tippub, TEXTO: codigo },
                type: this._Sequelize.QueryTypes.SELECT
            }).then((data) => {
                return {
                    count: 1,
                    partes: data
                }
            });
    }
    get(tippub, codigo) {
        const Op = this._Op;
        const sequelize = this._Sequelize;
        return this._db[this.entity].findOne({
                limit: 15,
                where: {
                    [Op.and]: [
                        { USR_SPTERH_TIPPUB: tippub },
                        {
                            USR_SPTERH_CODIGO: {
                                [Op.like]: `%${codigo}%`
                            }

                        }
                    ]
                },
                include: [{ model: this._db.USR_SPTERI, as: "items" }]
            })
            .then((data) => {
                return {
                    count: 1,
                    partes: data
                };
            });
    }
    getAllWithTipo(tippub) {
        const Op = this._Op;
        const sequelize = this._Sequelize;
        let whereStr = { USR_SPTERH_TIPPUB: tippub }
        let contarResultados = Promise.resolve(this.contarResultados(whereStr))
        return contarResultados.then((count) => {
            return this._db[this.entity].findAll({
                limit: 25,
                where: whereStr,
                include: [{ model: this._db.USR_SPTERI, as: "items" }]
            }).then((data) => {
                return {
                    count: count,
                    partes: data
                }
            });
        });
    }
    getSomeWithFilters(tippub, terminos) {
        const Op = this._Op;
        const sequelize = this._Sequelize;
        terminos = terminos.split(",");
        return this._db[this.entity].findAll({
                where: {
                    [Op.and]: [

                        { USR_SPTERH_CODIGO: terminos },
                        { USR_SPTERH_TIPPUB: tippub }

                    ]
                },
                include: [{ model: this._db.USR_SPTERI, as: "items" }]
            })
            .then((data) => {
                return {
                    count: 1,
                    partes: data
                }
            });
    }
    getAllWithSearchFilters(tippub, modulo, objeto, version, termino, offset, limit) {
        const Op = this._Op;
        const sequelize = this._Sequelize;

        var resultado = { partes: '', count: 0 }
        modulo = (modulo === 'undefined' || modulo === 'null' ? "" : modulo);
        objeto = (objeto === 'undefined' || objeto === 'null' ? "" : objeto);
        version = (version === 'undefined' || version === 'null' ? "" : version);
        termino = (termino === 'undefined' || termino === 'null' ? "" : termino);
        console.log(tippub, modulo, objeto, version, termino, offset, limit);
        let whereStr = []
        let where = {
            USR_SPTERH_TIPPUB: tippub,
        }
        console.log(version);

        if (version !== "") {
            where = {
                ...where,
                USR_SPTERH_VRSION: version
            }
        }
        if (modulo !== "") {
            where = {
                ...where,
                USR_SPTERH_MODULO: modulo
            }
        }
        if (objeto !== "") {
            where = {
                ...where,
                USR_SPTERH_OBJETO: objeto
            }
        }
        console.log(where);

        whereStr.push(where);
        whereStr.push({
            [Op.or]: [{
                    USR_SPTERH_TEXTOS: {
                        [Op.like]: `%${termino}%`
                    }
                },
                {
                    USR_SPTERH_DESCRP: {
                        [Op.like]: `%${termino}%`
                    }
                },
                {
                    USR_SPTERH_CODIGO: {
                        [Op.like]: `%${termino}%`
                    }
                }
            ]
        })

        let contarResultados = Promise.resolve(this.contarResultados(whereStr))
        return contarResultados.then((count) => {
            return this._db[this.entity]
                .findAll({
                    offset: parseInt(offset, 10),
                    limit: parseInt(limit, 10),
                    where: whereStr,
                    include: [{ model: this._db.USR_SPTERI, as: "items" }]
                }).then((data) => {
                    return {
                        count: count,
                        partes: data
                    }
                })
        })

    }
    contarResultados(whereStr) {
        return this._db[this.entity]
            .findAndCountAll({
                where: whereStr
            }).then((data) => {
                return data.count
            });
    }
    deleteParte(codigo) {
        this.borrarArchivo(codigo);
        return this._db["USR_SPTERI"].destroy({ where: { USR_SPTERI_CODIGO: codigo } })
            .then(resp => {
                return this._db["USR_SPTERH"].destroy({ where: { USR_SPTERH_CODIGO: codigo } })
                    .then(resp => {
                        return `Parte ${codigo} borrardo con éxito`;
                    });
            });
    }
    borrarArchivo(codigo) {
        this._db["USR_SPTERI"]
            .findAll({ where: { USR_SPTERI_CODIGO: codigo } })
            .then(resp => {
                for (let item of resp) {
                    if (item.dataValues.USR_SPTERI_BMPBMP) {
                        if (item.dataValues.USR_SPTERH_TIPPUB = 'P')
                            var path = `../SGP_NODE_BACKEND/upload/partepublico/${item.dataValues.USR_SPTERI_BMPBMP}`;
                        if (fs.existsSync(path)) {
                            fs.unlink(path, (err) => {
                                if (err) throw err;
                            });
                        }
                    }
                }
            });
    }
}

module.exports = PartePublicoRepository;