const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");
var md5 = require('md5');
const path = require('path');
const fs = require('fs');
const { rutaPP } = require('../../config/config');

class PartePublicoController extends Controller {

    constructor({ PartePublicoService, ParametroService, LogService }) {
        super(PartePublicoService, Models.partepublico, LogService);
        this._entityMap = Models.partepublico;
        this._entityMapTermino = Models.partepublicoReducido;
    }

    async get(req, res) {
        const { tippub, codigo } = req.params;

        const entities = await this._entityService.get(tippub, codigo);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getAllWithTermino(req, res) {
        const { tippub, codigo } = req.params;

        const entities = await this._entityService.getAllWithTermino(tippub, codigo);
        jsonMapper(entities, this._entityMapTermino)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getAllWithTipo(req, res) {
        const { tippub } = req.params;
        const entities = await this._entityService.getAllWithTipo(tippub);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getAllWithSearchFilters(req, res) {
        const { tippub, modulo, objeto, version, termino, offset, limit } = req.params;
        console.log(tippub, modulo, objeto, version, termino, offset, limit);

        const entities = await this._entityService.getAllWithSearchFilters(tippub, modulo, objeto, version, termino, offset, limit)
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getSomeWithFilters(req, res) {
        const { tippub, terminos } = req.params;
        const entities = await this._entityService.getSomeWithFilters(tippub, terminos);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async postParte(req, res) {
        var parte = req.body;
        const { usuario } = req.params;
        const tipo = parte.USR_SPTERH_TIPPUB;

        await this._entityService.postParte(parte)
            .then((parte) => {
                if ((parte && parte.length === 0) || !parte) {
                    console.log('El parte no se pudo cargar');
                    this._logService.postLog(tipo, 'Subida de parte publico', 'El parte no se pudo cargar', 'error de carga', usuario);
                    return res.status(400).json({
                        ok: false,
                        message: 'El parte no se pudo cargar',
                    });
                }
                console.log(parte);

                return res.status(201).json({
                    ok: true,
                    payload: `Parte ${parte.USR_SPTERH_CODIGO} cargado con Exito`
                });
            })
            .catch(error => {
                this._logService.postLog(tipo, 'Subida de parte publico', error, 'error de conexión', usuario);

                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async postArchivos(req, res) {
        var { tipo, id, usuario } = req.params;
        if (!req.files || Object.keys(req.files).length === 0) {
            this._logService.postLog(tipo, 'Subida de archivos publico', 'No selecciono ningun archivo', 'sin archivo', usuario);
            return res.status(400).json({
                ok: false,
                mensaje: 'No selecciono nada',
                errors: { message: 'Debe de seleccionar un archivo' }
            });
        }
        var path = this.crearFolder(tipo, id);
        for (let key of Object.keys(req.files)) {
            if (key.includes('imagen')) {
                path = this.crearFolder(tipo, id + '/imagen/');
                this.moverArchivos(tipo, req.files[key], req.files[key].name, path);
            }
            if (key.includes('link')) {
                var path = this.crearFolder(tipo, id + '/link/');
                this.moverArchivos(tipo, req.files[key], req.files[key].name, path);
            }
            if (key.includes('video')) {
                var path = this.crearFolder(tipo, id + '/video/');
                this.moverArchivos(tipo, req.files[key], req.files[key].name, path);
            }
        }

        return res.status(200).json({
            ok: true,
            payload: 'Peticion realizada correctamente'
        });
    }
    async getImagenes(req, res) {
        const { tipo, img } = req.params;
        var pathImagen = path.resolve(__dirname, `../upload/${tipo}/${img}`);

        if (fs.existsSync(pathImagen)) {
            await res.sendFile(pathImagen);
        } else {
            var pathNoImagen = path.resolve(__dirname, '../assets/no-image.png');
            await res.sendFile(pathNoImagen);
        }
    }
    async deleteParte(req, res) {
        const { codigo } = req.params;
        const entities = await this._entityService.deleteParte(codigo)
            .then((resp) => {
                if (!resp) {
                    this._logService.postLog(codigo, 'Borrar parte publico', 'El parte no se pudo borrar', 'error borrando parte', usuario);
                    return res.status(400).json({
                        ok: false,
                        message: 'El parte no se pudo borrar',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: resp
                });
            })
            .catch(error => {
                this._logService.postLog(codigo, 'Borrar parte publico', error, 'error de conexión borrando parte', usuario);

                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });

    }
    async putParte(req, res) {
        var parte = req.body;
        console.log(parte);
    }

    //Funciones auxiliares
    moverArchivos(tipo, file, filename, folder) {
        var path = `${folder}${filename}`;
        file.mv(path, function(err, res) {
            if (err) {
                this._logService.postLog(tipo, 'Subida de archivos publico', err, 'error moviendo archivo', usuario);
                return res;
            }
            if (res) {
                return res;
            }
        });
    }
    crearFolder(tipo, folderName) {
        var dirPath = `${rutaPP}/${tipo}/${folderName}`;
        if (!fs.existsSync(dirPath)) {
            try {
                fs.mkdirSync(dirPath);
            } catch (e) {
                this._logService.postLog(tipo, 'Subida de archivos publico', dirPath, 'error creando carpeta', usuario);
                console.log("Error: " + dirPath);
            }
        }
        return dirPath;
    }
}

module.exports = PartePublicoController;