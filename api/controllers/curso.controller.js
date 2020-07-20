// const Controller = require("./controller");
// const Models = require("../models");
const path = require('path');
const { rutaPP } = require('../../config/config');
const fs = require('fs');

class CursosController {

    constructor({ CursoService, LogService }) {
        this._entityService = CursoService;
        this._logService = LogService;
    }

    async getCurso(req, res) {
        // const { tippub, codigo } = req.params;

        const entities = await this._entityService.getCursos()
            // jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getInscriptoPorNrocta(req, res) {
        const { codigo, nrocta } = req.params;
        const entities = await this._entityService.getInscriptoPorNrocta(codigo, nrocta)
            // jsonMapper(entities, this._entityMap)
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

    async postCurso(req, res) {
        var curso = req.body;
        const { codigo } = req.params;
        await this._entityService.postCurso(codigo, curso)
            .then(data => {
                console.log(data);
                // if ((data && data.length === 0) || !data) {
                //     // console.log('El curso no se pudo cargar');
                //     this._logService.postLog('C', 'Alta de curso', 'El curso no se pudo cargar', 'error de curso', 'admin');
                //     return res.status(400).json({
                //         ok: false,
                //         message: 'El curso no se pudo cargar',
                //     });
                // }
                return res.status(201).json({
                    ok: true,
                    payload: `Curso ${codigo} fue cargado con Exito`
                });
            })
            .catch(error => {
                this._logService.postLog('C', 'Alta de curso', error, 'error de conexión', 'admin');
                // console.log(error);
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async deleteRegistro(req, res) {
        const { codigo, nrocta, email } = req.params;
        console.log(codigo, nrocta, email);

        await this._entityService.deleteRegistro(codigo, nrocta, email)
            .then(data => {
                return res.status(201).json({
                    ok: true,
                    payload: `el ${email} fue borrado con Exito`
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

    async putRegistrar(req, res) {
        var contacto = req.body;
        const { codigo, nrocta } = req.params;
        console.log(nrocta);

        console.log(contacto);
        await this._entityService.putRegistrar(codigo, contacto.descrip, contacto.email, nrocta)
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
    async postArchivos(req, res) {
        var { codigo } = req.params;
        if (!req.files || Object.keys(req.files).length === 0) {
            // this._logService.postLog(tipo, 'Subida de archivos publico', 'No selecciono ningun archivo', 'sin archivo', usuario);
            return res.status(400).json({
                ok: false,
                mensaje: 'No selecciono nada',
                errors: { message: 'Debe de seleccionar un archivo' }
            });
        }
        var path = this.crearFolder(codigo);

        for (let key of Object.keys(req.files)) {
            console.log(key);
            if (key.includes('imagen')) {
                path = this.crearFolder(codigo + '/imagen/');
                this.moverArchivos(req.files[key], req.files[key].name, path);
            }
            if (key.includes('link')) {
                var path = this.crearFolder(codigo + '/link/');
                this.moverArchivos(req.files[key], req.files[key].name, path);
            }
        }

        return res.status(200).json({
            ok: true,
            payload: 'Peticion realizada correctamente'
        });
    }
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

    //Funciones auxiliares
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