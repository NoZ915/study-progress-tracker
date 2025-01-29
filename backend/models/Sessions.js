import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Session = sequelize.define("Session", {
  session_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  material_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Materials', // 參考資料表名稱 (對應 Materials model)
      key: 'material_id', // 對應到的欄位名稱
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  session_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Sessions',
  timestamps: false
});