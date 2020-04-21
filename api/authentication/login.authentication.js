var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var SEED = require('../Config/config').SEED;
var app = express();

app.listen(5000, () => {
    console.log(`Escuchando el puerto ${5000}: \x1b[32m%s\x1b[0m`, 'online');
});

app.post('/login', (req, res) => {
    var { uid, pwd } = req.params

    var options = {
        host: 'localhost',
        port: 5000,
        path: '/login',
        method: 'GET',
        headers: {
            'uid': uid,
            'pwd': pwd
        }
    };
    var request = http.request(options, (err, res) => {
        res.setEncoding('utf-8');



    });
});
module.exports = app;