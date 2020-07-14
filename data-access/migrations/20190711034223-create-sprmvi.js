'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SPRMVIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SPRMVI_MODFOR: {
        type: Sequelize.STRING
      },
      SPRMVI_CODFOR: {
        type: Sequelize.STRING
      },
      SPRMVI_NROFOR: {
        type: Sequelize.INTEGER
      },
      SPRMVI_NROASG: {
        type: Sequelize.INTEGER
      },
      SPRMVI_NROITM: {
        type: Sequelize.INTEGER
      },
      SPRMVI_FCHMOV: {
        type: Sequelize.DATE
      },
      SPRMVI_TIPCLA: {
        type: Sequelize.STRING
      },
      SPRMVI_CODSUB: {
        type: Sequelize.STRING
      },
      SPRMVI_TIPDES: {
        type: Sequelize.STRING
      },
      SPRMVI_ESTACT: {
        type: Sequelize.STRING
      },
      SPRMVI_TIPHAS: {
        type: Sequelize.STRING
      },
      SPRMVI_ESTNEW: {
        type: Sequelize.STRING
      },
      SPRMVI_CLASIF: {
        type: Sequelize.STRING
      },
      SPRMVI_FCHREQ: {
        type: Sequelize.DATE
      },
      SPRMVI_FCHLIM: {
        type: Sequelize.DATE
      },
      SPRMVI_OBSERV: {
        type: Sequelize.STRING
      },
      SPRMVI_MODREL: {
        type: Sequelize.STRING
      },
      SPRMVI_CODREL: {
        type: Sequelize.STRING
      },
      SPRMVI_NROREL: {
        type: Sequelize.INTEGER
      },
      SPRMVI_ASGREL: {
        type: Sequelize.INTEGER
      },
      SPRMVI_MOTIVO: {
        type: Sequelize.STRING
      },
      SPRMVI_APLARE: {
        type: Sequelize.STRING
      },
      SPRMVI_APLCOD: {
        type: Sequelize.STRING
      },
      SPRMVI_PEDARE: {
        type: Sequelize.STRING
      },
      SPRMVI_PEDRES: {
        type: Sequelize.STRING
      },
      SPRMVI_ASGARE: {
        type: Sequelize.STRING
      },
      SPRMVI_ASGRES: {
        type: Sequelize.STRING
      },
      SPRMVI_NROINT: {
        type: Sequelize.INTEGER
      },
      SPRMVI_USERNT: {
        type: Sequelize.STRING
      },
      SPRMVI_ORIARE: {
        type: Sequelize.STRING
      },
      SPRMVI_ORIRES: {
        type: Sequelize.STRING
      },
      SPRMVI_HORNOV: {
        type: Sequelize.STRING
      },
      SPRMVI_MINUTO: {
        type: Sequelize.FLOAT
      },
      SPRMVI_CODTEM: {
        type: Sequelize.STRING
      },
      SPRMVI_CODPRI: {
        type: Sequelize.STRING
      },
      SPRMVI_OBSCLI: {
        type: Sequelize.STRING
      },
      SPRMVI_DESFUN: {
        type: Sequelize.TEXT
      },
      SPRMVI_ORDENX: {
        type: Sequelize.INTEGER
      },
      SPRMVI_TIPASG: {
        type: Sequelize.STRING
      },
      USR_SPRMVI_TIPPRO: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVI_TIPAPL: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVI_OCURRE: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVI_CALIFI: {
        type: Sequelize.STRING
      },
      USR_SPRMVI_MAINOT: {
        type: Sequelize.STRING
      },
      USR_SPRMVI_TIPGSL: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVI_PRIGSL: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVI_CALGSL: {
        type: Sequelize.INTEGER
      },
      USR_SPRMVI_ACARAI: {
        type: Sequelize.TEXT
      },
      NEW_SPRMVI_OBSCLI: {
        type: Sequelize.STRING
      },
      NEW_SPRMVI_OBSERV: {
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
    return queryInterface.dropTable('SPRMVIs');
  }
};