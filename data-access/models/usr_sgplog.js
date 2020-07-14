'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_SGPLOG = sequelize.define('USR_SGPLOG', {
        USR_SGPLOG_NROROW: { type: DataTypes.INTEGER, primaryKey: true },
        USR_SGPLOG_NROCTA: DataTypes.STRING,
        USR_SGPLOG_CODIGO: DataTypes.STRING,
        USR_SGPLOG_VALORA: DataTypes.INTEGER,
        USR_SG_FECALT: DataTypes.STRING,
        USR_SG_FECMOD: DataTypes.STRING
    }, {
        tableName: 'USR_SGPLOG',
        timestamps: false,
        freezeTableName: true,
        hasTrigger: true
    });
    USR_SGPLOG.associate = function(models) {
        // associations can be defined here
    };
    return USR_SGPLOG;
    USR_SGPLOG.removeAttribute('id');
};