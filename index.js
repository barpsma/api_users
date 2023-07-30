const express = require("express");
const app = express();
const server = require("http").createServer(app);
require("dotenv").config();
// const port = 3000
const port = process.env.PORT;
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

// app.listen(port, () => console.log(`listening port ${port}`));
if (process.env.NODE_ENV !== "test") {
  server.listen(port, () => {
    console.log("server running in port " + port);
  });
}

module.exports = server;
