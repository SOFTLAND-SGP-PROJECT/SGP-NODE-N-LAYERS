'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPCCBH = sequelize.define('SPCCBH', {
    SPCCBH_MODCOM: {type: DataTypes.STRING, primaryKey: true },
    SPCCBH_CODCOM: {type: DataTypes.STRING, primaryKey: true },
    SPCCBH_DESCRP: DataTypes.STRING
  }, {
    tableName: 'SPCCBH',
    timestamps: false,
    freezeTableName: true
  });
  SPCCBH.associate = function(models) {
    // associations can be defined here
  };
  return SPCCBH;
};
