const { authJwt } = require("../middlewares");
const controller = require("../controllers/user/user.controller");
const controller2 = require("../controllers/category/category.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // app.get("/api/category/list",
  // [
  //   authJwt.verifyToken, authJwt.isAdmin
  // ],
  // controller2.listCategories);

  app.get(
    "/api/user/user-detail",
    [
      authJwt.verifyToken, authJwt.isAdmin
    ],
    controller.userBoard
  );

  app.get(
    "/api/user/mem-list",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.memberBoard
  );
  
  // app.get(
  //   "/api/user/mem", function(req, res) {
  //     res.send("User Content.");
  //   }
  // );

  app.get(
    "/api/user/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};