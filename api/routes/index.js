// const { Router } = require('express');
var express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const compression = require('compression');
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
    UsuarioRoutes,
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
    ParametroRoutes,
    CursoRoutes,
    EncuestaRoutes
}) {

    const router = express.Router();
    const apiRoute = express.Router();
    apiRoute
        .use(cors())
        .use(bodyParser.urlencoded({ extended: false }))
        .use(bodyParser.json())
        .use(compression());
    // apiRoute.get("/login/:uid/:pwd", (req, res) => {
    //     var { uid, pwd } = req.params;
    //     var options = {
    //         host: 'logic.softland.com.ar',
    //         port: '3030',
    //         path: '/login',
    //         headers: {
    //             'uid': uid,
    //             'pwd': pwd
    //         }
    //     };
    //     var request = http.get(options, function(response) {
    //         response.setEncoding('utf8');

    //         response.on('data', function(chunk) {
    //             let usuario = JSON.parse(chunk);
    //             token = usuario.token;
    //             return res.status(200).json({
    //                 ok: true,
    //                 token: usuario.token,
    //                 username: usuario.username,
    //                 empresa: {
    //                     name: usuario.empresa.name,
    //                     logo: usuario.empresa.logo
    //                 },
    //                 actions: usuario.actions,
    //                 lastLogin: usuario.lastLogin,
    //                 error: usuario.error
    //             });
    //         });
    //     });
    // });
    // apiRoute
    //     .use((req, res, next) => {
    //         console.log('token servidor: ', token);
    //         console.log('token cliente: ', req.headers.token);
    //         // if (token === req.headers.token || token === 'file') {
    //             next();
    //         }
    //     });
    apiRoute.use("/login", LoginRoutes);
    apiRoute.use("/votacion", VotacionRoutes);
    apiRoute.use("/estado", SptestRoutes);
    apiRoute.use("/parte", ParteRoutes);
    apiRoute.use("/modulo", ModuloRoutes);
    apiRoute.use("/objeto", ObjetoRoutes);
    apiRoute.use("/version", VersionRoutes);
    apiRoute.use("/usuario", UsuarioRoutes);
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
    router.use("/", apiRoute);
    return router;
};