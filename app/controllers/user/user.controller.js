const db = require("../../models/index");
const configdb = require("../../config/db.config");
const config = require("../../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
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



exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
exports.userBoard = (req, res) => {
    
    // console.log(res.value())
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.memberBoard = (req, res) => {
    sequelize
        .query(
            'SELECT r.name, r.id, u.full_name, ur.roleId, ur.userId FROM users as u JOIN user_roles as ur ON u.Id = ur.userId JOIN roles as r ON r.id = ur.roleId '
        , { raw: false, type: sequelize.QueryTypes.SELECT  })
        .then(users => {
            // users.forEach(user => {
            //     console.log(user.full_name)
                
            // })
            res.json({
                status: 200,
                message: "success",
                result: users
            })
        })
};
