const db = require("../../models/index");
const Order = db.order;
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

exports.listOrder = (req, res) => {
  Order.findAll()
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
            text: "Không có đơn hàng nào"
          }
        })
      }
    })
};

exports.createOrder = (req, res) => {
  Order.create({
    maDonHang: req.body.maDonHang,
    nameReceive: req.body.nameReceive,
    phoneReceive: req.body.phoneReceive,
    addressReceive: req.body.addressReceive,
    city: req.body.city,
    qualityProduct: req.body.qualityProduct,
    nameProduct: req.body.nameProduct,
    maVanDon: req.body.maVanDon,
    hinhThucDropShip: req.body.hinhThucDropShip,
    pay: req.body.pay,
    totalPay: req.body.totalPay,
    status: req.body.status,
    note: req.body.note,
  })
    .then(order => {
      if(order) {
        res.json({
          status: 200,
          message: "success",
          result: order
        })
      }
      else {
        res.json({
          status: 400,
          message: "fail",
          result: {
            text: "Tạo đơn hàng thất bại"
          }
        })
      }
    })
  
};

exports.deleteOrder = (req, res) => {
    console.log(req.body.idProduct)
  Order.destroy({
    where: {
        maDonHang: req.body.maDonHang
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