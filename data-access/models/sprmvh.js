'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPRMVH = sequelize.define('SPRMVH', {
    SPRMVH_MODFOR: {type: DataTypes.STRING, primaryKey: true},
    SPRMVH_CODFOR: {type: DataTypes.STRING, primaryKey: true},
    SPRMVH_NROFOR: {type: DataTypes.INTEGER, primaryKey: true},
    SPRMVH_FCHMOV: DataTypes.DATEONLY,
    SPRMVH_TIPCLA: DataTypes.STRING,
    SPRMVH_CODSUB: DataTypes.STRING,
    SPRMVH_TIPDES: DataTypes.STRING,
    SPRMVH_ESTACT: DataTypes.STRING,
    SPRMVH_TIPHAS: DataTypes.STRING,
    SPRMVH_ESTNEW: DataTypes.STRING,
    SPRMVH_CLASIF: DataTypes.STRING,
    SPRMVH_DESCRP: DataTypes.TEXT,
    SPRMVH_NROCTA: DataTypes.STRING,
    SPRMVH_FCHREQ: DataTypes.DATE,
    SPRMVH_FCHLIM: DataTypes.DATE,
    SPRMVH_NROINT: DataTypes.INTEGER,
    SPRMVH_APLARE: DataTypes.STRING,
    SPRMVH_APLCOD: DataTypes.STRING,
    SPRMVH_PEDARE: DataTypes.STRING,
    SPRMVH_PEDRES: DataTypes.STRING,
    SPRMVH_USERNT: DataTypes.STRING,
    SPRMVH_REFERE: DataTypes.STRING,
    SPRMVH_DIRCOR: DataTypes.TEXT,
    SPRMVH_CODTEM: DataTypes.STRING,
    SPRMVH_CODPRI: DataTypes.STRING,
    SPRMVH_OLEOLE: DataTypes.TEXT,
    SPRMVH_TARREL: DataTypes.STRING,
    SPRMVH_CODTAR: DataTypes.STRING,
    SPRMVH_PORCEN: DataTypes.FLOAT,
    SPRMVH_DESFUN: DataTypes.TEXT,
    SPRMVH_OBSERV: DataTypes.TEXT,
    SPRMVH_NROITM: DataTypes.INTEGER,
    SPRMVH_ORDENX: DataTypes.INTEGER,
    SPRMVH_TIPASG: DataTypes.STRING,
    SPRMVH_HORNOV: DataTypes.STRING,
    SPRMVH_ORIPRO: DataTypes.STRING,
    SPRMVH_NROSUB: DataTypes.STRING,
    SPRMVH_MODORI: DataTypes.STRING,
    SPRMVH_CODORI: DataTypes.STRING,
    SPRMVH_NROORI: DataTypes.INTEGER,
    SPRMVH_MANFCH: DataTypes.STRING,
    SPRMVH_CANASG: DataTypes.INTEGER,
    SPRMVH_CTRLIN: DataTypes.STRING,
    SPRMVH_CTACON: DataTypes.STRING,
    SPRMVH_CONTAC: DataTypes.STRING,
    SPRMVH_CODEMP: DataTypes.STRING,
    SPRMVH_EMPORI: DataTypes.STRING,
    SPRMVH_NEWCTO: DataTypes.STRING,
    SPRMVH_RIESGO: DataTypes.STRING,
    SPRMVH_FCHDES: DataTypes.DATE,
    SPRMVH_MAILCP: DataTypes.STRING,
    USR_SPRMVH_CORORT: DataTypes.STRING,
    USR_SPRMVH_USAOBJ: DataTypes.STRING,
    USR_SPRMVH_TIPCLA: DataTypes.STRING,
    USR_SPRMVH_CODATR: DataTypes.STRING,
    USR_SPRMVH_VALATR: DataTypes.STRING,
    USR_SPRMVH_TIPPRO: DataTypes.INTEGER,
    USR_SPRMVH_TIPAPL: DataTypes.INTEGER,
    USR_SPRMVH_OCURRE: DataTypes.INTEGER,
    USR_SPRMVH_CALIFI: DataTypes.STRING,
    USR_SPRMVH_CLIENT: DataTypes.STRING,
    USR_SPRMVH_ITM: DataTypes.INTEGER,
    USR_SPRMVH_CANAL: DataTypes.STRING,
    USR_SPRMVH_VALORD: DataTypes.INTEGER,
    USR_SPRMVH_TIPGSL: DataTypes.INTEGER,
    USR_SPRMVH_PRIGSL: DataTypes.INTEGER,
    USR_SPRMVH_CALGSL: DataTypes.INTEGER,
    USR_SPRMVH_UANCAR: DataTypes.STRING,
    USR_SPRMVH_ANCARA: DataTypes.TEXT,
    USR_SPRMVH_CTAPRO: DataTypes.STRING,
    USR_SPRMVH_CODPRO: DataTypes.STRING,
    USR_SPRMVH_OLEPRO: DataTypes.STRING,
    SPRMVH_RELEAS: DataTypes.STRING,
    SPRMVH_OBSCLI: DataTypes.TEXT,
    SPRMVH_TITULO: DataTypes.STRING
  },{
    getterMethods   : {
          SLSPGetFchLim       : function()  {
            let result = "";
            //
            // if(((['007OK', '007CDR', '007APR'].indexOf(this.SPRMVI_ESTNEW)>0 || this.SPRMVI_ESTNEW >= '008APR') && ['025', '025CLI'].indexOf(this.SPRMVI_ESTNEW) == -1 && this.SPRMVI_ESTNEW <= '100')|| this.SPRMVI_ESTNEW ='PRE'){
            //   result = this.SPRMVI_FCHLIM;
            // }
            // if( ['007', '007NDR', '007NOK', '007TST'].indexOf(this.SPRMVI_ESTNEW)>0 || ['006OK', '006NOK', '006APR', '005', '004', '025', '025CLI', '200'].indexOf(this.SPRMVI_ESTNEW)>0 ){
            //   result = null;
            // }
            //
            // return result
          }
    },
    setterMethods   : {
    fullName       : function(value) {
        // var names = value.split(' ');
        // this.setDataValue('firstname', names.slice(0, -1).join(' '));
        // this.setDataValue('lastname', names.slice(-1).join(' '));
      }
    },
    tableName: 'SPRMVH',
    timestamps: false,
    freezeTableName: true
  });
  SPRMVH.associate = function(models) {
    // SPRMVH.belongsToMany(models.SPRMVI,{});
  };
  return SPRMVH;
  //PRMVH.removeAttribute('id');
};
