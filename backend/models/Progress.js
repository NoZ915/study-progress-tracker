import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Progress = sequelize.define("Progress", {
  progress_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_material_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "UserMaterials",
      key: "user_material_id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  session_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Sessions",
      key: "session_id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  completion_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  correction_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: "Progress",
  timestamps: false,
});