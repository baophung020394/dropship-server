const { authJwt } = require("../middlewares");
const controller = require("../controllers/category/category.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/api/category/list",
  [
    authJwt.verifyToken
  ],
  controller.listCategories);

  app.post(
    "/api/category/create",
    [authJwt.verifyToken],
    controller.createCategory
  );
  // , authJwt.isAdmin
  app.delete(
    "/api/category/delete",
    [authJwt.verifyToken],
    controller.deleteCategory
  );
};