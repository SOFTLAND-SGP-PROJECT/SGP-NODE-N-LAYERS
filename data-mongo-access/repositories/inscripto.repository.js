const Inscripto = require('../Models/inscripto');

class InscriptoRepository {
    constructor() {

    }
    async getInscriptoPorNrocta(codigo, nrocta) {
        return await Inscripto.find({
            codigo: codigo,
            nrocta: nrocta,
            debaja: 'N'
        }, (err, inscripto) => {
            if (err) {
                return;
            }
            return inscripto;
        });
    }
    async deleteRegistro(codigo, nrocta, email) {
        return await Inscripto.findOne({
                nrocta: nrocta,
                email: email,
                codigo: codigo
            })
            .then((inscripto) => {
                inscripto.debaja = 'S';
                inscripto
                    .save()
                    .then((data) => {
                        return data;
                    })
                    .catch((err) => { throw err; });
            });
    }
    async putRegistrar(codigo, contacto, email, nrocta) {
        console.log(codigo, contacto, email, nrocta);
        var inscripto = new Inscripto({
            codigo: codigo,
            nrocta: nrocta,
            contacto: contacto,
            email: email,
            debaja: 'N'
        });
        return await inscripto.save((err, inscriptoGuardado) => {
            if (err) throw err;
            return inscriptoGuardado;
        });
    }
}

module.exports = InscriptoRepository;