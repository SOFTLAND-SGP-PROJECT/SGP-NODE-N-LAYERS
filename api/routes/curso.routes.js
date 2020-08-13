const { Router } = require("express");
const express = require("express");

var fileUpload = require('express-fileupload');
var app = express();
module.exports = function({ CursoController }) {
    const router = Router();

    // router.delete("/:codigo", PartePublicoController.deleteParte.bind(PartePublicoController));
    // router.post("/archivo/:codigo", app.use(fileUpload()), CursoController.postArchivos.bind(CursoController));
    router.post("/alta/:codigo", CursoController.postCurso.bind(CursoController));
    // router.put("/:codigo/:nrocta", CursoController.putRegistrar.bind(CursoController));
    router.post("/micurso/asistente/:codigo", CursoController.deleteAsistentePorCurso.bind(CursoController));
    router.get("/", CursoController.getCurso.bind(CursoController));
    router.get("/ultimo/", CursoController.getProximoCursos.bind(CursoController));
    router.get("/:codigo/:nrocta", CursoController.getInscriptoPorNrocta.bind(CursoController));
    router.get("/uncurso/porcodigo/:codigo/", CursoController.getCursoPorCodigo.bind(CursoController));
    router.get("/uncurso/porcodigo/inscripto/:codigo", CursoController.getCursosInscriptos.bind(CursoController));
    router.get("/miscursos/logros/:nrocta", CursoController.getLogros.bind(CursoController));
    router.get("/miscursos/cursospendientes/:nrocta", CursoController.getCursosPendientes.bind(CursoController));
    router.get("/miscursos/asistentes/:nrocta/:codpro", CursoController.getAsistentesPorCurso.bind(CursoController));


    // router.get("/termino/:tippub/:codigo", PartePublicoController.getAllWithTermino.bind(PartePublicoController));
    // router.get("/:tippub/:modulo/:objeto/:version/:termino/:offset/:limit", PartePublicoController.getAllWithSearchFilters.bind(PartePublicoController));
    // router.get("/all/:tippub", PartePublicoController.getAllWithTipo.bind(PartePublicoController));
    // router.get("/arreglo/:tippub/:terminos", PartePublicoController.getSomeWithFilters.bind(PartePublicoController));

    return router;
};