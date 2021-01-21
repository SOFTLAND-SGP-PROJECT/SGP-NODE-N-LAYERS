class EmailEditorService {
    constructor({ EmailEditorRepository }) {
        this._EmailEditorRepository = EmailEditorRepository;
    }

    async getEmailEditorByCodigo(codigo) {
        return await this._EmailEditorRepository.getEmailEditorByCodigo(codigo);
    }
    async putEmailEditor(email) {
        return this._EmailEditorRepository.putEmailEditor(email);
    }
    async postEmailEditor(email) {
        return this._EmailEditorRepository.postEmailEditor(email);
    }
    async deleteEmailEditorByCodigo(codigo) {
        return this._EmailEditorRepository.deleteEmailEditorByCodigo(codigo);
    }
    async getAllEmailEditor() {
        return this._EmailEditorRepository.getAllEmailEditor();
    }
}

module.exports = EmailEditorService;