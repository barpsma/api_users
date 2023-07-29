const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const server = require("http").createServer(app);
require("dotenv").config();
// const port = 3000
const port = process.env.PORT;
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const bodyParser = require("body-parser");
const Route = require("./route/route");
const RouteLogin = require("./route/routelogin");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use("/api/users/", Route);
app.use("/api/", RouteLogin);

app.listen(port, () => console.log(`listening port ${port}`));

module.exports = server;
