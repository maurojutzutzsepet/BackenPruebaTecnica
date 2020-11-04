const fiscalias = require("../models/fiscalias.model");

exports.Insert = async function (obj) {
  try {
    await fiscalias.FiscaliaModel.create(obj);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllFiscalias = async function () {
  try {
    const lista = await fiscalias.FiscaliaModel.findAll();
    return lista;
  } catch (error) {
    console.log(error);
  }
};

exports.getByIdFiscalia = async function (id) {
  try {
    const lista = await fiscalias.FiscaliaModel.findAll({
      where: {
        id: id,
      },
    });
    return lista;
  } catch (error) {
    console.log(error);
  }
};

exports.updateFisclia = async function (obj) {
  try {
    const result = await fiscalias.FiscaliaModel.update(
      {
        ...obj,
      },
      {
        where: {
          id: obj.id,
        },
      }
    );
    return result;
  } catch (error) {
    console.error(error);
  }
};

exports.deleteFiscalia = async function (info) {
  try {
    await fiscalias.FiscaliaModel.destroy({
      where: {
        id: info.id,
      },
      force: true,
    });
  } catch (error) {
    console.log(error);
  }
};
