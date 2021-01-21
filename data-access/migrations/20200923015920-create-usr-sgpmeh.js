'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SGPMEHs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SGPMEH_CODOBJ: {
        type: Sequelize.STRING
      },
      USR_SGPMEH_DESCRP: {
        type: Sequelize.STRING
      },
      USR_SGPMEH_SLICON: {
        type: Sequelize.STRING
      },
      USR_SGPMEH_URLURL: {
        type: Sequelize.STRING
      },
      USR_SGPMEH_NIVELO: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('USR_SGPMEHs');
  }
};