'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_SGPPEI = sequelize.define('USR_SGPPEI', {
        USR_SGPPEI_CODIGO: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPPEI_CODOBJ: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPPEI_INACTI: DataTypes.STRING,
        USR_SG_FECALT: DataTypes.DATE,
        USR_SG_FECMOD: DataTypes.DATE,
        USR_SG_USERID: DataTypes.STRING,
        USR_SG_DEBAJA: DataTypes.STRING
    }, {
        tableName: 'USR_SGPPEI',
        timestamps: false,
        freezeTableName: true
    });
    USR_SGPPEI.associate = function(models) {
        // associations can be defined here
    };
    return USR_SGPPEI;
};