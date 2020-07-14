const Log = require('../Models/log');

class LogRepository {
    constructor() {}

    async postLog(tipo, nombre, descripcion, proceso, usuario) {
        // codfor.toUpperCase() + '0'.repeat(6 - numero.toString().length) + numero.toString()
        var log = new Log({
            tipo: tipo,
            nombre: nombre,
            descripcion: descripcion,
            proceso: proceso,
            usuario: usuario,
            fecha: new Date()
        });
        return await log.save((err, logGuardado) => {
            if (err) throw err;
            return logGuardado;
        });
    }
}

module.exports = LogRepository;