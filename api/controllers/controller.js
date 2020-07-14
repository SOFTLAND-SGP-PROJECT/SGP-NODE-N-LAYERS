const jsonMapper = require('json-mapper-json');

class Controller {
    constructor(entityService, entityMap, logService) {
        this._entityService = entityService;
        this._entityMap = entityMap;
        this._logService = logService;
    }

    async getAll(req, res) {
        const entities = await this._entityService.getAll();
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }

    async get(req, res) {
        const { id } = req.params;
        let entity = await this._entityService.get(id);

        if (!entity) {
            return res.status(200).json({
                ok: true,
                message: 'No hay votacion cargada',
                payload: null
            });
        }
        jsonMapper(entity, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }

    async create(req, res) {
        const { body } = req;
        const createdEntity = await this._entityService.create(body);
        // createdEntity =   mapper(this._entityMap,createdEntity)
        return res.status(201).json({
            ok: true,
            payload: createdEntity
        });
    }

    async update(req, res) {
        const { body } = req;
        const { id } = req.params;

        await this._entityService.update(id, body);

        return res.status(204).send();
    }

    async delete(req, res) {
        const { id } = req.params;

        await this._entityService.delete(id);
        return res.status(204).send();
    }
}

module.exports = Controller;