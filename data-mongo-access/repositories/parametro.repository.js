const Parametro = require('../Models/parametro');

class ParametroRepository {
    constructor() {}
    async getNumeroPartePublico(tipo) {
        return await Parametro.find({ 'tipo': tipo }, (err, parametro) => {
            if (err) throw err;
            return parametro;
        });
    }
    async postNumeroPartePublico(tipo, codfor, numero) {
        var parametro = new Parametro({
            tipo: tipo,
            codfor: codfor,
            numero: numero,
            codigo: codfor.toUpperCase() + '0'.repeat(6 - numero.toString().length) + numero.toString()
        });
        return await parametro.save((err, parametroGuardado) => {
            if (err) throw err;
            return parametroGuardado;
        });
    }
    async putNumeroPartePublico(numero, tipo, codfor) {
        return await Parametro.findOne({
                tipo: tipo
            })
            .then((parametro) => {
                parametro.numero = numero;
                parametro.codigo = codfor.toUpperCase() + '0'.repeat(6 - numero.toString().length) + numero.toString();
                parametro
                    .save()
                    .then((param) => {
                        return param;
                    })
                    .catch((err) => { throw err; });
            });
    }
}

module.exports = ParametroRepository;