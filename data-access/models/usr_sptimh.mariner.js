'use strict';
module.exports = (sequelize, DataTypes) => {
  const USR_SPTIMH = sequelize.define('USR_SPTIMH', {
    USR_SPTIMH_CODIGO: {type: DataTypes.STRING, primaryKey:true},
    USR_SPTIMH_DESCRP: DataTypes.STRING
  }, {
    tableName: 'USR_SPTIMH',
    timestamps: false,
    freezeTableName: true
  });
  USR_SPTIMH.associate = function(models) {
    // associations can be defined here
  };
  return USR_SPTIMH;
  USR_SPTIMH.removeAttribute('id');
};
