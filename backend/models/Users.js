import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  group:{
    type: DataTypes.STRING,
    allowNull: true
  },
  school:{
    type: DataTypes.STRING,
    allowNull: true
  },
  region:{
    type: DataTypes.STRING,
    allowNull: true
  },
  detail:{
    type: DataTypes.STRING,
    allowNull: true
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: "Users",
  timestamps: false
})

export default User;