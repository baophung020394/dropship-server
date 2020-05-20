const { authJwt } = require("../middlewares");
let express = require('express');
const controller = require("../controllers/product/product.controller");
let router = express.Router();
let upload = require('../config/multer.config');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.post("/api/product/create",
  [
    authJwt.verifyToken
  ],
  controller.createProduct);

  app.get("/api/product/list",
  [
    authJwt.verifyToken
  ],
  controller.listProduct);

  app.delete(
    "/api/product/delete",
    [
      authJwt.verifyToken
    ],
    controller.deleteProduct
  );
};