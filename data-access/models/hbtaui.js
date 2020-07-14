'use strict';
module.exports = (sequelize, DataTypes) => {
  const HBTAUI = sequelize.define('HBTAUI', {
    HBTAUI_USRCOD: {type: DataTypes.STRING, primaryKey: true },
    HBTAUI_NROCTA: {type: DataTypes.STRING, primaryKey: true },
    HBTAUI_NROSUC: {type: DataTypes.STRING, primaryKey: true },
    HBTAUI_NROMOV: {type: DataTypes.STRING, primaryKey: true },
    HBTAUI_CODTOK: DataTypes.STRING,
    HBTAUI_MOTIVO: DataTypes.STRING,
    HBTAUI_OBSERV: DataTypes.STRING,
    HBTAUI_STATUS: DataTypes.STRING,
    HBTAUI_FCHMOV: DataTypes.DATE,
    HBTAUI_OBSINT: DataTypes.STRING,
    HBTAUI_MODNOV: DataTypes.STRING,
    HBTAUI_DRMAIL: DataTypes.STRING,
    HBTAUI_CONVNC: DataTypes.STRING,
    HBTAUI_FCHVNC: DataTypes.DATE
  }, {
    tableName: 'HBTAUI',
    timestamps: false,
    freezeTableName: true
  });
  HBTAUI.associate = function(models) {
    // associations can be defined here
  };
  return HBTAUI;
};
