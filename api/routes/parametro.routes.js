const { Router } = require("express");

module.exports = function({ ParametroController }) {
    const router = Router();
    router.get("/:tipo", ParametroController.getNumeroPartePublico.bind(ParametroController));
    router.post("/:tipo/:codfor/:numero", ParametroController.postNumeroPartePublico.bind(ParametroController));
    router.put("/:tipo/:numero/:codfor", ParametroController.putNumeroPartePublico.bind(ParametroController));
    return router;
};