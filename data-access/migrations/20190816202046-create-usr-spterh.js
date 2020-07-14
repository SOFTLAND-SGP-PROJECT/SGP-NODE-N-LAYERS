'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SPTERHs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SPTERH_CODIGO: {
        type: Sequelize.STRING
      },
      USR_SPTERH_DESCRP: {
        type: Sequelize.STRING
      },
      USR_SPTERH_TEXTOS: {
        type: Sequelize.TEXT
      },
      USR_SPTERH_MODULO: {
        type: Sequelize.STRING
      },
      USR_SPTERH_OBJETO: {
        type: Sequelize.STRING
      },
      USR_SPTERH_TIPPUB: {
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
    return queryInterface.dropTable('USR_SPTERHs');
  }
};