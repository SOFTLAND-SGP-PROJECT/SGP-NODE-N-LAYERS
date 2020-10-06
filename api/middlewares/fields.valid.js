const { response } = require('express')
const { validationResult } = require('express-validator')
const checkingFields = (req, res = response, next) => {

    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(404).json({
            ok: false,
            payload: errores.mapped()
        });
    }
    next();


}
module.exports = {
    checkingFields
}