'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPTARV = sequelize.define('SPTARV', {
    SPTARV_CODARE: DataTypes.STRING,
    SPTARV_CODRES: DataTypes.STRING,
    SPTARV_TIPCLA: DataTypes.STRING,
    SPTARV_TIPEST: DataTypes.STRING,
    SPTARV_CODEST: DataTypes.STRING,
    SPTARV_RECIBE: DataTypes.STRING,
    SPTARV_ENVIAR: DataTypes.STRING,
    SPTARV_VISUAL: DataTypes.STRING
  }, {
    tableName: 'SPTARV',
    timestamps: false,
    freezeTableName: true
  });
  SPTARV.associate = function(models) {
    // associations can be defined here
  };
  return SPTARV;
};
