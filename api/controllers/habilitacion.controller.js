const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const { rutaZI } = require('../../config/config');
const path = require('path');
var md5 = require('md5');
const fs = require('fs');
const Model = require("../models");

class HabilitacionController extends Controller {
    constructor({ HabilitacionService }) {
        super(HabilitacionService);
        this._entityMap = Model.habilitacion;
    }
    async getNovedades(req, res) {
        let entities = await this._entityService.getNovedades();
        jsonMapper(entities, this._entityMap)
            .then((novedades) => {
                if ((novedades && novedades.length === 0) || !novedades) {
                    return res.status(400).json({
                        ok: false,
                        message: 'La novedades no se pudo cargar',
                    });
                }
                return res.status(201).json({
                    ok: true,
                    payload: novedades
                });
            }).catch(
                error => {
                    if (error) {
                        console.log(error);

                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error en la conexión con base de datos',
                            errors: error
                        });
                    }
                });
    }
    async getTipoHabilitacion(req, res) {
        let entities = await this._entityService.getTipoHabilitacion();
        jsonMapper(entities, this._entityMap)
            .then((tipoHabilitacion) => {
                if ((tipoHabilitacion && tipoHabilitacion.length === 0) || !tipoHabilitacion) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No se encontraron tipo de habilitacion',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: tipoHabilitacion
                });
            }).catch(
                error => {
                    if (error) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error en la conexión con base de datos',
                            errors: error
                        });
                    }
                });
    }
    async postHabilitacion(req, res) {
        var { nrocta, tipo, opcion, mail, motivo, filename } = req.params;
        var company, suc, data;
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
        let path = this.crearFolder(nrocta, filename);
        this.moverArchivos(req, res, nrocta, tipo, opcion, mail, motivo, path, req.files.filelist, req.files.filelist.name, this);
    }
    async crearHabilitacion(req, res, nrocta, tipo, opcion, mail, motivo, file, company, suc, data) {
        await this._entityService.postHabilitacion(nrocta, tipo, opcion, mail, motivo, file, company, suc, data)
            .then(() => {
                return res.status(201).json({
                    ok: true,
                    payload: 'Peticion realizada correctamente'
                });
            }).catch(
                error => {
                    console.log(error);

                    if (error) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error en la conexión con base de datos',
                            errors: error
                        });
                    }
                });
    }
    crearFolder(nrocta, folderName) {
        var dirPath = `${rutaZI}/${nrocta}/${folderName}/`;
        if (!fs.existsSync(dirPath)) {
            try {
                fs.mkdirSync(dirPath);
            } catch (e) {
                console.log("Error: " + dirPath);
            }
        }
        return dirPath;
    }
    moverArchivos(req, res, nrocta, tipo, opcion, mail, motivo, path, file, filename, content) {
        var pathNuevo = `${path}${filename}`;
        if (fs.existsSync(pathNuevo)) {
            fs.unlinkSync(pathNuevo);
        }
        console.log('2: ', pathNuevo);
        file.mv(pathNuevo, function(error, response) {
            if (error) {
                console.log(error);
                return response.status(500).json({
                    ok: false,
                    mensaje: 'Error al mover el archivo',
                    errors: error
                });
            } else {
                let company, suc, data;
                require('fs').readFileSync(pathNuevo, 'utf-8').split(/\r?\n/).forEach(function(line) {
                    let arrLinea = line.split("=");
                    switch (arrLinea[0]) {
                        case 'Company':
                            company = arrLinea[1];
                            break;
                        case 'Suc':
                            suc = arrLinea[1];
                            break;
                        case 'Data':
                            data = arrLinea[1];
                            break;
                        default:
                            return;
                    }
                });
                content.crearHabilitacion(req, res, nrocta, tipo, opcion, mail, motivo, null, company, suc, data);
            }
        });
    }

}
module.exports = HabilitacionController;