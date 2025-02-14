import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Feedback = sequelize.define("Feedback", {
  feedback_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "user_id"
    }
  },
  material_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Materials",
      key: "material_id"
    }
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  comment: {
    type: DataTypes.TEXT
  }
}, {
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ["user_id", "material_id"] // 確保唯一性
    }
  ]
});