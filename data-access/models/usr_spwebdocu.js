'use strict';
module.exports = (sequelize, DataTypes) => {
  const USR_SPWEBDOCU = sequelize.define('USR_SPWEBDOCU', {
    USR_SPWEBDOCU_NOMBREDOC: {type: DataTypes.STRING, primaryKey: true },
    USR_SPWEBDOCU_DESCRPDOC: DataTypes.STRING,
    USR_SPWEBDOCU_URLDOC: DataTypes.STRING,
    USR_SP_FECALT: DataTypes.DATE,
    USR_SP_ULTOPR: DataTypes.STRING,
    USR_SP_DEBAJA: DataTypes.STRING,
    USR_SP_MODULE: DataTypes.STRING,
    USR_SPWEBDOCU_NROCTA: DataTypes.STRING
  }, {
    tableName: 'USR_SPWEBDOCU',
    timestamps: false,
    freezeTableName: true
  });
  USR_SPWEBDOCU.associate = function(models) {
    // associations can be defined here
  };
  return USR_SPWEBDOCU;
};
