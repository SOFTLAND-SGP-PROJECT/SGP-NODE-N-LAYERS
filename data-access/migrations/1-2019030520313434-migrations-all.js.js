'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "CWOMOBJECTS", deps: []
 * createTable "HBTAUI", deps: []
 * createTable "HBTMOD", deps: []
 * createTable "PMMTAI", deps: []
 * createTable "SPCCBH", deps: []
 * createTable "SPRMVH", deps: []
 * createTable "SPRMVI", deps: []
 * createTable "SPRMVP", deps: []
 * createTable "SPTARH", deps: []
 * createTable "SPTARR", deps: []
 * createTable "SPTARV", deps: []
 * createTable "SPTCII", deps: []
 * createTable "SPTEST", deps: []
 * createTable "SPTTPS", deps: []
 * createTable "USR_SPTERH", deps: []
 * createTable "USR_SPTERI", deps: []
 * createTable "USR_SPTIMH", deps: []
 * createTable "USR_SPTOCH", deps: []
 * createTable "USR_SPTVER", deps: []
 * createTable "USR_SPWEBDOCU", deps: []
 * createTable "USR_SPWEBNOVEDADES", deps: []
 * createTable "VTMCLC", deps: []
 * createTable "VTMCLH", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "2019030520313434-migrations-all.js",
    "created": "2020-03-05T23:31:55.655Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "CWOMOBJECTS",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "HBTAUI",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "HBTMOD",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "PMMTAI",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPCCBH",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPRMVH",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPRMVI",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPRMVP",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPTARH",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPTARR",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPTARV",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPTCII",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPTEST",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SPTTPS",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "USR_SPTERH",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "USR_SPTERI",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "USR_SPTIMH",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "USR_SPTOCH",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "USR_SPTVER",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "USR_SPWEBDOCU",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "USR_SPWEBNOVEDADES",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "VTMCLC",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "VTMCLH",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize) {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length) {
                    let command = migrationCommands[index];
                    console.log("[#" + index + "] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                } else
                    resolve(

                        queryInterface.addColumn(
                            'USR_SPTERH',
                            'USR_SPTERH_CCLASS', {
                                type: Sequelize.INTEGER
                            }
                        ),
                        queryInterface.addColumn(
                            'USR_SPTERH',
                            'USR_SPTERH_CCOWNER', {
                                type: Sequelize.INTEGER
                            }
                        ),
                        queryInterface.addColumn(
                            'USR_SPTERI',
                            'USR_SPTERI_CCLASS', {
                                type: Sequelize.INTEGER
                            }
                        )
                    );
            }
            next();
        });
    },
    info: info
};