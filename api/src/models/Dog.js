const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Dog',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        /* validate: {
          isLowercase: true,
        } */
      },
      max_height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      min_height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      min_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lifeYears: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: 'https://img.freepik.com/vector-gratis/lindo-perro-corgi-comiendo-dibujos-animados-hueso_138676-2534.jpg?w=740&t=st=1681426419~exp=1681427019~hmac=3001b9c5c578f7c0b6758f7f4d83d4121080cac66bd4cc52c3f538ff7c66aaa9'
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    },
    { timestamps: false }
  );
};
