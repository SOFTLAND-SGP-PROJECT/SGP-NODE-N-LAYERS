'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cwOMObjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Class: {
        type: Sequelize.INTEGER
      },
      Description_ARG: {
        type: Sequelize.STRING
      },
      Visible: {
        type: Sequelize.INTEGER
      },
      HelpContextID: {
        type: Sequelize.INTEGER
      },
      ModuleName: {
        type: Sequelize.STRING
      },
      AreaName: {
        type: Sequelize.STRING
      },
      Description_BRA: {
        type: Sequelize.STRING
      },
      Description_USA: {
        type: Sequelize.STRING
      },
      Description_DEU: {
        type: Sequelize.STRING
      },
      Description_FRA: {
        type: Sequelize.STRING
      },
      InternalID: {
        type: Sequelize.STRING
      },
      Description_PER: {
        type: Sequelize.STRING
      },
      Description_ECU: {
        type: Sequelize.STRING
      },
      Owner: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('cwOMObjects');
  }
};