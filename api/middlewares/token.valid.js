const { response } = require('express');
const jwt = require('jsonwebtoken');

const validJWT = (req, res = response, next) => {

    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            payload: 'Token no enviado'
        });
    }
    try {
        const { uid, email } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        req.email = email;
        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            payload: 'El token enviado es incorrecto'
        });
    }
};
module.exports = {
    validJWT
};