'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VTMCLHs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      VTMCLH_NROCTA: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR01: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR03: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR04: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR05: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR06: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR07: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR08: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR09: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR10: {
        type: Sequelize.STRING
      },
      VTMCLH_RUBR02: {
        type: Sequelize.STRING
      },
      VTMCLH_NOMBRE: {
        type: Sequelize.STRING
      },
      VTMCLH_NROSUB: {
        type: Sequelize.STRING
      },
      VTMCLH_RESPON: {
        type: Sequelize.STRING
      },
      VTMCLH_DIRECC: {
        type: Sequelize.STRING
      },
      VTMCLH_CODFIL: {
        type: Sequelize.STRING
      },
      VTMCLH_CODPAI: {
        type: Sequelize.STRING
      },
      VTMCLH_CODPOS: {
        type: Sequelize.STRING
      },
      VTMCLH_MUNICP: {
        type: Sequelize.STRING
      },
      VTMCLH_FLETES: {
        type: Sequelize.STRING
      },
      VTMCLH_TELEFN: {
        type: Sequelize.STRING
      },
      VTMCLH_NROFAX: {
        type: Sequelize.STRING
      },
      VTMCLH_NTELEX: {
        type: Sequelize.STRING
      },
      VTMCLH_CNDIVA: {
        type: Sequelize.STRING
      },
      VTMCLH_TIPDOC: {
        type: Sequelize.STRING
      },
      VTMCLH_NRODOC: {
        type: Sequelize.STRING
      },
      VTMCLH_VNDDOR: {
        type: Sequelize.STRING
      },
      VTMCLH_COBRAD: {
        type: Sequelize.STRING
      },
      VTMCLH_JURISD: {
        type: Sequelize.STRING
      },
      VTMCLH_CODZON: {
        type: Sequelize.STRING
      },
      VTMCLH_ACTIVD: {
        type: Sequelize.STRING
      },
      VTMCLH_CATEGO: {
        type: Sequelize.STRING
      },
      VTMCLH_CNDPAG: {
        type: Sequelize.STRING
      },
      VTMCLH_CNDPRE: {
        type: Sequelize.STRING
      },
      VTMCLH_CODCRD: {
        type: Sequelize.STRING
      },
      VTMCLH_GRUBON: {
        type: Sequelize.STRING
      },
      VTMCLH_CAMION: {
        type: Sequelize.STRING
      },
      VTMCLH_CAMALT: {
        type: Sequelize.STRING
      },
      VTMCLH_TRACOD: {
        type: Sequelize.STRING
      },
      VTMCLH_DIREP1: {
        type: Sequelize.STRING
      },
      VTMCLH_DIREP2: {
        type: Sequelize.STRING
      },
      VTMCLH_DIREP3: {
        type: Sequelize.STRING
      },
      VTMCLH_DIREP4: {
        type: Sequelize.STRING
      },
      VTMCLH_DIREP5: {
        type: Sequelize.STRING
      },
      VTMCLH_HORREC: {
        type: Sequelize.STRING
      },
      VTMCLH_DIRENT: {
        type: Sequelize.STRING
      },
      VTMCLH_PAIENT: {
        type: Sequelize.STRING
      },
      VTMCLH_CODENT: {
        type: Sequelize.STRING
      },
      VTMCLH_JURENT: {
        type: Sequelize.STRING
      },
      VTMCLH_COPIVT: {
        type: Sequelize.INTEGER
      },
      VTMCLH_COPIFC: {
        type: Sequelize.INTEGER
      },
      VTMCLH_COPIST: {
        type: Sequelize.INTEGER
      },
      VTMCLH_textOS: {
        type: Sequelize.TEXT
      },
      VTMCLH_TIPDO1: {
        type: Sequelize.STRING
      },
      VTMCLH_NRODO1: {
        type: Sequelize.STRING
      },
      VTMCLH_TIPDO2: {
        type: Sequelize.STRING
      },
      VTMCLH_NRODO2: {
        type: Sequelize.STRING
      },
      VTMCLH_TIPDO3: {
        type: Sequelize.STRING
      },
      VTMCLH_NRODO3: {
        type: Sequelize.STRING
      },
      VTMCLH_TIPDO4: {
        type: Sequelize.STRING
      },
      VTMCLH_NRODO4: {
        type: Sequelize.STRING
      },
      VTMCLH_TIPDO5: {
        type: Sequelize.STRING
      },
      VTMCLH_NRODO5: {
        type: Sequelize.STRING
      },
      VTMCLH_DIREML: {
        type: Sequelize.STRING
      },
      VTMCLH_SEGPRO: {
        type: Sequelize.STRING
      },
      VTMCLH_CONTAD: {
        type: Sequelize.STRING
      },
      VTMCLH_EDISUB: {
        type: Sequelize.STRING
      },
      VTMCLH_CUENTA: {
        type: Sequelize.STRING
      },
      VTMCLH_MAXITM: {
        type: Sequelize.INTEGER
      },
      VTMCLH_DIFDIA: {
        type: Sequelize.INTEGER
      },
      VTMCLH_DIFDES: {
        type: Sequelize.DATE
      },
      VTMCLH_CODARE: {
        type: Sequelize.STRING
      },
      VTMCLH_DIFHAS: {
        type: Sequelize.DATE
      },
      VTMCLH_PERINA: {
        type: Sequelize.FLOAT
      },
      VTMCLH_CODRES: {
        type: Sequelize.STRING
      },
      VTMCLH_IMPDIF: {
        type: Sequelize.FLOAT
      },
      VTMCLH_EMAIL: {
        type: Sequelize.STRING
      },
      VTMCLH_CNDINT: {
        type: Sequelize.STRING
      },
      VTMCLH_DISTRI: {
        type: Sequelize.STRING
      },
      VTMCLH_ALLDLD: {
        type: Sequelize.STRING
      },
      VTMCLH_DEPOSI: {
        type: Sequelize.STRING
      },
      VTMCLH_SECTOR: {
        type: Sequelize.STRING
      },
      VTMCLH_NRODIS: {
        type: Sequelize.STRING
      },
      VTMCLH_OLEOLE: {
        type: Sequelize.TEXT
      },
      VTMCLH_BMPBMP: {
        type: Sequelize.STRING
      },
      VTMCLH_INHIBE: {
        type: Sequelize.STRING
      },
      VTMCLH_PRMXPR: {
        type: Sequelize.FLOAT
      },
      VTMCLH_PRMIPR: {
        type: Sequelize.FLOAT
      },
      VTMCLH_TRAFCR: {
        type: Sequelize.STRING
      },
      VTMCLH_CODCOF: {
        type: Sequelize.STRING
      },
      VTMCLH_MODCPT: {
        type: Sequelize.STRING
      },
      VTMCLH_TIPCPT: {
        type: Sequelize.STRING
      },
      VTMCLH_CODCPT: {
        type: Sequelize.STRING
      },
      VTMCLH_LISCLI: {
        type: Sequelize.STRING
      },
      VTMCLH_TIPOPR: {
        type: Sequelize.STRING
      },
      VTMCLH_CODOPR: {
        type: Sequelize.STRING
      },
      VTMCLH_CRC: {
        type: Sequelize.STRING
      },
      VTMCLH_PRODUC: {
        type: Sequelize.STRING
      },
      VTMCLH_ISSERP: {
        type: Sequelize.STRING
      },
      VTMCLH_ISMSDE: {
        type: Sequelize.STRING
      },
      VTMCLH_LINEAP: {
        type: Sequelize.STRING
      },
      VTMCLH_MASCLP: {
        type: Sequelize.STRING
      },
      USR_KM: {
        type: Sequelize.INTEGER
      },
      USR_PEAJE: {
        type: Sequelize.FLOAT
      },
      USR_PRESUP: {
        type: Sequelize.INTEGER
      },
      USR_RESPPR: {
        type: Sequelize.STRING
      },
      USR_TELPPR: {
        type: Sequelize.STRING
      },
      USR_DYHREC: {
        type: Sequelize.STRING
      },
      USR_DYHCOB: {
        type: Sequelize.STRING
      },
      USR_INTERNATIONAL: {
        type: Sequelize.STRING
      },
      USR_COFIMP: {
        type: Sequelize.STRING
      },
      USR_SQLVERSION: {
        type: Sequelize.STRING
      },
      USR_VERSIO: {
        type: Sequelize.STRING
      },
      USR_VTMCLH_CANAL: {
        type: Sequelize.STRING
      },
      USR_CANAL: {
        type: Sequelize.STRING
      },
      USR_GASTRA: {
        type: Sequelize.STRING
      },
      USR_LIQSTRA: {
        type: Sequelize.STRING
      },
      USR_VERSION: {
        type: Sequelize.STRING
      },
      USR_NROPRO: {
        type: Sequelize.STRING
      },
      USR_USR: {
        type: Sequelize.FLOAT
      },
      USR_VALOR_INST: {
        type: Sequelize.FLOAT
      },
      USR_ABONO_TEO: {
        type: Sequelize.FLOAT
      },
      USR_ABONO_TEOREA: {
        type: Sequelize.FLOAT
      },
      USR_VTMCLH_REFSAC: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('VTMCLHs');
  }
};