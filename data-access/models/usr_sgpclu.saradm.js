'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_SGPCLU = sequelize.define('USR_SGPCLU', {
        USR_SGPCLU_NROCTA: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPCLU_SGPUID: { type: DataTypes.STRING, primaryKey: true },
        USR_SGPCLU_CODCON: DataTypes.STRING,
        USR_SGPCLU_SGPPWD: DataTypes.STRING,
        USR_SGPCLU_SGPIMG: DataTypes.STRING,
        USR_SGPCLU_SGPLOG: DataTypes.DATE,
        USR_SGPCLU_INACTI: DataTypes.STRING,
        USR_SG_FECALT: DataTypes.DATE,
        USR_SG_FECMOD: DataTypes.DATE,
        USR_SG_USERID: DataTypes.STRING,
        USR_SG_DEBAJA: DataTypes.STRING
    }, {
        tableName: 'USR_SGPCLU',
        timestamps: false,
        freezeTableName: true
    });
    USR_SGPCLU.associate = function(models) {
        // associations can be defined here
    };
    return USR_SGPCLU;
};