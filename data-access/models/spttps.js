'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPTTPS = sequelize.define('SPTTPS', {
    SPTTPS_TIPCLA: DataTypes.STRING,
    SPTTPS_CODSUB: DataTypes.STRING,
    SPTTPS_DESCRP: DataTypes.STRING
  }, {
    tableName: 'SPTTPS',
    timestamps: false,
    freezeTableName: true
  });
  SPTTPS.associate = function(models) {
    // associations can be defined here
  };
  return SPTTPS;
};
