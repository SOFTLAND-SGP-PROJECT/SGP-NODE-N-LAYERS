const Controller = require("./controller");
const Models = require("../models");

const path = require('path');
const fs = require('fs');

class ImagenesController extends Controller {

    constructor() {
        super(Models.partepublico);
    }

    async getImagenes(req, res) {
        const { tipo, parte, img } = req.params;
        console.log(tipo, parte, img);
        
        var pathImagen = path.resolve('C:/SGPWEB/SGP-NODE-N-LAYERS/', `upload/${tipo}/${parte}/${img}`);
        if (fs.existsSync(pathImagen)) {
            await res.sendFile(pathImagen);
        } else {
            var pathNoImagen = path.resolve('C:/SGPWEB/SGP-NODE-N-LAYERS/', 'assets/no-image.png');
            await res.sendFile(pathNoImagen);
        }
    }

}
module.exports = ImagenesController;