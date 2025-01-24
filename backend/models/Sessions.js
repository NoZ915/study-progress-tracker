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
      model: 'Materials', // 參考資料表名稱 (需對應到你的 Materials 模型)
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