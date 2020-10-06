// const { Router } = require('express');
var express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require("cors");
const compression = require('compression');
const { check } = require('express-validator');
const { checkingFields } = require('../middlewares/fields.valid');
const { validJWT } = require('../middlewares/token.valid');
var http = require('http');
// const { Token } = require('./../controllers/login.controller');
let token;
//Importar rutas
var appRoutes = require('./app');

module.exports = function({
    ModuloRoutes,
    ParteRoutes,
    SptestRoutes,
    ObjetoRoutes,
    ContactoRoutes,
    VersionRoutes,
    PartePublicoRoutes,
    ClienteRoutes,
    HabilitacionRoutes,
    NovedadRoutes,
    DocumentoRoutes,
    OcurrenciaRoutes,
    ImpactoRoutes,
    ImagenesRoutes,
    IntercambioRoutes,
    VotacionRoutes,
    SecurityRoutes,
    ImagenPerfilRoutes,
    LoginRoutes,
    LoginNewRoutes,
    ParametroRoutes,
    CursoRoutes,
    EncuestaRoutes,
    EmailEditorRoutes,
    JobRoutes,
    MenuRoutes
}) {
    const router = express.Router();
    const apiRoute = express.Router();

    apiRoute
        .use(cors())
        .use(bodyParser.urlencoded({ extended: false }))
        .use(bodyParser.json())
        .use(compression());
    apiRoute.use("/login", LoginRoutes);
    apiRoute.use("/login-new", [
        check('SGPUID', 'El usuario no puede ser vacio').not().isEmpty(),
        check('SGPPWD', 'El password no puede ser vacio').not().isEmpty(),
        checkingFields
    ], LoginNewRoutes);
    apiRoute.use("/usuarioSGP", LoginNewRoutes);
    apiRoute.use("/votacion", VotacionRoutes);
    apiRoute.use("/estado", SptestRoutes);
    apiRoute.use("/parte", ParteRoutes);
    apiRoute.use("/modulo", ModuloRoutes);
    apiRoute.use("/objeto", ObjetoRoutes);
    apiRoute.use("/version", VersionRoutes);
    apiRoute.use("/usuario", ClienteRoutes);
    apiRoute.use("/contacto", ContactoRoutes);
    apiRoute.use("/novedad", NovedadRoutes);
    apiRoute.use("/habilitacion", HabilitacionRoutes);
    apiRoute.use("/documento", DocumentoRoutes);
    apiRoute.use("/partepublico", PartePublicoRoutes);
    apiRoute.use("/impacto", ImpactoRoutes);
    apiRoute.use("/ocurrencia", OcurrenciaRoutes);
    apiRoute.use("/upload", PartePublicoRoutes);
    apiRoute.use("/intercambio", IntercambioRoutes);
    apiRoute.use("/img", ImagenesRoutes);
    apiRoute.use("/security", SecurityRoutes);
    apiRoute.use("/perfil", ImagenPerfilRoutes);
    apiRoute.use("/parametro", ParametroRoutes);
    apiRoute.use("/curso", CursoRoutes);
    apiRoute.use("/encuesta", EncuestaRoutes);
    apiRoute.use("/emailEditor", EmailEditorRoutes);
    apiRoute.use("/job", JobRoutes);
    apiRoute.use("/menu", MenuRoutes);
    router.use("/", apiRoute);
    return router;
};