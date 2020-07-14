'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPTARR = sequelize.define('SPTARR', {
    SPTARR_CODARE: DataTypes.STRING,
    SPTARR_CODRES: DataTypes.STRING,
    SPTARR_DESCRP: DataTypes.STRING,
    SPTARR_GERENC: DataTypes.STRING,
    SPTARR_CODCAL: DataTypes.STRING,
    SPTARR_ACCESO: DataTypes.STRING,
    USR_SPTARR_CATINF: DataTypes.STRING
  }, {
    tableName: 'SPTARR',
    timestamps: false,
    freezeTableName: true
  });
  SPTARR.associate = function(models) {
    // associations can be defined here
  };
  return SPTARR;
};
