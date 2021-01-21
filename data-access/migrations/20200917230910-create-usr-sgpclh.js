'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SGPCLHs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SGPCLH_NROCTA: {
        type: Sequelize.STRING
      },
      USR_SGPCLH_SGPIMG: {
        type: Sequelize.STRING
      },
      USR_SP_FECALT: {
        type: Sequelize.DATE
      },
      USR_SP_FECMOD: {
        type: Sequelize.DATE
      },
      USR_SP_USERID: {
        type: Sequelize.STRING
      },
      USR_SP_DEBAJA: {
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
    return queryInterface.dropTable('USR_SGPCLHs');
  }
};