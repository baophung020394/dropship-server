const db = require("../../models/index");
const configdb = require("../../config/db.config");
const Category = db.category;
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
exports.listCategories = (req, res) => {
  Category.findAll()
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
            text: "Không có category"
          }
        })
      }
    })
};
exports.createCategory = (req, res) => {
  Category.create({
    categoryName: req.body.categoryName
  })
    .then(category => {
      if(category) {
        res.json({
          status: 200,
          message: "success",
          result: category
        })
      }
      else {
        res.json({
          status: 400,
          message: "fail",
          result: {
            text: "Tạo category thất bại"
          }
        })
      }
    })
  
};

exports.deleteCategory = (req, res) => {
  Category.destroy({
    where: {
      idCategory: req.body.idCategory
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