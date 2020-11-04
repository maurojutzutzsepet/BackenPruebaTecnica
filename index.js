const connection = require("./dbconection");
const { FiscaliaModel } = require("./models/fiscalias.model");

express = require("express");
bodyParser = require("body-parser");

const requestIp = require("request-ip");
const routes = require("./routes");

async function dbConection() {
  try {
    await connection.sequelize.authenticate();
    console.log("succes conection DB");
  } catch (error) {
    console.log("conection fail");
  }
}

dbConection();
var app = express();

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-filename, Content-disposition, system, action, cui, rol, env"
  );
  res.setHeader(
    "Access-Control-Expose-Headers",
    "x-filename, Content-disposition"
  );
  next();
});
app.use(requestIp.mw());
app.use(routes);

app.listen(3001, function () {
  console.log(3001 + "::" + "port on server");
});
async function CreateTable() {
  await FiscaliaModel.sync({ force: false });
}

CreateTable();
