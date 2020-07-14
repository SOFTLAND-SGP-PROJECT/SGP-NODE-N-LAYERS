'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SPTCIIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SPTCII_TIPCLA: {
        type: Sequelize.STRING
      },
      SPTCII_CODSUB: {
        type: Sequelize.STRING
      },
      SPTCII_TIPDES: {
        type: Sequelize.STRING
      },
      SPTCII_ESTDES: {
        type: Sequelize.STRING
      },
      SPTCII_TIPHAS: {
        type: Sequelize.STRING
      },
      SPTCII_ESTHAS: {
        type: Sequelize.STRING
      },
      SPTCII_CODARE: {
        type: Sequelize.STRING
      },
      SPTCII_CODRES: {
        type: Sequelize.STRING
      },
      SPTCII_TIPMA1: {
        type: Sequelize.STRING
      },
      SPTCII_CODMAI: {
        type: Sequelize.STRING
      },
      SPTCII_TIPMA2: {
        type: Sequelize.STRING
      },
      SPTCII_CODMA2: {
        type: Sequelize.STRING
      },
      SPTCII_TIPMA3: {
        type: Sequelize.STRING
      },
      SPTCII_CODMA3: {
        type: Sequelize.STRING
      },
      SPTCII_DEFECT: {
        type: Sequelize.STRING
      },
      SPTCII_REQUER: {
        type: Sequelize.STRING
      },
      SPTCII_IRORIG: {
        type: Sequelize.STRING
      },
      SPTCII_TIPORI: {
        type: Sequelize.STRING
      },
      SPTCII_ESTORI: {
        type: Sequelize.STRING
      },
      SPTCII_TEMARE: {
        type: Sequelize.STRING
      },
      SPTCII_TIPASI: {
        type: Sequelize.STRING
      },
      SPTCII_ESTASI: {
        type: Sequelize.STRING
      },
      SPTCII_DESFUN: {
        type: Sequelize.STRING
      },
      SPTCII_TRAHOR: {
        type: Sequelize.STRING
      },
      SPTCII_ESTHOR: {
        type: Sequelize.STRING
      },
      SPTCII_TEMRES: {
        type: Sequelize.STRING
      },
      SPTCII_FCHENT: {
        type: Sequelize.STRING
      },
      SPTCII_REQCON: {
        type: Sequelize.STRING
      },
      SPTCII_CAMARE: {
        type: Sequelize.STRING
      },
      SPTCII_INHIBE: {
        type: Sequelize.STRING
      },
      SPTCII_RIESGO: {
        type: Sequelize.STRING
      },
      SPTCII_STATUS: {
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
    return queryInterface.dropTable('SPTCIIs');
  }
};