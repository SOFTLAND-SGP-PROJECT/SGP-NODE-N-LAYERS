'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SPWEBDOCUs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SPWEBDOCU_NOMBREDOC: {
        type: Sequelize.STRING
      },
      USR_SPWEBDOCU_DESCRPDOC: {
        type: Sequelize.STRING
      },
      USR_SPWEBDOCU_URLDOC: {
        type: Sequelize.STRING
      },
      USR_SP_FECALT: {
        type: Sequelize.DATE
      },
      USR_SP_ULTOPR: {
        type: Sequelize.STRING
      },
      USR_SP_DEBAJA: {
        type: Sequelize.STRING
      },
      USR_SP_MODULE: {
        type: Sequelize.STRING
      },
      USR_SPWEBDOCU_NROCTA: {
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
    return queryInterface.dropTable('USR_SPWEBDOCUs');
  }
};