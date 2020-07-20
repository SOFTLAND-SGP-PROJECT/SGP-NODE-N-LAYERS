const Controller = require("./controller");
const Models = require("../models");
const { rutaPP, rutaA } = require("../../config/config");
const path = require('path');
const fs = require('fs');

class ImagenesController extends Controller {

    constructor() {
        super(Models.partepublico);
    }

    async getImagenes(req, res) {
        const { tipo, parte, img, folder } = req.params;
        console.log(folder);
        var pathImagen = path.resolve('../QA-NODE-N-LAYERS', `upload/${tipo}/${parte}/${folder}/${img}`);
        console.log(pathImagen);


        if (folder === 'link') {
            if (fs.existsSync(pathImagen)) {
                await res.download(pathImagen, `${img}`);
            }
        } else {
            // var pathImagen = path.resolve('C:/SGPWEB/SGP-NODE-N-LAYERS/', `upload/${tipo}/${parte}/${folder}/${img}`);
            if (fs.existsSync(pathImagen)) {
                await res.sendFile(pathImagen);
            } else {
                var pathNoImagen = path.resolve('../PP-NODE-N-LAYERS', 'assets/no-image.png');
                await res.sendFile(pathNoImagen);
            }
        }

    }
    async getImagenesCursos(req, res) {
        const { tipo, img, codigo } = req.params;
        console.log(codigo);
        var pathImagen = path.resolve(`${rutaPP}`, `curso/${codigo}/${tipo}/${img}`);
        console.log(pathImagen);


        if (tipo === 'link') {
            if (fs.existsSync(pathImagen)) {
                await res.download(pathImagen, `${img}`);
            }
        } else {
            if (fs.existsSync(pathImagen)) {
                await res.sendFile(pathImagen);
            } else {
                console.log(rutaA);
                var pathNoImagen = path.resolve(`${rutaA}`, 'no-image.png');
                await res.sendFile(pathNoImagen);
            }
        }

    }


}
module.exports = ImagenesController;