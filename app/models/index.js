const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user/user.model.js")(sequelize, Sequelize);
db.role = require("../models/user/role.model.js")(sequelize, Sequelize);
db.category = require("../models/category/category.model.js")(sequelize, Sequelize);
db.product = require("../models/product/product.model.js")(sequelize, Sequelize);
db.order = require("../models/order/order.model.js")(sequelize, Sequelize);
db.nap = require("../models/nap/nap.model.js")(sequelize, Sequelize);
db.rut = require("../models/rut/rut.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
// db.category.belongsToMany(db.product, {
//   through: "product",
//   foreignKey: "idCategory"
// });

db.ROLES = ["admin", "member"];

module.exports = db;