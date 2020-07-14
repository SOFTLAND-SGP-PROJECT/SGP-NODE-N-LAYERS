'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SPRMVHs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SPRMVH_MODFOR: {
        type: Sequelize.STRING
      },
      SPRMVH_CODFOR: {
        type: Sequelize.STRING
      },
      SPRMVH_NROFOR: {
        type: Sequelize.INTEGER
      },
      SPRMVH_FCHMOV: {
        type: Sequelize.DATE
      },
      SPRMVH_TIPCLA: {
        type: Sequelize.STRING
      },
      SPRMVH_CODSUB: {
        type: Sequelize.STRING
      },
      SPRMVH_TIPDES: {
        type: Sequelize.STRING
      },
      SPRMVH_ESTACT: {
        type: Sequelize.STRING
      },
      SPRMVH_TIPHAS: {
        type: Sequelize.STRING
      },
      SPRMVH_ESTNEW: {
        type: Sequelize.STRING
      },
      SPRMVH_CLASIF: {
        type: Sequelize.STRING
      },
      SPRMVH_DESCRP: {
        type: Sequelize.TEXT
      },
      SPRMVH_NROCTA: {
        type: Sequelize.STRING
      },
      SPRMVH_FCHREQ: {
        type: Sequelize.DATE
      },
      SPRMVH_FCHLIM: {
        type: Sequelize.DATE
      },
      SPRMVH_NROINT: {
        type: Sequelize.INTEGER
      },
      SPRMVH_APLARE: {
        type: Sequelize.STRING
      },
      SPRMVH_APLCOD: {
        type: Sequelize.STRING
      },
      SPRMVH_PEDARE: {
        type: Sequelize.STRING
      },
      SPRMVH_PEDRES: {
        type: Sequelize.STRING
      },
      SPRMVH_USERNT: {
        type: Sequelize.STRING
      },
      SPRMVH_REFERE: {
        type: Sequelize.STRING
      },
      SPRMVH_DIRCOR: {
        type: Sequelize.TEXT
      },
      SPRMVH_CODTEM: {
        type: Sequelize.STRING
      },
      SPRMVH_CODPRI: {
        type: Sequelize.STRING
      },
      SPRMVH_OLEOLE: {
        type: Sequelize.TEXT
      },
      SPRMVH_TARREL: {
        type: Sequelize.STRING
      },
      SPRMVH_CODTAR: {
        type: Sequelize.STRING
      },
      SPRMVH_PORCEN: {
        type: Sequelize.FLOAT
      },
      SPRMVH_DESFUN: {
        type: Sequelize.TEXT
      },
      SPRMVH_OBSERV: {
        type: Sequelize.TEXT
      },
      SPRMVH_NROITM: {
        type: Sequelize.INTEGER
      },
      SPRMVH_ORDENX: {
        type: Sequelize.INTEGER
      },
      SPRMVH_TIPASG: {
        type: Sequelize.STRING
      },
      SPRMVH_HORNOV: {
        type: Sequelize.STRING
      },
      SPRMVH_ORIPRO: {
        type: Sequelize.STRING
      },
      SPRMVH_NROSUB: {
        type: Sequelize.STRING
      },
      SPRMVH_MODORI: {
        type: Sequelize.STRING
      },
      SPRMVH_CODORI: {
        type: Sequelize.STRING
      },
      SPRMVH_NROORI: {
        type: Sequelize.INTEGER
      },
      SPRMVH_MANFCH: {
        type: Sequelize.STRING
      },
      SPRMVH_CANASG: {
        type: Sequelize.INTEGER
      },
      SPRMVH_CTRLIN: {
        type: Sequelize.STRING
      },
      SPRMVH_CTACON: {
        type: Sequelize.STRING
      },
      SPRMVH_CONTAC: {
        type: Sequelize.STRING
      },
      SPRMVH_CODEMP: {
        type: Sequelize.STRING
      },
      SPRMVH_EMPORI: {
        type: Sequelize.STRING
      },
      SPRMVH_NEWCTO: {
        type: Sequelize.STRING
      },
      SPRMVH_RIESGO: {
        type: Sequelize.STRING
      },
      SPRMVH_FCHDES: {
        type: Sequelize.DATE
      },
      SPRMVH_MAILCP: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_CORORT: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_USAOBJ: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_TIPCLA: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_CODATR: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_VALATR: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_TIPPRO: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVH_TIPAPL: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVH_OCURRE: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVH_CALIFI: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_CLIENT: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_ITM: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVH_CANAL: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_VALORD: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVH_TIPGSL: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVH_PRIGSL: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVH_CALGSL: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVH_UANCAR: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_ANCARA: {
        type: Sequelize.TEXT
      },
      USR_SPRMVH_CTAPRO: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_CODPRO: {
        type: Sequelize.STRING
      },
      USR_SPRMVH_OLEPRO: {
        type: Sequelize.STRING
      },
      SPRMVH_RELEAS: {
        type: Sequelize.STRING
      },
      SPRMVH_OBSCLI: {
        type: Sequelize.TEXT
      },
      SPRMVH_TITULO: {
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
    return queryInterface.dropTable('SPRMVHs');
  }
};