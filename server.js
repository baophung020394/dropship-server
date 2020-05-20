const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// function initial() {
//   Role.create({
//     id: 1,
//     name: "admin"
//   });
 
//   Role.create({
//     id: 2,
//     name: "member"
//   });
// }

var corsOption = {
    // origin: "http://localhost:8081"
}

app.use(cors(corsOption));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/category.routes')(app);
require('./app/routes/product.routes')(app);
require('./app/routes/order.routes')(app);
require('./app/routes/nap.routes')(app);
require('./app/routes/rut.routes')(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});






// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});