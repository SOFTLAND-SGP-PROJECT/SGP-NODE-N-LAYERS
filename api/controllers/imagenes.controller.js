const Controller = require("./controller");
const Models = require("../models");
const { rutaPP, rutaA } = require("../../config/config");
var md5 = require('md5');

const path = require('path');
const fs = require('fs');

class ImagenesController extends Controller {

    constructor({ CursoService, Login }) {
        super(Models.partepublico);
        this._entityService = CursoService;
        this._entityBussines = Login;
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
                    } else if (tipo === 'imgweb') {
                        console.log(data[0].USR_GPTDPH_BMPWEB);
                        if (data[0].USR_GPTDPH_BMPWEB) {
                            return res.sendFile(data[0].USR_GPTDPH_BMPWEB);
                        } else {
                            var pathNoImagen = path.resolve(`${rutaA}`, 'no-image.png');
                            return res.sendFile(pathNoImagen);
                        }

                    }

                }
            });
    }
    async getImagenesPerfil(req, res) {
        const { nrocta, sgpuid, tipo } = req.params;
        const usuario = {
            SGPUID: sgpuid,
            NROCTA: nrocta
        }
        await this._entityBussines.RecuperacionUsuarioSGP(usuario)
            .then(data => {
                console.log(data);
                if (data.length > 0) {
                    if (tipo === 'imagenPerfil') {
                        console.log(data);
                        console.log(md5(sgpuid));
                        var perfil = md5(sgpuid);
                        const imagenRecuperada = data[0].USR_SGPCLU_SGPIMG;
                        console.log(imagenRecuperada);
                        if (imagenRecuperada) {
                            let img = (imagenRecuperada).split(".");

                            var pathImagen = path.resolve('//apollo/Global/Sistema de Gestion/uploads/', `${nrocta}/perfiles/${perfil}.${img[1]}`);
                            res.sendFile(pathImagen);
                        } else {
                            var pathNoImagen = path.resolve(`${rutaA}`, 'avatar1.png');
                            return res.sendFile(pathNoImagen);
                        }
                    } else {

                        const imagenRecuperada = data[0].USR_SGPCLH_SGPIMG;
                        if (imagenRecuperada) {
                            let emp = (imagenRecuperada).split(".");
                            var logo = md5(nrocta);
                            var pathImagen = path.resolve('//apollo/Global/Sistema de Gestion/uploads/', `${nrocta}/logos/${logo}.${emp[1]}`);
                            res.sendFile(pathImagen);
                        } else {
                            var pathNoImagen = path.resolve(`${rutaA}`, 'avatar1.png');
                            return res.sendFile(pathNoImagen);
                        }
                    }

                }
            });
    }


}
module.exports = ImagenesController;