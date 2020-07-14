'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SLSPWEB_ParteReducido_Acciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modfor: {
        type: Sequelize.STRING
      },
      codfor: {
        type: Sequelize.STRING
      },
      nrofor: {
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.STRING
      },
      fchmov: {
        type: Sequelize.DATE
      },
      identificador: {
        type: Sequelize.STRING
      },
      estado_pre: {
        type: Sequelize.STRING
      },
      estado_cod: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      estadoIcono: {
        type: Sequelize.STRING
      },
      estadoColor: {
        type: Sequelize.STRING
      },
      incidente: {
        type: Sequelize.STRING
      },
      Desest: {
        type: Sequelize.STRING
      },
      ultimaActualizacion: {
        type: Sequelize.STRING
      },
      tipoNotif: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.STRING
      },
      cuenta: {
        type: Sequelize.STRING
      },
      SPRMVH_PEDARE: {
        type: Sequelize.STRING
      },
      SPRMVH_PEDRES: {
        type: Sequelize.STRING
      },
      SPTARH_DESCRP: {
        type: Sequelize.STRING
      },
      SPTARR_DESCRP: {
        type: Sequelize.STRING
      },
      incide: {
        type: Sequelize.STRING
      },
      asgare: {
        type: Sequelize.STRING
      },
      asgres: {
        type: Sequelize.STRING
      },
      fecmod: {
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
    return queryInterface.dropTable('SLSPWEB_ParteReducido_Acciones');
  }
};