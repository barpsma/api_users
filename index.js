const express = require("express");
const app = express();
require("dotenv").config();
// const port = 3000
const port = process.env.PORT;
const bodyParser = require("body-parser");
const Route = require("./route/route");
const RouteLogin = require("./route/routelogin");
// const swaggerJSON = require('./openapi_bingle.json')
// const swaggerUI = require('swagger-ui-express')

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

// app.get('/', (req,res)=> res.send('halo dunia'))
app.use("/api/users/", Route);
app.use("/api/", Route);

app.listen(port, () => console.log(`listening port ${port}`));
