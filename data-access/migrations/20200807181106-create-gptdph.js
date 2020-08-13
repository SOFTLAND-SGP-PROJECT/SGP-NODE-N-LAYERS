'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GPTDPHs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      GPTDPH_CODPRO: {
        type: Sequelize.STRING
      },
      GPTDPH_DESCRP: {
        type: Sequelize.STRING
      },
      GPTDPH_NROCTA: {
        type: Sequelize.STRING
      },
      GPTDPH_DIRECC: {
        type: Sequelize.STRING
      },
      GPTDPH_CODPAI: {
        type: Sequelize.STRING
      },
      GPTDPH_CODPOS: {
        type: Sequelize.STRING
      },
      GPTDPH_BMPBMP: {
        type: Sequelize.STRING
      },
      GPTDPH_DEPOSI: {
        type: Sequelize.STRING
      },
      GPTDPH_SECTOR: {
        type: Sequelize.STRING
      },
      GPTDPH_OBJETI: {
        type: Sequelize.STRING
      },
      GPTDPH_ALCANC: {
        type: Sequelize.STRING
      },
      GPTDPH_SUPUES: {
        type: Sequelize.STRING
      },
      GPTDPH_RESTRI: {
        type: Sequelize.STRING
      },
      GPTDPH_RESPRO: {
        type: Sequelize.STRING
      },
      GPTDPH_OLEOLE: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_GASTRA: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_CLAPRO: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_AUTDOC: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_USAUDO: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_FEAUDO: {
        type: Sequelize.DATE
      },
      USR_GPTDPH_TIPVTA: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_MODOFC: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_CODOFC: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_NROOFC: {
        type: Sequelize.INTEGER
      },
      USR_GPTDPH_CIERRE: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_AUTDCC: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_ENVCRN: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_ESTPRO: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_DESCOM: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_MODFAC: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_TIPPRO: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_ARTCOD: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_ENVMAT: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_FRQIDA: {
        type: Sequelize.INTEGER
      },
      USR_GPTDPH_INFVAL: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_HRSPRE: {
        type: Sequelize.INTEGER
      },
      USR_GPTDPH_CLASIE: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_TIPCUR: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_LNKCUR: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_HORDES: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_HORHAS: {
        type: Sequelize.STRING
      },
      USR_GPTDPH_LNKENC: {
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
    return queryInterface.dropTable('GPTDPHs');
  }
};