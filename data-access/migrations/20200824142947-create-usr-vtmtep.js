'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_VTMTEPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_VTMTEP_TIPENC: {
        type: Sequelize.STRING
      },
      USR_VTMTEP_NROPRE: {
        type: Sequelize.INTEGER
      },
      USR_VTMTEP_DESCRP: {
        type: Sequelize.STRING
      },
      USR_VTMTEP_TEXTOS: {
        type: Sequelize.STRING
      },
      USR_VTMTEP_VALPRE: {
        type: Sequelize.INTEGER
      },
      USR_VTMTEP_EQUIEX: {
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
    return queryInterface.dropTable('USR_VTMTEPs');
  }
};