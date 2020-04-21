'use strict';
module.exports = (sequelize, DataTypes) => {
    const USR_SPTERH = sequelize.define('USR_SPTERH', {
        USR_SPTERH_CODIGO: { type: DataTypes.STRING, primaryKey: true },
        USR_SPTERH_DESCRP: DataTypes.STRING,
        USR_SPTERH_TEXTOS: DataTypes.TEXT,
        USR_SPTERH_CCLASS: DataTypes.INTEGER,
        USR_SPTERH_MODULO: DataTypes.STRING,
        USR_SPTERH_OBJETO: DataTypes.STRING,
        USR_SPTERH_MODFOR: DataTypes.STRING,
        USR_SPTERH_CODFOR: DataTypes.STRING,
        USR_SPTERH_NROFOR: DataTypes.INTEGER,
        USR_SPTERH_TIPPUB: DataTypes.STRING,
        USR_SPTERH_VRSION: DataTypes.INTEGER,
        USR_SPTERH_FCHLIB: DataTypes.DATEONLY,
        USR_SPTERH_CCOWNER: DataTypes.INTEGER,
        USR_SP_FECALT: DataTypes.DATEONLY,
        USR_SP_FECMOD: DataTypes.DATEONLY,
        USR_SP_USERID: DataTypes.STRING,
        USR_SP_ULTOPR: DataTypes.STRING,
        USR_SP_DEBAJA: DataTypes.STRING,
        USR_SP_OALIAS: DataTypes.STRING
    }, {
        tableName: 'USR_SPTERH',
        timestamps: false,
        freezeTableName: true,
        hasTrigger: true
    });
    USR_SPTERH.associate = function(models) {
        // associations can be defined here
        USR_SPTERH.hasMany(models.USR_SPTERI, {
            as: 'items',
            foreignKey: 'USR_SPTERI_CODIGO'
        });
    };
    return USR_SPTERH;
    USR_SPTERH.removeAttribute('id');
};