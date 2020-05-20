const db = require("../../models/index");
const Nap = db.nap;
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

exports.listNap = (req, res) => {
  Nap.findAll()
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
            text: "Không có yêu cầu nạp"
          }
        })
      }
    })
};

exports.napCreate = (req, res) => {
  Nap.create({
    soTienNap: req.body.soTienNap,
    maNap: req.body.maNap,
    status: req.body.status,
  })
    .then(nap => {
      if(nap) {
        res.json({
            status: 200,
            message: "success",
            result: {
                result_nap: nap,
                text: "Nạp thành công"
            }
        })
      }
      else {
        res.json({
          status: 400,
          message: "fail",
          result: {
            text: "Nạp thất bại"
          }
        })
      }
    })
  
};

exports.deleteNap = (req, res) => {
  Nap.destroy({
    where: {
        idNap: req.body.idNap
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