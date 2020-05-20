const { authJwt } = require("../middlewares");
const controller = require("../controllers/rut/rut.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.post("/api/rut/create",
  [
    authJwt.verifyToken
  ],
  controller.rutCreate);

  app.get("/api/rut/list",
    [
      authJwt.verifyToken
    ],
    controller.listRut
  );

  app.delete(
    "/api/rut/delete",
    [
      authJwt.verifyToken
    ],
    controller.deleteRut
  );
};