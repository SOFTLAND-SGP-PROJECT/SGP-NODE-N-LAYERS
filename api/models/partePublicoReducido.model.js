'use strict';
var partePubilcoReducido = {
    count: {
        path: 'count',
    },
    'partes': {
        path: 'partes',
        nested: {
            'codigo': {
                path: 'USR_SPTERH_CODIGO',
            },
            'descripcion': {
                path: 'USR_SPTERH_DESCRP',
            }
        }
    }
};
module.exports = partePubilcoReducido;