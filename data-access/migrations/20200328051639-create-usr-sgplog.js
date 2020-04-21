'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SGPLOGs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SGPLOG_NROROW: {
        type: Sequelize.INTEGER
      },
      USR_SGPLOG_NROCTA: {
        type: Sequelize.STRING
      },
      USR_SGPLOG_CODIGO: {
        type: Sequelize.STRING
      },
      USR_SGPLOG_VALORA: {
        type: Sequelize.INTEGER
      },
      USR_SG_FECALT: {
        type: Sequelize.DATE
      },
      USR_SG_FECMOD: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('USR_SGPLOGs');
  }
};