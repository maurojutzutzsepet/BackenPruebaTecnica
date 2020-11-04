const Services = require("../services/fiscalias.services");

exports.getAll = async function (req, res) {
  const result = await Services.getAllFiscalias();
  return res.status(200).send({
    valid: true,
    msg: "listado fiscalias",
    data: result,
  });
};

exports.InsertFiscalia = async function (req, res) {
  const result = await Services.Insert(req.body);

  return res.status(200).send({
    valid: true,
    msg: "insert fiscalia",
    data: result,
  });
};

exports.getFiscalia = async function (req, res) {
  const result = await Services.getByIdFiscalia(req.body.id);

  return res.status(200).send({
    valid: true,
    msg: "fiscalia",
    data: result,
  });
};

exports.updateFiscalia = async function (req, res) {
  const result = await Services.updateFisclia(req.body);
  return res.status(200).send({
    valid: true,
    msg: "fiscalia actualizada",
    data: result,
  });
};

exports.deleteFiscalia = async function (req, res) {
  const result = await Services.deleteFiscalia(req.body);
  return res.status(200).send({
    valid: true,
    msg: "fiscalia eliminada",
    data: result,
  });
};
