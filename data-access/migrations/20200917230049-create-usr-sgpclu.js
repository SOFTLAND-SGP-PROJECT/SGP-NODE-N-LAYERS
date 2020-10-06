'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SGPCLUs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SGPCLU_NROCTA: {
        type: Sequelize.STRING
      },
      USR_SGPCLU_SGPUID: {
        type: Sequelize.STRING
      },
      USR_SGPCLU_CODCON: {
        type: Sequelize.STRING
      },
      USR_SGPCLU_SGPPWD: {
        type: Sequelize.STRING
      },
      USR_SGPCLU_SGPIMG: {
        type: Sequelize.STRING
      },
      USR_SGPCLU_SGPLOG: {
        type: Sequelize.DATE
      },
      USR_SGPCLU_INACTI: {
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
    return queryInterface.dropTable('USR_SGPCLUs');
  }
};