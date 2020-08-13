// const Controller = require("./controller");
// const Models = require("../models");
const path = require('path');
const { rutaPP } = require('../../config/config');
const fs = require('fs');
const { log } = require('console');

class CursosController {

    constructor({ CursoService, LogService }) {
        this._entityService = CursoService;
        this._logService = LogService;
    }

    // Method http GET
    async getCurso(req, res) {
        var entities = await this._entityService.getCursos()
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getInscriptoPorNrocta(req, res) {
        var { codigo, nrocta } = req.params;
        var entities = await this._entityService.getInscriptoPorNrocta(codigo, nrocta)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getProximoCursos(req, res) {
        await this._entityService.getProximoCursos()
            .then((data) => {
                console.log(data);
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async getCursoPorCodigo(req, res) {
        const { codigo } = req.params;
        await this._entityService.getCursoPorCodigo(codigo)
            .then((data) => {
                console.log('entro');
                console.log(data);
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async getCursosInscriptos(req, res) {
        var { codigo } = req.params;
        await this._entityService.getCursosInscriptos(codigo)
            .then((data) => {
                console.log('entro');
                console.log(data);
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async getLogros(req, res) {
        var { nrocta } = req.params;
        await this._entityService.getLogros(nrocta)
            .then(data => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async getCursosPendientes(req, res) {
        var { nrocta } = req.params;
        await this._entityService.getCursosPendientes(nrocta)
            .then(data => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async getAsistentesPorCurso(req, res) {
        var { codpro, nrocta } = req.params;
        await this._entityService.getAsistentesPorCurso(codpro, nrocta)
            .then(data => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }

    // Method http POST
    async postCurso(req, res) {
            var asistente = req.body;
            const { codigo } = req.params;
            await this._entityService.postCurso(codigo, asistente)
                .then(data => {
                    return res.status(201).json({
                        ok: true,
                        payload: `Curso ${codigo} fue cargado con Exito`
                    });
                })
                .catch(error => {
                    this._logService.postLog('C', 'Alta de curso', error, 'error de conexión', 'admin');
                    console.log(error);
                    return res.status(500).json({
                        ok: false,
                        payload: error
                    });
                });
        }
        // async postArchivos(req, res) {
        //     var { codigo } = req.params;
        //     if (!req.files || Object.keys(req.files).length === 0) {
        //         return res.status(400).json({
        //             ok: false,
        //             mensaje: 'No selecciono nada',
        //             errors: { message: 'Debe de seleccionar un archivo' }
        //         });
        //     }
        //     var path = this.crearFolder(codigo);
        //     for (let key of Object.keys(req.files)) {
        //         console.log(key);
        //         if (key.includes('imagen')) {
        //             path = this.crearFolder(codigo + '/imagen/');
        //             this.moverArchivos(req.files[key], req.files[key].name, path);
        //         }
        //         if (key.includes('link')) {
        //             var path = this.crearFolder(codigo + '/link/');
        //             this.moverArchivos(req.files[key], req.files[key].name, path);
        //         }
        //     }
        //     return res.status(200).json({
        //         ok: true,
        //         payload: 'Peticion realizada correctamente'
        //     });
        // }

    // Method http DELETE 
    async deleteAsistentePorCurso(req, res) {
        var { codigo } = req.params;
        const asistente = req.body;
        console.log(codigo);
        console.log(asistente);

        await this._entityService.deleteAsistentePorCurso(codigo, asistente)
            .then(data => {
                return res.status(201).json({
                    ok: true,
                    payload: `el ${codigo} fue borrado con Exito`
                });
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }

    // Method http PUT 
    async putRegistrar(req, res) {
        var contacto = req.body;
        var { codigo, nrocta } = req.params;
        console.log(nrocta);

        console.log(contacto);
        await this._entityService.putRegistrar(codigo, contacto.descrip, contacto.email, nrocta, contacto.fecha)
            .then(data => {
                return res.status(201).json({
                    ok: true,
                    payload: `el ${contacto.descrip} fue cargado con Exito`
                });
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }

    //Funciones auxiliares
    crearFolder(folderName) {
        var dirPath = `${rutaPP}/curso/${folderName}`;
        if (!fs.existsSync(dirPath)) {
            try {
                fs.mkdirSync(dirPath);
            } catch (e) {
                // this._logService.postLog(tipo, 'Subida de archivos publico', dirPath, 'error creando carpeta', usuario);
                console.log("Error: " + dirPath);
            }
        }
        return dirPath;
    }
    moverArchivos(file, filename, folder) {
        var path = `${folder}${filename}`;
        file.mv(path, function(err, res) {
            if (err) {
                // this._logService.postLog(tipo, 'Subida de archivos publico', err, 'error moviendo archivo', usuario);
                return res;
            }
            if (res) {
                return res;
            }
        });
    }
}
module.exports = CursosController;