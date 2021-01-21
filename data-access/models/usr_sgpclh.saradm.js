'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_SGPCLH = sequelize.define('USR_SGPCLH', {
        USR_SGPCLH_NROCTA: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPCLH_SGPIMG: DataTypes.STRING,
        USR_SP_FECALT: DataTypes.DATE,
        USR_SP_FECMOD: DataTypes.DATE,
        USR_SP_USERID: DataTypes.STRING,
        USR_SP_DEBAJA: DataTypes.STRING
    }, {
        tableName: 'USR_SGPCLH',
        timestamps: false,
        freezeTableName: true
    });
    USR_SGPCLH.associate = function(models) {
        // associations can be defined here
    };
    return USR_SGPCLH;
};