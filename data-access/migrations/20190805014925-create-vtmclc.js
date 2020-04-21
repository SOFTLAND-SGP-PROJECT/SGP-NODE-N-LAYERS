'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VTMCLCs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      VTMCLC_NROCTA: {
        type: Sequelize.STRING
      },
      VTMCLC_CODCON: {
        type: Sequelize.STRING
      },
      VTMCLC_PUESTO: {
        type: Sequelize.STRING
      },
      VTMCLC_OBSERV: {
        type: Sequelize.STRING
      },
      VTMCLC_TIPSEX: {
        type: Sequelize.STRING
      },
      VTMCLC_DIREML: {
        type: Sequelize.STRING
      },
      VTMCLC_TELINT: {
        type: Sequelize.STRING
      },
      VTMCLC_CELULA: {
        type: Sequelize.STRING
      },
      VTMCLC_RECFAC: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_APELLI: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_NOMBRE: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_CARGO: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_INACTI: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_MAIPAR: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_ENVIIS: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_ENVIFE: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_CONABO: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_MAIHAB: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_ENCUES: {
        type: Sequelize.STRING
      },
      VTMCLC_DEBAJA: {
        type: Sequelize.STRING
      },
      VTMCLC_OLDUID: {
        type: Sequelize.STRING
      },
      USR_VTMCLC_CNTPAR: {
        type: Sequelize.INTEGER
      },
      USR_VTMCLC_NIVCON: {
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
    return queryInterface.dropTable('VTMCLCs');
  }
};