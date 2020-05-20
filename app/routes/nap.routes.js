const { authJwt } = require("../middlewares");
const controller = require("../controllers/nap/nap.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.post("/api/nap/create",
  [
    authJwt.verifyToken
  ],
  controller.napCreate);

  app.get("/api/nap/list",
    [
      authJwt.verifyToken
    ],
    controller.listNap
  );

  app.delete(
    "/api/nap/delete",
    [
      authJwt.verifyToken
    ],
    controller.deleteNap
  );
};