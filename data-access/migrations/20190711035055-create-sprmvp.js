'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SPRMVPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SPRMVP_MODFOR: {
        type: Sequelize.STRING
      },
      SPRMVP_CODFOR: {
        type: Sequelize.STRING
      },
      SPRMVP_NROFOR: {
        type: Sequelize.INTEGER
      },
      SPRMVP_CODPRO: {
        type: Sequelize.STRING
      },
      SPRMVP_CODTAR: {
        type: Sequelize.STRING
      },
      SPRMVP_CLAPRO: {
        type: Sequelize.STRING
      },
      SPRMVP_CLATAR: {
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
    return queryInterface.dropTable('SPRMVPs');
  }
};