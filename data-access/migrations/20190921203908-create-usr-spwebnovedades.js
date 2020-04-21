'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SPWEBNOVEDADEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SPWEBNOVEDADES_NOVEDAD: {
        type: Sequelize.STRING
      },
      USR_SPWEBNOVEDADES_DESCNOVEDA: {
        type: Sequelize.STRING
      },
      USR_SP_FECALT: {
        type: Sequelize.DATE
      },
      USR_SP_FECMOD: {
        type: Sequelize.DATE
      },
      USR_SP_DEBAJA: {
        type: Sequelize.STRING
      },
      USR_SPWEBNOVEDADES_USERID: {
        type: Sequelize.STRING
      },
      USR_SPWEBNOVEDADES_NROCTA: {
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
    return queryInterface.dropTable('USR_SPWEBNOVEDADEs');
  }
};