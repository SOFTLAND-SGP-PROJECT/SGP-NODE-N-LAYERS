const express = require("express");
var http = require('http');
var debug = require('debug')('Server:server');
const socketIO = require('socket.io');
const path = require('path');
const fs = require('fs');
const { rutaZI } = require('../config/config');
class Server {

    constructor({ router }) {
        this._express = express();
        this._express.use(router);
        this._server = http.createServer(this._express);
    }

    start() {
        return new Promise((resolve, reject) => {
            var port = this.normalizePort(process.env.PORT || '3000');
            this._express.set('port', port);
            var io = socketIO(this._server);
            var dirPath = `${rutaZI}/`;
            io.on('connection', (socket) => {
                let folderFile = [];
                socket.on('usuario', (data) => {
                    let dir = `${dirPath}${data}/intercambio`;
                    if (fs.existsSync(`${dir}`)) {
                        console.log(dir);
                        var files = fs.readdirSync(`${dir}`);
                        console.log(files);
                        if (files.length > 1) {
                            folderFile = [];
                            folderFile = this.getFiles(`${dir}`, folderFile);
                            socket.emit('new-tree', folderFile.map(data => data.replace("intercambio", "Mis documentos")));
                        } else {
                            socket.emit('new-tree', []);
                        }
                    } else {
                        fs.mkdirSync(`${dirPath}${data}/intercambio`);
                        socket.emit('new-tree', []);
                    }
                });
            });
            this._server.listen(port);
            this._server.on('error', (error) => {
                if (error.syscall !== 'listen') {
                    throw error;
                }
                var bind = typeof port === 'string' ?
                    'Pipe ' + port :
                    'Port ' + port;

                // handle specific listen errors with friendly messages
                switch (error.code) {
                    case 'EACCES':
                        console.error(bind + ' requires elevated privileges');
                        process.exit(1);
                        break;
                    case 'EADDRINUSE':
                        console.error(bind + ' is already in use');
                        process.exit(1);
                        break;
                    default:
                        throw error;
                }
            });
            this._server.on('listening', () => {
                var addr = this._server.address();
                var bind = typeof addr === 'string' ? 'pipe ' + addr :
                    'port ' + addr.port;
                debug('Listening on ' + bind);
                console.log('Listening on ' + bind);

            });
        });
    }
    normalizePort(val) {
        var port = parseInt(val, 10);
        if (isNaN(port)) {
            return val;
        }
        if (port >= 0) {
            return port;
        }
        return false;
    }
    getFiles(dir, files_) {
        files_ = files_ || [];
        var files = fs.readdirSync(dir);
        for (var i in files) {
            var name = dir + '/' + files[i];
            if (fs.statSync(name).isDirectory()) {
                this.getFiles(name, files_);
            } else {
                files_.push(name);
            }
        }
        return files_;
    }

}

module.exports = Server;