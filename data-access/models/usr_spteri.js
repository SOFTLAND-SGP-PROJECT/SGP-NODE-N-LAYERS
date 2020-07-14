'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_SPTERI = sequelize.define('USR_SPTERI', {
        USR_SPTERI_CODIGO: { type: DataTypes.STRING, primaryKey: true },
        USR_SPTERI_NROITM: { type: DataTypes.INTEGER, primaryKey: true },
        USR_SPTERI_TEXTOS: DataTypes.TEXT,
        USR_SPTERI_CCLASS: DataTypes.INTEGER,
        USR_SPTERI_BMPBMP: DataTypes.STRING,
        USR_SP_FECALT: DataTypes.DATEONLY,
        USR_SP_FECMOD: DataTypes.DATEONLY,
        USR_SP_USERID: DataTypes.STRING,
        USR_SP_ULTOPR: DataTypes.STRING,
        USR_SP_DEBAJA: DataTypes.STRING,
        USR_SP_OALIAS: DataTypes.STRING
    }, {
        tableName: 'USR_SPTERI',
        timestamps: false,
        freezeTableName: true,
        hasTrigger: true
    });
    USR_SPTERI.associate = function(models) {
        // associations can be defined here
        USR_SPTERI.belongsTo(models.USR_SPTERH, {
            as: 'header',
            foreignKey: 'USR_SPTERI_CODIGO',
            targetKey: 'USR_SPTERH_CODIGO'
        });
    };
    return USR_SPTERI;
};