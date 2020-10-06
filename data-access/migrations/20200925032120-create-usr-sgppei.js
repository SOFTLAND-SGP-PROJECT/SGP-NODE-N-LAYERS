'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SGPPEIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SGPPEI_CODIGO: {
        type: Sequelize.STRING
      },
      USR_SGPPEI_CODOBJ: {
        type: Sequelize.STRING
      },
      USR_SGPPEI_INACTI: {
        type: Sequelize.STRING
      },
      USR_SG_FECALT: {
        type: Sequelize.DATE
      },
      USR_SG_FECMOD: {
        type: Sequelize.DATE
      },
      USR_SG_USERID: {
        type: Sequelize.STRING
      },
      USR_SG_DEBAJA: {
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
    return queryInterface.dropTable('USR_SGPPEIs');
  }
};