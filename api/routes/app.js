const { Router } = require("express");

module.exports = function({  }) {
  const router = Router();

  router.get('/',(req, res, next)=> {
    return res.status(200).json({
      ok:true,
      message:"Hola Amigos de Dar"
    });

    return router;
  });
}

  // let modulos = db['HBTMOD']
  //     .findAll({
  //       offset: 5,
  //       limit: 5,
  //       where: {
  //         HBTMOD_TIPMOD : 'M',
  //       }
  //     })
  //     .then((modulo) => {
  //       res.status(200).json({
  //         ok: true,
  //         modulos: modulo
  //       });
  //     });
