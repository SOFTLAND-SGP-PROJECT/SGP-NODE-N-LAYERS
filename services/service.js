class Service {
    constructor(EntityRepository) {
        this._entityRepository = EntityRepository;
    }

    async getAll() {
        const entities = await this._entityRepository.getAll();
        return entities;
    }

    async get(id) {
        const entity = await this._entityRepository.get(id);
        return entity;
    }

    async create(entity) {
        const createdEntity = await this._entityRepository.create(entity);
        return createdEntity;
    }

    async update(id, entity) {
        const updatedEntity = await this._entityRepository.update(id, entity);
        return updatedEntity;
    }

    async delete(id) {
        const deletedEntity = await this._entityRepository.delete(id);
        return deletedEntity;
    }
}

module.exports = Service;