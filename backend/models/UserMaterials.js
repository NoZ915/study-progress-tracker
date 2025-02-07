import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const UserMaterials = sequelize.define("UserMaterials", {
  user_material_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "user_id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  material_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Materials",
      key: "material_id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  attempt_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "UserMaterials",
  timestamps: false,
})