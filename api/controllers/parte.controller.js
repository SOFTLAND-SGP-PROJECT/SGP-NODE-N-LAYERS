const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");
var md5 = require('md5');
const path = require('path');
const fs = require('fs');
const { rutaPN } = require('../../config/config');

class ParteController extends Controller {
    constructor({ ParteService }) {
        super(ParteService, Models.parterelacionado);
        this._entityMap = Models.parterelacionado;
    }

    async getParte(req, res) {
        const { nrocta, codfor, nrofor } = req.params;
        let entity = await this._entityService.getParte(nrocta, codfor, nrofor)
            .then((parte) => {
                if ((parte && parte.length === 0) || !parte) {
                    return res.status(400).json({
                        ok: false,
                        message: 'El parte no existe',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: parte
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
    async postParte(req, res) {
        const body = req.body;
        let entity = await this._entityService.postParte(body.nrocta, body.versio, body.userid, body.descrp, body.adjunt, body.modobj, body.codobj, body.codimp, body.codocu, body.codsub, body.tipcla)
            .then((parte) => {
                if ((parte && parte.length === 0) || !parte) {
                    return res.status(400).json({
                        ok: false,
                        message: 'El parte no se pudo cargar',
                    });
                }
                return res.status(201).json({
                    ok: true,
                    payload: parte
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
    async postArchivos(req, res) {
        var { modfor, codfor, nrofor } = req.params;
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
        let path = this.crearFolder(modfor, codfor, nrofor);
        if (Array.isArray(req.files.filelist)) {
            for (let file of req.files.filelist) {
                this.moverArchivos(path, file, file.name, modfor, codfor, nrofor);
            }
        } else {
            this.moverArchivos(path, req.files.filelist, req.files.filelist.name, modfor, codfor, nrofor);
        }
        return res.status(200).json({
            ok: true,
            payload: 'Peticion realizada correctamente'
        });
    }
    async putCambioEstado(req, res) {
        const body = req.body;
        console.log('body');

        console.log(body);
        console.log('body');

        let entity = await this._entityService.putCambioEstado(body.nrocta, body.codfor, body.nrofor, body.estnew, body.asgare, body.asgres, body.obscli, body.adjunto, body.valora)
            .then((parte) => {
                if ((parte && parte.length === 0) || !parte) {

                    return res.status(400).json({
                        ok: false,
                        message: 'El actualizar estado del parte',
                    });
                }
                console.log(parte);

                return res.status(201).json({
                    ok: true,
                    payload: parte
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
    async getPartes(req, res) {
        const { nrocta, limit, pendingOnly } = req.params;
        let entity = await this._entityService.getPartes(nrocta, limit, pendingOnly)
            .then((partes) => {
                if ((partes && partes.length === 0) || !partes) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No se encontraron partes',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: partes
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
    async getPartesCount(req, res) {
        const { nrocta } = req.params;
        let entity = await this._entityService.getPartesCount(nrocta)
            .then((contadorDePartesPorEstado) => {
                if ((contadorDePartesPorEstado && contadorDePartesPorEstado.length === 0) || !contadorDePartesPorEstado) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No se encontraron partes',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: contadorDePartesPorEstado
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
    async getAccionesParte(req, res) {
        const { nrocta, codfor, nrofor } = req.params;
        let entity = await this._entityService.getAccionesParte(nrocta, codfor, nrofor)
            .then((accionesDeParte) => {
                if ((accionesDeParte && accionesDeParte.length === 0) || !accionesDeParte) {
                    return res.status(200).json({
                        ok: true,
                        payload: [],
                        message: 'No se encontraron acciones de partes',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: accionesDeParte
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
    async getEstadosDeParte(req, res) {
        const { nrocta } = req.params;
        var entity = await this._entityService.getEstadosDeParte(nrocta)
            .then((estadosDePartes) => {
                if ((estadosDePartes && estadosDePartes.length === 0) || !estadosDePartes) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No se encontraron estados para los partes',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: estadosDePartes
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
    async getHistoriaParte(req, res) {
        const { nrocta, codfor, nrofor } = req.params;
        let entity = await this._entityService.getHistoriaParte(nrocta, codfor, nrofor)
            .then((historiaDeParte) => {
                if ((historiaDeParte && historiaDeParte.length === 0) || !historiaDeParte) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No se encontro historia de partes',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: historiaDeParte
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
    async getPartesRelacionados(req, res) {
        let { nrocta, modulo, fechaDesde, fechaHasta, info, numero } = req.params;

        const entities = await this._entityService.getPartesRelacionados(nrocta, modulo, fechaDesde, fechaHasta, info, numero);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });

    }
    async getInformantesdePartes(req, res) {
        let { termino } = req.params;
        const entities = await this._entityService.getInformantesdePartes(termino);
        jsonMapper(entities, {
                'codigo': {
                    path: 'SPRMVH_CODFOR',
                },
                'descripcion': {
                    path: 'SPCCBH_DESCRP',
                }
            })
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    moverArchivos(path, file, filename, modfor, codfor, nrofor) {
        var pathNuevo = `${path}${filename}`;
        if (fs.existsSync(pathNuevo)) {
            let dia = new Date().getTime().toString();
            pathNuevo = pathNuevo + "_" + dia;
        }
        this.agregarArchivoOLEOLE(modfor, codfor, nrofor, pathNuevo);

        file.mv(pathNuevo, function(err, res) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al mover el archivo',
                    errors: err
                });
            }
        });
    }
    crearLog(texto) {
        try {
            let dia = new Date().toString();
            fs.appendFileSync('C:/Temp/log.txt', `${dia}: ${texto}\n`);
        } catch (err) {
            console.log(err);
        }
    }
    agregarArchivoOLEOLE(modfor, codfor, nrofor, file) {
        let entity = this._entityService.agregarArchivoOLEOLE(modfor, codfor, nrofor, file)
            .then((archivo) => {
                console.log(archivo);

                if (!archivo) {
                    return res.status(400).json({
                        ok: false,
                        message: 'El archivo no existe',
                    });
                }
                return {
                    ok: true,
                    payload: archivo
                };
            }).catch(
                error => {
                    if (error) {
                        console.log(error);
                        return {
                            ok: false,
                            mensaje: 'Error en la conexión con base de datos',
                            errors: error
                        };
                    }
                });

    }
    crearFolder(modfor, codfor, nrofor) {
        let folderName = this.crearFolderName(codfor, nrofor);
        var dirPath = `${rutaPN}/${folderName}/`;
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

module.exports = ParteController;