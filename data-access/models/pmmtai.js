'use strict';
module.exports = (sequelize, DataTypes) => {
    const PMMTAI = sequelize.define('PMMTAI', {
        PMMTAI_CODPRO: DataTypes.STRING,
        PMMTAI_CODTAR: DataTypes.STRING,
        PMMTAI_TIPREL: DataTypes.STRING,
        PMMTAI_RELPRO: DataTypes.STRING,
        PMMTAI_RELTAR: DataTypes.STRING,
        PMMTAI_ORDENC: DataTypes.INTEGER
    }, {
        tableName: 'PMMTAI',
        timestamps: false,
        freezeTableName: true
    });
    PMMTAI.associate = function(models) {
        // associations can be defined here
    };
    return PMMTAI;
};