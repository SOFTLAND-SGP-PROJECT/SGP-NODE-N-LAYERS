const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");
const { rutaZI } = require('../../config/config');
const fs = require('fs');
var md5 = require('md5');

class ContactoController extends Controller {

    constructor({ ContactoService }) {
        super(ContactoService, Models);
        this._entityMap = Models.contacto;
        this._entityService = ContactoService;
    }
    async getAllWithTwoParams(req, res) {
        const { nrocta } = req.params;
        const { termino } = req.params;
        const entities = await this._entityService.getAllWithTwoParams(nrocta, termino);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getAllWithOneParams(req, res) {
        const { nrocta } = req.params;
        const entities = await this._entityService.getAllWithOneParams(nrocta);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async postCrearContacto(req, res) {
        const { nrocta } = req.params;
        const contacto = req.body;
        console.log(contacto);
        await this._entityService.postCrearContacto(nrocta, contacto.nombre, contacto.apelli, contacto.tipsex, contacto.direml, contacto.celula, contacto.enviis, contacto.envife, contacto.conabo, contacto.maihab, contacto.encues)
            .then(data => {
                return res.status(200).json({
                    ok: true,
                    payload: data
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
    async putActualizarContacto(req, res) {
        const { nrocta } = req.params;
        const contacto = req.body;
        console.log(contacto);
        await this._entityService.putActualizarContacto(nrocta, contacto.codcon, contacto.mail, contacto.celula, contacto.enviis, contacto.envife, contacto.conabo, contacto.maihab)
            .then(data => {
                return res.status(200).json({
                    ok: true,
                    payload: data
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
    async deleteEliminarContacto(req, res) {
        const { nrocta } = req.params;
        const contacto = req.body;
        console.log(contacto);
        await this._entityService.deleteEliminarContacto(nrocta, contacto.codcon)
            .then(data => {
                return res.status(200).json({
                    ok: true,
                    payload: data
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

    //Archivos
    async postArchivos(req, res) {
        var { username, newfolder, sgpuid, tipo, type } = req.params;
        console.log('1: ', username, newfolder);

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

        let path = this.crearFolder(username, newfolder);
        console.log('4: ', path);
        console.log(req.files);
        console.log('5: single');

        if (tipo == 'imagenPerfil') {
            this.moverArchivos(path, req.files.filelist, `${md5(sgpuid)}.${type}`);
        } else {
            this.moverArchivos(path, req.files.filelist, `${md5(username)}.${type}`);
        }

        return res.status(200).json({
            ok: true,
            payload: 'Peticion realizada correctamente'
        });
    }
    moverArchivos(path, file, filename) {
        var pathNuevo = `${path}/${filename}`;
        console.log('6: ', pathNuevo);

        if (fs.existsSync(pathNuevo)) {
            fs.unlinkSync(pathNuevo)
                // let dia = new Date().getTime().toString();
                // let arr = pathNuevo.split(".");
                // pathNuevo = arr[0] + "_" + dia + "." + arr[1];
        }

        console.log('7: ', pathNuevo);
        file.mv(pathNuevo, function(err, res) {
            if (err) {
                console.log('8: ', err);
                if (!res) return;
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al mover el archivo',
                    errors: err
                });
            }
        });
    }
    crearFolder(username, newfolder) {
        var dirPath;
        dirPath = `${rutaZI}/${username}/${newfolder}`;

        if (!fs.existsSync(dirPath)) {
            try {
                console.log('2: ', dirPath);
                fs.mkdirSync(dirPath, { recursive: true });
            } catch (e) {
                console.log('3: error', dirPath);
                console.log("ruta: " + dirPath);
                console.log("Error: " + e);
            }
        }
        return dirPath;
    }
}

module.exports = ContactoController;