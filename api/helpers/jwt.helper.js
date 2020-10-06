const jwt = require('jsonwebtoken');


const generarJWT = (uid, time) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid: uid
        };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: time
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        });
    });
};

module.exports = {
    generarJWT
};
expiresIn: '5 min'