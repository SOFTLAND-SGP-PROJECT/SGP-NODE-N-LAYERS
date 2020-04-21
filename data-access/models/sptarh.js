'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPTARH = sequelize.define('SPTARH', {
    SPTARH_CODARE: DataTypes.STRING,
    SPTARH_DESCRP: DataTypes.STRING,
    SPTARH_EXTERN: DataTypes.STRING
  }, {
    tableName: 'SPTARH',
    timestamps: false,
    freezeTableName: true
  });
  SPTARH.associate = function(models) {
    // associations can be defined here
  };
  return SPTARH;
};
