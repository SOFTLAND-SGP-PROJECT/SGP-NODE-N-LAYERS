class EncuestaService {
    constructor({ EncuestaRepository }) {
        this._EncuestaRepository = EncuestaRepository;
    }

    // servicios encuesta
    async getEncuestaPorTipo(tipcur) {
        return await this._EncuestaRepository.getEncuestaPorTipo(tipcur);
    }
    async postRespuestaEncuesta(respuesta, nrocta, codpro) {
        console.log(respuesta.tipenc, respuesta.nroenc, nrocta, respuesta.codcon, codpro, respuesta.textos, respuesta.nropre, respuesta.codres);

        return await this._EncuestaRepository.postRespuestaEncuesta(respuesta, nrocta, codpro);
    }
}

module.exports = EncuestaService;