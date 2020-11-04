var express = require("express");
var app = express.Router();
const FiscaliaController = require("../controllers/fiscalia.controller");

app.get("/api/backend/fiscalias", FiscaliaController.getAll);

app.post("/api/backend/fiscalias", FiscaliaController.InsertFiscalia);

app.post("/api/backend/fiscalia", FiscaliaController.getFiscalia);

app.put("/api/backend/fiscalias", FiscaliaController.updateFiscalia);

app.post("/api/backend/fiscalias/delete", FiscaliaController.deleteFiscalia);

module.exports = app;
