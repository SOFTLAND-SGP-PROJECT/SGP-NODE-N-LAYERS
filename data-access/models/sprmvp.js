'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPRMVP = sequelize.define('SPRMVP', {
    SPRMVP_MODFOR: DataTypes.STRING,
    SPRMVP_CODFOR: DataTypes.STRING,
    SPRMVP_NROFOR: DataTypes.INTEGER,
    SPRMVP_CODPRO: DataTypes.STRING,
    SPRMVP_CODTAR: DataTypes.STRING,
    SPRMVP_CLAPRO: DataTypes.STRING,
    SPRMVP_CLATAR: DataTypes.STRING
  }, {
    tableName: 'SPRMVP',
    timestamps: false,
    freezeTableName: true
  });
  SPRMVP.associate = function(models) {
    // associations can be defined here
  };
  return SPRMVP;
};
