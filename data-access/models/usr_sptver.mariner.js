//'use strict';
module.exports = (sequelize, DataTypes) => {
  const USR_SPTVER = sequelize.define('USR_SPTVER', {
    USR_SPTVER_CODIGO: {type: DataTypes.STRING, primaryKey:true},
    USR_SPTVER_DESCRP: DataTypes.STRING
  }, {
    tableName: 'USR_SPTVER',
    timestamps: false,
    freezeTableName: true
  });
  USR_SPTVER.associate = function(models) {
    // associations can be defined here
  };
  return USR_SPTVER;
  USR_SPTVER.removeAttribute('id');
};
