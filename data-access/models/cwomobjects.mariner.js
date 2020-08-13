// XXX: 'use strict';
module.exports = (sequelize, DataTypes) => {
    const CWOMOBJECTS = sequelize.define('CWOMOBJECTS', {
        name: { type: DataTypes.STRING, primaryKey: true },
        class: { type: DataTypes.INTEGER, primaryKey: true },
        description_arg: DataTypes.STRING,
        visible: DataTypes.INTEGER,
        helpcontextid: DataTypes.INTEGER,
        modulename: DataTypes.STRING,
        areaname: DataTypes.STRING,
        description_bra: DataTypes.STRING,
        description_usa: DataTypes.STRING,
        description_deu: DataTypes.STRING,
        description_fra: DataTypes.STRING,
        internalid: DataTypes.STRING,
        description_per: DataTypes.STRING,
        description_ecu: DataTypes.STRING,
        owner: DataTypes.INTEGER
    }, {
        tableName: 'CWOMOBJECTS',
        timestamps: false,
        freezeTableName: true
    });
    CWOMOBJECTS.associate = function(models) {
        // associations can be defined here
    };
    return CWOMOBJECTS;
    CWOMOBJECTS.removeAttribute('id');
};