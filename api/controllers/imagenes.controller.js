const Controller = require("./controller");
const Models = require("../models");
const { rutaPP, rutaA } = require("../../config/config");
const path = require('path');
const fs = require('fs');

class ImagenesController extends Controller {

    constructor({ CursoService }) {
        super(Models.partepublico);
        this._entityService = CursoService;
    }

    async getImagenes(req, res) {
        const { tipo, parte, img, folder } = req.params;
        console.log(folder);
        var pathImagen = path.resolve('../PP-NODE-N-LAYERS', `upload/${tipo}/${parte}/${folder}/${img}`);
        console.log(pathImagen);


        if (folder === 'link') {
            if (fs.existsSync(pathImagen)) {
                await res.download(pathImagen, `${img}`);
            }
        } else {
            if (fs.existsSync(pathImagen)) {
                await res.sendFile(pathImagen);
            } else {
                var pathNoImagen = path.resolve(`${rutaA}`, 'no-image.png');
                await res.sendFile(pathNoImagen);
            }
        }

    }
    async getImagenesCursos(req, res) {
        const { codigo, tipo } = req.params;
        await this._entityService.getCursoPorCodigo(codigo)
            .then((data) => {
                if (data.length > 0) {
                    if (tipo === 'img') {
                        return res.sendFile(data[0].GPTDPH_BMPBMP);
                    } else if (tipo === 'link') {
                        return res.download(data[0].GPTDPH_OLEOLE);
                    }

                }
            });
    }


}
module.exports = ImagenesController;