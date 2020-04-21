'use strict';
module.exports = (sequelize, DataTypes) => {
  const USR_SPWEBNOVEDADES = sequelize.define('USR_SPWEBNOVEDADES', {
    USR_SPWEBNOVEDADES_NOVEDAD: {type: DataTypes.STRING, primaryKey:true},
    USR_SPWEBNOVEDADES_DESCNOVEDA: DataTypes.STRING,
    USR_SP_FECALT: DataTypes.DATE,
    USR_SP_FECMOD: DataTypes.DATE,
    USR_SP_DEBAJA: DataTypes.STRING,
    USR_SPWEBNOVEDADES_USERID: DataTypes.STRING,
    USR_SPWEBNOVEDADES_NROCTA: DataTypes.STRING
  }, {
    tableName: 'USR_SPWEBNOVEDADES',
    timestamps: false,
    freezeTableName: true
  });
  USR_SPWEBNOVEDADES.associate = function(models) {
    // associations can be defined here
  };
  return USR_SPWEBNOVEDADES;
};
