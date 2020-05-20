const db = require("../../models/index");
const Product = db.product;
const configdb = require("../../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  configdb.DB,
  configdb.USER,
  configdb.PASSWORD,
  {
    host: configdb.HOST,
    dialect: configdb.dialect,
    operatorsAliases: false,

    pool: {
      max: configdb.pool.max,
      min: configdb.pool.min,
      acquire: configdb.pool.acquire,
      idle: configdb.pool.idle
    }
  }
);

exports.listProduct = (req, res) => {
  Product.findAll()
    .then(list => {
      if(list) {
        res.json({
          status: 200,
          message: "success",
          result: {
            result_list: list,
            text: "Danh sách sản phẩm"
          }
        })
      } else {
        res.json({
          status: 400,
          message: "fail",
          result: {
            text: "Không có sản phẩm"
          }
        })
      }
    })
};
exports.createProduct = (req, res) => {
  Product.create({
    productName: req.body.productName,
    unitPrice: req.body.unitPrice,
    dealPrice: req.body.dealPrice,
    SKU: req.body.SKU,
    qualityProduct: req.body.qualityProduct,
    imageProduct: req.body.imageProduct,
    typeImage: req.body.typeImage,
    dataImage: req.body.dataImage,
    idCategory: req.body.idCategory
  })
    .then(product => {
      if(product) {
        res.json({
          status: 200,
          message: "success",
          result: product
        })
      }
      else {
        res.json({
          status: 400,
          message: "fail",
          result: {
            text: "Tạo sản phẩm thất bại"
          }
        })
      }
    })
  
};

exports.deleteProduct = (req, res) => {
    console.log(req.body.idProduct)
  Product.destroy({
    where: {
        idProduct: req.body.idProduct
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