'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_VTMTEP = sequelize.define('USR_VTMTEP', {
        USR_VTMTEP_TIPENC: { type: DataTypes.STRING, primaryKey: true },
        USR_VTMTEP_NROPRE: { type: DataTypes.INTEGER, primaryKey: true },
        USR_VTMTEP_DESCRP: DataTypes.STRING,
        USR_VTMTEP_TEXTOS: DataTypes.STRING,
        USR_VTMTEP_VALPRE: DataTypes.INTEGER,
        USR_VTMTEP_EQUIEX: DataTypes.STRING
    }, {
        tableName: 'USR_SPWEBNOVEDADES',
        timestamps: false,
        freezeTableName: true
    });
    USR_VTMTEP.associate = function(models) {
        // associations can be defined here
    };
    return USR_VTMTEP;
};