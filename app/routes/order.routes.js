const { authJwt } = require("../middlewares");
const controller = require("../controllers/order/order.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.post("/api/order/create",
  [
    authJwt.verifyToken
  ],
  controller.createOrder);

  app.get("/api/order/list",
    [
      authJwt.verifyToken
    ],
    controller.listOrder
  );

  app.delete(
    "/api/order/delete",
    [
      authJwt.verifyToken
    ],
    controller.deleteOrder
  );
};