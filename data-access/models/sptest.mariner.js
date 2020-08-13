'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPTEST = sequelize.define('SPTEST', {
    SPTEST_TIPCLA: {type:DataTypes.STRING, primaryKey: true},
    SPTEST_CODEST: {type:DataTypes.STRING, primarykey: true},
    SPTEST_DESCRP: {type:DataTypes.STRING, primarykey: true},
    SPTEST_AGREST: DataTypes.STRING,
    USR_SPTEST_DESCCL: DataTypes.STRING,
    USR_SPTEST_ACCION: DataTypes.STRING,
    USR_SPTEST_DESGSL: DataTypes.STRING,
    USR_SPTEST_DSCICN: DataTypes.STRING,
    USR_SPTEST_DSCCLR: DataTypes.STRING
  }, {
    tableName: 'SPTEST',
    timestamps: false,
    freezeTableName: true
  });
  SPTEST.associate = function(models) {
    // associations can be defined here
  };
  return SPTEST;
  SPTEST.removeAttribute('id');
};
