const path = require('path');
const fs = require('fs');
var http = require('http');

class LoginController {

    constructor() {}

    async login(req, res) {
        var { uid, pwd } = req.params;
        var options = {
            host: 'logic.softland.com.ar',
            port: '3030',
            path: '/login',
            headers: {
                'uid': uid,
                'pwd': pwd
            }
        };
        var request = http.get(options, function(response) {
            response.setEncoding('utf8');

            response.on('data', function(chunk) {
                let usuario = JSON.parse(chunk);
                if (usuario.empresa) {
                    return res.status(200).json({
                        ok: true,
                        token: usuario.token,
                        username: usuario.username,
                        empresa: {
                            name: usuario.empresa.name,
                            logo: usuario.empresa.logo
                        },
                        actions: usuario.actions,
                        lastLogin: usuario.lastLogin,
                        error: usuario.error
                    });
                } else {
                    return res.status(200).json({
                        ok: true,
                        error: usuario
                    });
                }
            });
        });
    }


}

module.exports = LoginController;