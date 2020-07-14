const { Router } = require("express");
const express = require("express");

var fileUpload = require('express-fileupload');
var app = express();
module.exports = function({ PartePublicoController }) {
    const router = Router();

    router.delete("/:codigo", PartePublicoController.deleteParte.bind(PartePublicoController));
    router.post("/:tipo/:id/:usuario", app.use(fileUpload()), PartePublicoController.postArchivos.bind(PartePublicoController));
    router.post("/:tipo/:usuario", PartePublicoController.postParte.bind(PartePublicoController));
    router.put("/", PartePublicoController.putParte.bind(PartePublicoController));
    router.get("/codigo/:tippub/:codigo", PartePublicoController.get.bind(PartePublicoController));
    router.get("/termino/:tippub/:codigo", PartePublicoController.getAllWithTermino.bind(PartePublicoController));
    router.get("/:tippub/:modulo/:objeto/:version/:termino/:offset/:limit", PartePublicoController.getAllWithSearchFilters.bind(PartePublicoController));
    router.get("/all/:tippub", PartePublicoController.getAllWithTipo.bind(PartePublicoController));
    router.get("/arreglo/:tippub/:terminos", PartePublicoController.getSomeWithFilters.bind(PartePublicoController));

    return router;
};