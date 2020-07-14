'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SPTARVs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SPTARV_CODARE: {
        type: Sequelize.STRING
      },
      SPTARV_CODRES: {
        type: Sequelize.STRING
      },
      SPTARV_TIPCLA: {
        type: Sequelize.STRING
      },
      SPTARV_TIPEST: {
        type: Sequelize.STRING
      },
      SPTARV_CODEST: {
        type: Sequelize.STRING
      },
      SPTARV_RECIBE: {
        type: Sequelize.STRING
      },
      SPTARV_ENVIAR: {
        type: Sequelize.STRING
      },
      SPTARV_VISUAL: {
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
    return queryInterface.dropTable('SPTARVs');
  }
};