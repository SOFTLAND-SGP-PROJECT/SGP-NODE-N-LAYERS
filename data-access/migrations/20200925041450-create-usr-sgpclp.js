'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SGPCLPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SGPCLP_NROCTA: {
        type: Sequelize.STRING
      },
      USR_SGPCLP_SGPUID: {
        type: Sequelize.STRING
      },
      USR_SGPCLP_PERFIL: {
        type: Sequelize.STRING
      },
      USR_SGPCLP_INACTI: {
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
    return queryInterface.dropTable('USR_SGPCLPs');
  }
};