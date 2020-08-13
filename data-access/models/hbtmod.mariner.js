'use strict';
module.exports = (sequelize, DataTypes) => {
  const HBTMOD = sequelize.define('HBTMOD', {
    HBTMOD_MODULO: {type: DataTypes.STRING, primaryKey: true },
    HBTMOD_DESCRP: DataTypes.STRING,
    HBTMOD_TIPMOD: DataTypes.STRING
  }, {
    getterMethods: {
    fullName: function () {
        return this.getDataValue('HBTMOD_MODULO') + ' ' + this.getDataValue('HBTMOD_DESCRP')
      }
    },
    tableName: 'HBTMOD',
    timestamps: false,
    freezeTableName: true
  });
  HBTMOD.associate = function(models) {
    // associations can be defined here
  };
  return HBTMOD;
  HBTMOD.removeAttribute('id');
};
