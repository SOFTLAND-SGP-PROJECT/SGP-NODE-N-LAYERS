'use strict';
module.exports = (sequelize, DataTypes) => {
  const USR_SPTOCH = sequelize.define('USR_SPTOCH', {
    USR_SPTOCH_CODIGO: {type: DataTypes.STRING, primaryKey:true},
    USR_SPTOCH_DESCRP: DataTypes.STRING
  }, {
    tableName: 'USR_SPTOCH',
    timestamps: false,
    freezeTableName: true
  });
  USR_SPTOCH.associate = function(models) {
    // associations can be defined here
  };
  return USR_SPTOCH;
    USR_SPTOCH.removeAttribute('id');
};
