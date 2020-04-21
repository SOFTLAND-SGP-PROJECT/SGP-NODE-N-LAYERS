const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");
var md5 = require('md5');
const path = require('path');
const fs = require('fs');
const { rutaPP } = require('../../config/config');

class PartePublicoController extends Controller {

    constructor({ PartePublicoService }) {
        super(PartePublicoService, Models.partepublico);
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
        const entities = await this._entityService.postParte(parte)
            .then((parte) => {
                if ((parte && parte.length === 0) || !parte) {
                    console.log('El parte no se pudo cargar');

                    return res.status(400).json({
                        ok: false,
                        message: 'El parte no se pudo cargar',
                    });
                }
                return res.status(201).json({
                    ok: true,
                    payload: `Parte ${parte.USR_SPTERH_CODIGO} cargado con Exito`
                });
            })
            .catch(error => {
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            })
    }
    async postArchivos(req, res) {
        var { tipo, id, imagen } = req.params;
        if (!req.files) {
            return res.status(400).json({
                ok: false,
                mensaje: 'No selecciono nada',
                errors: { message: 'Debe de seleccionar una imagen' }
            });
        }
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No hay archivos para subir.');
        }
        var path = this.crearFolder(tipo, id);
        for (let key of Object.keys(req.files)) {
            switch (key) {
                case 'item0':
                    this.moverArchivos(req.files.item0, req.files.item0.name, tipo, path);
                    break;
                case 'item1':
                    this.moverArchivos(req.files.item1, req.files.item1.name, tipo, path);
                    break;
                case 'item2':
                    this.moverArchivos(req.files.item2, req.files.item2.name, tipo, path);
                    break;
                case 'item3':
                    this.moverArchivos(req.files.item3, req.files.item3.name, tipo, path);
                    break;
                case 'item4':
                    this.moverArchivos(req.files.item4, req.files.item4.name, tipo, path);
                    break;
                case 'item5':
                    this.moverArchivos(req.files.item5, req.files.item5.name, tipo, path);
                    break;
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
                        return res.status(400).json({
                            ok: false,
                            message: 'El parte no se pudo cargar',
                        });
                    }
                    return res.status(200).json({
                        ok: true,
                        payload: resp
                    });
                })
                .catch(error => {
                    return res.status(500).json({
                        ok: false,
                        payload: error
                    });
                });

        }
        //Funciones auxiliares
    moverArchivos(file, filename, tipo, folder) {
        var path = `${folder}${filename}`;
        console.log(path);

        file.mv(path, function(err, res) {
            if (err) {
                if (res) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error al mover el archivo',
                        errors: err
                    });
                } else {
                    return;
                }
            }
        });
    }
    crearFolder(tipo, folderName) {
        var dirPath = `${rutaPP}/${tipo}/${folderName}/`;
        if (!fs.existsSync(dirPath)) {
            try {
                fs.mkdirSync(dirPath);
            } catch (e) {
                console.log("Error: " + dirPath);
            }
        }
        return dirPath;
    }
    crearFolderName(codfor, nrofor) {
        let numerador = "000000" + nrofor.toString();
        return codfor.toUpperCase() + "_" + numerador.substring(numerador.length - 6, numerador.length);
    }
}

module.exports = PartePublicoController;