'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_SGPMEH = sequelize.define('USR_SGPMEH', {
        USR_SGPMEH_CODOBJ: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPMEH_DESCRP: DataTypes.STRING,
        USR_SGPMEH_SLICON: DataTypes.STRING,
        USR_SGPMEH_URLURL: DataTypes.STRING,
        USR_SGPMEH_NIVELO: DataTypes.INTEGER,
        USR_SG_FECALT: DataTypes.DATE,
        USR_SG_FECMOD: DataTypes.DATE,
        USR_SG_USERID: DataTypes.STRING,
        USR_SG_DEBAJA: DataTypes.STRING
    }, {
        tableName: 'USR_SGPMEH',
        timestamps: false,
        freezeTableName: true
    });
    USR_SGPMEH.associate = function(models) {
        // associations can be defined here
    };
    return USR_SGPMEH;
};