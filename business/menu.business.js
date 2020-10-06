class Menu {

    constructor({ MenuService }) {
        this._entityService = MenuService;
    }

    async MenuJson() {
        return await this._entityService.RecuperacionMenuSGP('')
            .then(data => {
                if (data.length > 0) {
                    return this.transformJson(data);
                }
            });
    }
    async RecuperacionMenuSGP(codigo) {
        return await this._entityService.RecuperacionMenuSGP(codigo);
    }
    async CrearMenuSGP(item) {
        return await this._entityService.CrearMenuSGP(item);
    }
    async ActualizacionMenuSGP(item, codigo) {
        return await this._entityService.ActualizacionMenuSGP(item, codigo);
    }
    async BorrarObjetoMenuSGP(item) {
        return await this._entityService.BorrarObjetoMenuSGP(item);
    }
    transformJson(data) {
        let list = [];
        var nivelos = [];
        for (let item of data) {
            var CodigoNiveles = [];
            var nivelo = 0;
            var niveles = item.USR_SGPMEH_CODOBJ.length / 2;
            var codigo = item.USR_SGPMEH_CODOBJ;
            var j = 0;
            for (let i = 0; i < niveles; i++) {
                var nivel = codigo.substr(i + j, 2);
                if ((i + j) === 2) {
                    CodigoNiveles.push(nivel);
                }
                switch (i + j) {
                    case 0:
                        CodigoNiveles.push(nivel);
                        nivelo = 1;
                        break;
                    case 2:
                        if (nivel !== '00') {
                            CodigoNiveles.push(nivel);
                            nivelo = 2;
                        }
                        break;
                    case 4:
                        if (nivel !== '00') {
                            CodigoNiveles.push(nivel);
                            nivelo = 3;
                        } else {
                            CodigoNiveles.splice(1, 1);
                        }
                        break;
                    case 6:
                        if (nivel !== '00') {
                            CodigoNiveles.push(nivel);
                            nivelo = 4;
                        }
                        break;
                }
                j = 1 + i;
            }
            nivelos.push(nivelo);
            list.push(CodigoNiveles);
        }
        return this.construirArbol(list, nivelos, data);
    }
    construirArbol(listas, nivelos, data) {
        var i = 0;
        var listado = [];
        let it;
        var j = 0;
        for (let item of data) {
            var nivel = nivelos[i];
            if (listado.length > 0) {
                var position = this.buscarPosicionEnListado(listas[j][0], listado);
                if (position === -1) {
                    listado.push({
                        id: listas[j][0],
                        expanded: false,
                        descrp: item.USR_SGPMEH_DESCRP,
                        icon: item.USR_SGPMEH_SLICON,
                        url: item.USR_SGPMEH_URLURL,
                        codigo: item.USR_SGPMEH_CODOBJ,
                        nivelo: nivel,
                        usoint: item.USOINT,
                        children: []
                    });
                }
                if (nivel === 2) { // submenu
                    let pos = listado.length - 1; // al final
                    if (position > -1) {
                        pos = position;
                    }
                    listado[pos].children.push({
                        id: listas[j][1],
                        expanded: false,
                        descrp: item.USR_SGPMEH_DESCRP,
                        icon: item.USR_SGPMEH_SLICON,
                        url: item.USR_SGPMEH_URLURL,
                        codigo: item.USR_SGPMEH_CODOBJ,
                        nivelo: nivel,
                        usoint: item.USOINT,
                        children: []
                    });
                }
                if (nivel === 3) {
                    let pos = listado.length - 1; // al final
                    if (position > -1) {
                        pos = position;
                    }
                    let listaNivel2 = listado[pos].children;
                    if (listaNivel2.length === 0) {
                        listaNivel2.push({
                            id: listas[j][i - 2],
                            expanded: false,
                            codigo: item.USR_SGPMEH_CODOBJ,
                            nivelo: nivel,
                            usoint: item.USOINT,
                            children: []
                        });
                    }
                    let pos2 = this.buscarPosicionEnListado(listas[j][1], listado[pos].children);
                    listaNivel2[pos2].children.push({
                        id: listas[j][2],
                        expanded: false,
                        descrp: item.USR_SGPMEH_DESCRP,
                        icon: item.USR_SGPMEH_SLICON,
                        url: item.USR_SGPMEH_URLURL,
                        codigo: item.USR_SGPMEH_CODOBJ,
                        nivelo: nivel,
                        usoint: item.USOINT,
                        children: []
                    });
                }
            } else {
                listado.push({
                    id: listas[j][0],
                    expanded: false,
                    descrp: item.USR_SGPMEH_DESCRP,
                    icon: item.USR_SGPMEH_SLICON,
                    url: item.USR_SGPMEH_URLURL,
                    codigo: item.USR_SGPMEH_CODOBJ,
                    nivelo: nivel,
                    usoint: item.USOINT,
                    children: []
                });
            }
            j++;
            i++;
        }
        return listado;
    }
    buscarPosicionEnListado(valor, listado) {
        let posicion = -1;
        for (let item of listado) {
            posicion++;
            if (item.id === valor) {
                return posicion;
            }
        }
        return -1;
    }


}
module.exports = Menu;