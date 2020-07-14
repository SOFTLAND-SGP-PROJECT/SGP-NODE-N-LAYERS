var partepublico = {
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
      },
      'texto': {
        path: 'USR_SPTERH_TEXTOS',
      },
      'modulo': {
        path: 'USR_SPTERH_MODULO',
      },
      'objeto': {
        path: 'USR_SPTERH_OBJETO',
      },
      'version': {
        path: 'USR_SPTERH_VRSION',
      },
      'fecha_de_liberacion': {
        path: 'USR_SPTERH_FCHLIB',
      },
      'modfor': {
        path: 'USR_SPTERH_MODFOR',
      },
      'codfor': {
        path: 'USR_SPTERH_CODFOR',
      },
      'nrofor': {
        path: 'USR_SPTERH_NROFOR',
      },
      'items':{
        path:'items',
        nested:{
          'nroitm': {
            path: 'USR_SPTERI_NROITM',
          },
          'texto': {
            path: 'USR_SPTERI_TEXTOS',
          },
          'imagen': {
            path: 'USR_SPTERI_BMPBMP',
          }
        }
      }
    }
  }


}
module.exports = partepublico;
