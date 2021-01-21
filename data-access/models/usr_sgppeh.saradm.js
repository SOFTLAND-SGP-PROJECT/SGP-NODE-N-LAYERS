'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_SGPPEH = sequelize.define('USR_SGPPEH', {
        USR_SGPPEH_CODIGO: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPPEH_DESCRP: DataTypes.STRING,
        USR_SGPPEH_AVATAR: DataTypes.STRING,
        USR_SGPPEH_NROCTA: DataTypes.STRING,
        USR_SGPPEH_INACTI: DataTypes.STRING,
        USR_SG_FECALT: DataTypes.DATE,
        USR_SG_FECMOD: DataTypes.DATE,
        USR_SG_USERID: DataTypes.STRING,
        USR_SG_DEBAJA: DataTypes.STRING
    }, {
        tableName: 'USR_SGPPEH',
        timestamps: false,
        freezeTableName: true
    });
    USR_SGPPEH.associate = function(models) {
        // associations can be defined here
    };
    return USR_SGPPEH;
};