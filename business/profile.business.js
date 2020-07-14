class Profile {

    constructor({ SecurityService }) {
        this._entityService = SecurityService;
    }

    async getPerfiles() {
        return await this._entityService.getPerfiles();
    }
    async getPerfilNombre(nombre) {
        return await this._entityService.getPerfilNombre(nombre);
    }
    async getAsignadoMail(email) {
        return await this._entityService.getAsignadoMail(email);
    }
    async postPerfil(nombre, avatar, asignados, ruta) {
        let menu = this.crearMenu(ruta);
        await this._entityService.postPerfilAsignado(asignados, nombre);
        return await this._entityService.postPerfil(nombre, avatar, asignados, menu, ruta);
    }

    crearMenu(ruta) {
        var menu = [];
        let index = -1;
        if (ruta.length > 0) {
            for (let item of ruta) {
                switch (item) {
                    case 'Escritorio':
                        menu.push({
                            titulo: 'Escritorio',
                            icono: 'simple-line-icons icon-home',
                            url: '/escritorio'
                        });
                        break;
                    case 'Gestión de tickets':
                        menu.push({
                            titulo: 'Gestión de tickets',
                            icono: 'simple-line-icons icon-speedometer',
                            url: '/panel',
                        });
                        break;
                    case 'Licencias':
                        menu.push({
                            titulo: 'Licencias',
                            icono: 'simple-line-icons icon-key',
                            url: '/licencias'
                        });
                        break;
                    case 'Serguridad':
                        menu.push({
                            titulo: 'Serguridad',
                            icono: 'simple-line-icons icon-wrench',
                            url: '/seguridad'
                        });
                        break;
                    case 'Documentos':
                        menu.push({
                            titulo: 'Documentos',
                            icono: 'simple-line-icons icon-doc',
                            sideMenu: []
                        });
                        break;
                    case 'Crear':
                        index = menu.map(a => a.titulo).indexOf('Documentos');
                        menu[index].sideMenu.push({
                            titulo: 'Crear',
                            icono: 'fa fa-edit',
                            url: '/crear',
                        });
                        break;
                    case 'Borrar':
                        index = menu.map(a => a.titulo).indexOf('Documentos');
                        menu[index].sideMenu.push({
                            titulo: 'Borrar',
                            icono: 'fa fa-trash',
                            url: '/borrar'
                        });
                        break;
                    case 'Modificar':
                        index = menu.map(a => a.titulo).indexOf('Documentos');
                        menu[index].sideMenu.push({
                            titulo: 'Modificar',
                            icono: 'fa fa-refresh',
                            url: '/modificar'
                        });
                        break;
                    case 'Salir':
                        menu.push({
                            titulo: 'Salir',
                            icono: 'simple-line-icons icon-login',
                            url: '/salir'
                        });
                        break;
                    default:
                        null
                        break;

                }
            }
        }
        return menu;
    }

}
module.exports = Profile;