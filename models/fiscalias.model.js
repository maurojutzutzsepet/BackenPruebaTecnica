const connection = require("../dbconection");

const Fiscalias = connection.sequelize.define(
  "Fiscalias",
  {
    id: {
      type: connection.DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: connection.DataTypes.UUIDV4,
      isUUID: 4,
      unique: true,
    },
    nombre: {
      type: connection.DataTypes.STRING,
      allowNull: true,
    },
    coordinador: {
      type: connection.DataTypes.STRING,
      allowNull: true,
    },
    departamento: {
      type: connection.DataTypes.INTEGER,
      allowNull: true,
    },
    telefono: {
      type: connection.DataTypes.INTEGER,
      allowNull: true,
    },
    correo: {
      type: connection.DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "Fiscalias",
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

exports.FiscaliaModel = Fiscalias;
