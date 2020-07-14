const Controller = require("./controller");
const Models = require("../models");

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
<<<<<<< HEAD
        console.log(pathImagen);

=======
>>>>>>> Agregaron Link en la carga de parte publicos

        if (folder === 'link') {
            if (fs.existsSync(pathImagen)) {
                await res.download(pathImagen, `${img}`);
            }
        } else {
            // var pathImagen = path.resolve('C:/SGPWEB/SGP-NODE-N-LAYERS/', `upload/${tipo}/${parte}/${folder}/${img}`);
            if (fs.existsSync(pathImagen)) {
                await res.sendFile(pathImagen);
            } else {
<<<<<<< HEAD
                var pathNoImagen = path.resolve('../PP-NODE-N-LAYERS', 'assets/no-image.png');
=======
                var pathNoImagen = path.resolve('../QA-NODE-N-LAYERS', 'assets/no-image.png');
>>>>>>> Agregaron Link en la carga de parte publicos
                await res.sendFile(pathNoImagen);
            }
        }

    }


}
module.exports = ImagenesController;