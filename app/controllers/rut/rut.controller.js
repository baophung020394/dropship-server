const db = require("../../models/index");
const Rut = db.rut;
// const configdb = require("../../config/db.config");
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   configdb.DB,
//   configdb.USER,
//   configdb.PASSWORD,
//   {
//     host: configdb.HOST,
//     dialect: configdb.dialect,
//     operatorsAliases: false,

//     pool: {
//       max: configdb.pool.max,
//       min: configdb.pool.min,
//       acquire: configdb.pool.acquire,
//       idle: configdb.pool.idle
//     }
//   }
// );

exports.listRut = (req, res) => {
  Rut.findAll()
    .then(list => {
      if(list) {
        res.json({
          status: 200,
          message: "success",
          result: list
        })
      } else {
        res.json({
          status: 400,
          message: "fail",
          result: {
            text: "Không có yêu cầu rút"
          }
        })
      }
    })
};

exports.rutCreate = (req, res) => {
  Rut.create({
    soTienRut: req.body.soTienRut,
    bankName: req.body.bankName,
    accountName: req.body.accountName,
    accountNumber: req.body.accountNumber,
    momo: req.body.momo
  })
    .then(rut => {
      if(rut) {
        res.json({
            status: 200,
            message: "success",
            result: {
                result_rut: rut,
                text: "Rút thành công"
            }
        })
      }
      else {
        res.json({
          status: 400,
          message: "fail",
          result: {
            text: "Rút thất bại"
          }
        })
      }
    })
  
};

exports.deleteRut = (req, res) => {
  Rut.destroy({
    where: {
        idRut: req.body.idRut
    }
  }).then(del => {
    if(del) {
      res.json({
        status: 200,
        message: "success",
        result: del
      })
    }
    else {
      res.json({
        status: 400,
        message: "fail",
        result: []  
      })
    }
  })
}