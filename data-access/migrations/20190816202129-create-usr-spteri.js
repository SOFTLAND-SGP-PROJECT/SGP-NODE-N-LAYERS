'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SPTERIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SPTERI_CODIGO: {
        type: Sequelize.STRING
      },
      USR_SPTERI_NROITM: {
        type: Sequelize.INTEGER
      },
      USR_SPTERI_TEXTOS: {
        type: Sequelize.TEXT
      },
      USR_SPTERI_BMPBMP: {
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
    return queryInterface.dropTable('USR_SPTERIs');
  }
};