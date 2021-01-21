'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USR_SGPPEHs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USR_SGPPEH_CODIGO: {
        type: Sequelize.STRING
      },
      USR_SGPPEH_DESCRP: {
        type: Sequelize.STRING
      },
      USR_SGPPEH_AVATAR: {
        type: Sequelize.STRING
      },
      USR_SGPPEH_NROCTA: {
        type: Sequelize.STRING
      },
      USR_SGPPEH_INACTI: {
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
    return queryInterface.dropTable('USR_SGPPEHs');
  }
};