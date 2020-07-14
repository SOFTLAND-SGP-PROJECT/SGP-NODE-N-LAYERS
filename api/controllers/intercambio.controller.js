const path = require('path');
const fs = require('fs');
const { rutaZI } = require('../../config/config');
class PartePublicoController {

    constructor() {}

    async postArchivos(req, res) {
        var { username, newfolder } = req.params;
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

        if (req.files.filelist.length > 0) {
            console.log('5: multiple');

            for (let file of req.files.filelist) {
                this.moverArchivos(path, file, file.name);
            }
        } else {
            console.log('5: single');
            this.moverArchivos(path, req.files.filelist, req.files.filelist.name);
        }

        return res.status(200).json({
            ok: true,
            payload: 'Peticion realizada correctamente'
        });
    }
    async deleteArchivo(req, res) {
        var rutas = req.body;
        if (rutas.length > 0) {
            for (let file of rutas) {
                try {
                    fs.unlinkSync(file);
                } catch (err) {
                    console.error(err);
                }

            }
        }
        return res.status(200).json({
            ok: true,
            payload: 'Peticion realizada correctamente'
        });

    }
    descargarArchivos(req, res) {
        const { ruta } = req.params;
        let link = ruta.split('&').join('/');
        const newLink = ruta.split('&');
        const filename = newLink.pop();
        console.log(`//Apollo/Global/Sistema de Gestion/uploads/${link}`);
        console.log(filename);

        res.download(`//Apollo/Global/Sistema de Gestion/uploads/${link}`, filename, function(err, res) {
            if (err) {
                console.log(err);
            }
        });

    }

    //Funciones auxiliares
    moverArchivos(path, file, filename) {
        var pathNuevo = `${path}/${filename}`;
        console.log('6: ', pathNuevo);

        if (fs.existsSync(pathNuevo)) {
            let dia = new Date().getTime().toString();
            let arr = pathNuevo.split(".");
            pathNuevo = arr[0] + "_" + dia + "." + arr[1];
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
    crearFolder(username) {
        var dirPath;
        dirPath = `${rutaZI}/${username}/intercambio`;

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

module.exports = PartePublicoController;