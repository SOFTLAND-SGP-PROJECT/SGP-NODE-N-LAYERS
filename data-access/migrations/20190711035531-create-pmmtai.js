'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PMMTAIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PMMTAI_CODPRO: {
        type: Sequelize.STRING
      },
      PMMTAI_CODTAR: {
        type: Sequelize.STRING
      },
      PMMTAI_TIPREL: {
        type: Sequelize.STRING
      },
      PMMTAI_RELPRO: {
        type: Sequelize.STRING
      },
      PMMTAI_RELTAR: {
        type: Sequelize.STRING
      },
      PMMTAI_ORDENC: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('PMMTAIs');
  }
};