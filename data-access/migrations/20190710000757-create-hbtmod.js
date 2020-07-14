'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HBTMOD', {
      HBTMOD_MODULO: {
        type: Sequelize.STRING
      },
      HBTMOD_DESCRP: {
        type: Sequelize.STRING
      },
      HBTMOD_TIPMOD: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HBTMOD');
  }
};
