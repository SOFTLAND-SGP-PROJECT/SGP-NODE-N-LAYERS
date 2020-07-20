class CursoService {
    constructor({ CursoRepository, InscriptoRepository }) {
        this._CursoRepository = CursoRepository;
        this._InscriptoRepository = InscriptoRepository;

    }

    // servicios cursos
    async postCurso(codigo, curso) {
        return await this._CursoRepository.postCurso(codigo, curso);
    }
    async getCursos() {
        return await this._CursoRepository.getCursos();
    }
    async getProximoCursos() {
        return await this._CursoRepository.getProximoCursos();
    }
    async putRegistrar(codigo, contacto, email, nrocta) {
        return await this._InscriptoRepository.putRegistrar(codigo, contacto, email, nrocta);
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
}

module.exports = CursoService;