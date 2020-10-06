'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_SGPCLP = sequelize.define('USR_SGPCLP', {
        USR_SGPCLP_NROCTA: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPCLP_SGPUID: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPCLP_PERFIL: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPCLP_INACTI: DataTypes.STRING,
        USR_SG_FECALT: DataTypes.DATE,
        USR_SG_FECMOD: DataTypes.DATE,
        USR_SG_USERID: DataTypes.STRING,
        USR_SG_DEBAJA: DataTypes.STRING
    }, {
        tableName: 'USR_SGPCLP',
        timestamps: false,
        freezeTableName: true
    });
    USR_SGPCLP.associate = function(models) {
        // associations can be defined here
    };
    return USR_SGPCLP;
};