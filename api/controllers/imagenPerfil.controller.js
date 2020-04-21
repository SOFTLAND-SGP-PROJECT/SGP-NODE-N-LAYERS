const Controller = require("./controller");
const Models = require("../models");
const { rutaImagenPerfil } = require('../../config/config');
const path = require('path');
const fs = require('fs');

class ImagenPerfilController extends Controller {

    constructor() {
        super(Models.partepublico);
    }

    getImagenes(req, res) {
        const { nrocta } = req.params;

        var pathImagen = `${rutaImagenPerfil}${nrocta}/`;
        console.log(pathImagen);

        fs.readdir(pathImagen, function(err, files) {
            console.log(err);
            //handling error
            if (err) {
                res.sendFile('');
                console.log(err);

            }
            console.log(files);
            res.sendFile(pathImagen + '/' + files[0]);
        });

    }
    async postArchivos(req, res) {
        var { nrocta } = req.params;
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
        let path = this.crearFolder(nrocta);
        // if (Array.isArray(req.files.filelist)) {
        //     for (let file of req.files.filelist) {
        //         this.moverArchivos(path, file, file.name);
        //     }
        // } else {
        //     
        console.log(req.files);
        var arrFilename = req.files[''].name.split('.');
        var newFilename = `${nrocta}.${arrFilename[1]}`;
        this.moverArchivos(path, req.files[''], newFilename, nrocta);
        // this.moverArchivos(path, req.files.filelist, req.files.filelist.name, nrocta);
        return res.status(200).json({
            ok: true,
            payload: `${path}${newFilename}`
        });
        // }

    }
    moverArchivos(path, file, filename, nrocta) {


        var pathNuevo = `${path}${filename}`;
        if (fs.existsSync(pathNuevo)) {
            fs.unlinkSync(pathNuevo);
        }

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
    crearFolder(nrocta) {
        var dirPath = `${rutaImagenPerfil}${nrocta}/`;
        if (!fs.existsSync(dirPath)) {
            try {
                fs.mkdirSync(dirPath);
            } catch (e) {
                console.log("Error: " + dirPath);
            }
        }
        return dirPath;
    }

}
module.exports = ImagenPerfilController;