'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SPTARRs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SPTARR_CODARE: {
        type: Sequelize.STRING
      },
      SPTARR_CODRES: {
        type: Sequelize.STRING
      },
      SPTARR_DESCRP: {
        type: Sequelize.STRING
      },
      SPTARR_GERENC: {
        type: Sequelize.STRING
      },
      SPTARR_CODCAL: {
        type: Sequelize.STRING
      },
      SPTARR_ACCESO: {
        type: Sequelize.STRING
      },
      USR_SPTARR_CATINF: {
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
    return queryInterface.dropTable('SPTARRs');
  }
};