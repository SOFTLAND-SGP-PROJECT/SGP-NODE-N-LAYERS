'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HBTAUIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      HBTAUI_USRCOD: {
        type: Sequelize.STRING
      },
      HBTAUI_NROCTA: {
        type: Sequelize.STRING
      },
      HBTAUI_NROSUC: {
        type: Sequelize.STRING
      },
      HBTAUI_NROMOV: {
        type: Sequelize.INTEGER
      },
      HBTAUI_CODTOK: {
        type: Sequelize.STRING
      },
      HBTAUI_MOTIVO: {
        type: Sequelize.STRING
      },
      HBTAUI_OBSERV: {
        type: Sequelize.STRING
      },
      HBTAUI_STATUS: {
        type: Sequelize.STRING
      },
      HBTAUI_FCHMOV: {
        type: Sequelize.DATE
      },
      HBTAUI_OBSINT: {
        type: Sequelize.STRING
      },
      HBTAUI_MODNOV: {
        type: Sequelize.STRING
      },
      HBTAUI_DRMAIL: {
        type: Sequelize.STRING
      },
      HBTAUI_CONVNC: {
        type: Sequelize.STRING
      },
      HBTAUI_FCHVNC: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('HBTAUIs');
  }
};