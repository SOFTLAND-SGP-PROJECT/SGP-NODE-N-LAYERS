class CursoService {
    constructor({ CursoRepository, InscriptoRepository }) {
        this._CursoRepository = CursoRepository;
        this._InscriptoRepository = InscriptoRepository;

    }

    // servicios cursos
    async postCurso(codigo, asistente) {
        return await this._CursoRepository.postCurso(codigo, asistente);
    }
    async getCursos() {
        return await this._CursoRepository.getCursos();
    }
    async getProximoCursos() {
        return await this._CursoRepository.getProximoCursos();
    }
    async putRegistrar(codigo, contacto, email, nrocta, fecha) {
        return await this._InscriptoRepository.putRegistrar(codigo, contacto, email, nrocta, fecha);
    }
    async getCursoPorCodigo(codigo) {
        return await this._CursoRepository.getCursoPorCodigo(codigo);
    }
    async deleteRegistro(codigo, nrocta, email) {
        return await this._InscriptoRepository.deleteRegistro(codigo, nrocta, email);
    }
    async getInscriptoPorNrocta(codigo, nrocta) {
        return await this._InscriptoRepository.getInscriptoPorNrocta(codigo, nrocta);
    }
    async getCursosInscriptos(codigo) {
        return await this._CursoRepository.getCursosInscriptos(codigo);
    }
    async getLogros(nrocta) {
        return await this._CursoRepository.getLogros(nrocta);
    }
    async getCursosPendientes(nrocta) {
        return await this._CursoRepository.getCursosPendientes(nrocta);
    }
    async getAsistentesPorCurso(codpro, nrocta) {
        return await this._CursoRepository.getAsistentesPorCurso(codpro, nrocta);
    }
    async deleteAsistentePorCurso(codigo, asistente) {
        return await this._CursoRepository.deleteAsistentePorCurso(codigo, asistente);
    }
}

module.exports = CursoService;