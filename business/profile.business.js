class Profile {

    constructor({ ProfileService }) {
        this._entityService = ProfileService;
    }
    async getPerfiles(nrocta) {
        return await this._entityService.RecuperacionPerfilSGP(nrocta)
            .then(async perfil => {
                let perfiles = perfil.map(p => {
                    return {
                        codigo: p.USR_SGPPEH_CODIGO,
                        nombre: p.USR_SGPPEH_DESCRP,
                        avatar: p.USR_SGPPEH_AVATAR,
                        asignados: [],
                        menu: [],
                        guard: [],
                        username: p.USR_SGPPEH_NROCTA
                    };
                });
                return await this._entityService.RecuperacionPerfilAsignadoUsuarioSGP(nrocta, '')
                    .then(async asignados => {
                        for (let p of perfiles) {
                            let asignadoPorEmpresa = asignados;
                            await this._entityService.RecuperacionObjetoPerfilSGP(p.codigo)
                                .then(a => {
                                    let menu = a;
                                    p.menu = menu.map(obj => {
                                        return {
                                            codobj: obj.USR_SGPMEH_CODOBJ
                                        };
                                    });
                                    p.guard = a.filter(ob => ob.USR_SGPMEH_URLURL !== "no")
                                        .map(o => { return { ruta: o.USR_SGPMEH_URLURL, codobj: o.USR_SGPPEI_CODOBJ } });
                                    p.asignados = asignadoPorEmpresa.filter(asp =>
                                        asp.USR_SGPCLP_PERFIL === p.codigo
                                    ).map(a => {
                                        return {
                                            codigo: "",
                                            contacto: a.USR_SGPCLU_CODCON,
                                            email: a.USR_SGPCLP_SGPUID
                                        };
                                    });
                                });
                        }

                        return perfiles;
                    });
                // return perfiles;
            })
    }
    async getMenu(nrocta, sgpuid) {
        return await this._entityService.RecuperacionObjetoPerfilPorIdSGP(nrocta, sgpuid)
            .then(menu => {
                let menuActual = menu;
                let nuevoMenu = [];
                let level1 = menuActual.filter(m1 => m1.USR_SGPMEH_NIVELO == 1);
                for (let m of level1) {
                    let item = {
                        titulo: m.USR_SGPMEH_DESCRP,
                        icono: m.USR_SGPMEH_SLICON,
                    }
                    let level2 = menuActual.filter(m2 => (m.USR_SGPMEH_CODOBJ).substr(0, 2) === (m2.USR_SGPMEH_CODOBJ).substr(0, 2) && m2.USR_SGPMEH_NIVELO == 2);
                    if (level2.length > 0) {
                        item.submenu = level2.map(s => {
                            return {
                                titulo: s.USR_SGPMEH_DESCRP,
                                icono: s.USR_SGPMEH_SLICON,
                                url: s.USR_SGPMEH_URLURL
                            };
                        });
                    } else {
                        item.url = m.USR_SGPMEH_URLURL;
                    }
                    nuevoMenu.push(item);
                }
                return {
                    menu: nuevoMenu,
                    guard: menuActual.filter(ma => ma.USR_SGPMEH_URLURL !== 'no').map(ma => { return { ruta: ma.USR_SGPMEH_URLURL }; })
                };
            });
    }
    async postAsignarAdmin(nrocta, sgpuid, perfil, userid) {
        await this._entityService.CrearPerfilAsignadoUsuarioSGP(nrocta, sgpuid, perfil, userid);
    }
    async getPerfilById(id) {
        return await this._entityService.getPerfilById(id)
            .then(async perfil => {
                return perfil;
            });
    }
    async putPerfilSeguridad(descrip, avatar, nrocta, codigosObjetos, asignados, userid, codigoPerfil) {
        await this._entityService.ActualizacionPerfilSGP(descrip, avatar, codigoPerfil, userid)
            .then(async perfil => {
                await this._entityService.BorrarTodosObjetoPerfilSGP(codigoPerfil, '', userid)
                for (var codobj of codigosObjetos) {
                    await this._entityService.CrearObjetoPerfilSGP(codigoPerfil, codobj.codigo, userid);
                }
                await this._entityService.BorrarTodoUsuarioAsignadoPerfilSGP(nrocta, '', codigoPerfil);
                for (var sgpuid of asignados) {
                    if (sgpuid) {
                        await this._entityService.CrearPerfilAsignadoUsuarioSGP(nrocta, sgpuid.mail, codigoPerfil, userid);
                    }
                }
            });
    }
    async postPerfil(descrip, avatar, nrocta, codigosObjetos, asignados, userid) {
        await this._entityService.CrearPerfilSGP(descrip, avatar, nrocta, userid)
            .then(async perfil => {
                for (var codobj of codigosObjetos) {
                    await this._entityService.CrearObjetoPerfilSGP(perfil[0].CODIGO, codobj.codigo, userid);
                }
                for (var sgpuid of asignados) {
                    await this._entityService.CrearPerfilAsignadoUsuarioSGP(nrocta, sgpuid.mail, perfil[0].CODIGO, userid);
                }
            });
    }
    async getPerfilesAsignados(nrocta, sgpuid) {
        return await this._entityService.RecuperacionPerfilAsignadoUsuarioSGP(nrocta, sgpuid)
            .then(asignados => {
                return asignados.map(a => {
                    return {
                        nombre: a.USR_SGPPEH_DESCRP,
                        icon: a.USR_SGPPEH_AVATAR
                    }
                });;
            });
    }
    async deletePerfil(nrocta, id) {
        return await this._entityService.deletePerfil(nrocta, id);
    }

}
module.exports = Profile;