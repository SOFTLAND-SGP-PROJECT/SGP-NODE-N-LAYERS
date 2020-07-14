'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cwomobjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.INTEGER
      },
      description_arg: {
        type: Sequelize.STRING
      },
      visible: {
        type: Sequelize.INTEGER
      },
      helpcontextid: {
        type: Sequelize.INTEGER
      },
      modulename: {
        type: Sequelize.STRING
      },
      areaname: {
        type: Sequelize.STRING
      },
      description_bra: {
        type: Sequelize.STRING
      },
      description_usa: {
        type: Sequelize.STRING
      },
      description_deu: {
        type: Sequelize.STRING
      },
      description_fra: {
        type: Sequelize.STRING
      },
      internalid: {
        type: Sequelize.STRING
      },
      description_per: {
        type: Sequelize.STRING
      },
      description_ecu: {
        type: Sequelize.STRING
      },
      owner: {
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
    return queryInterface.dropTable('cwomobjects');
  }
};