import { User } from "./Users.js";
import { Material } from "./Material.js";
import { Session } from "./Sessions.js";
import { UserMaterials } from "./UserMaterials.js";
import { Progress } from "./Progress.js";

// 設定關聯
User.hasMany(UserMaterials, { foreignKey: "user_id" });
Material.hasMany(UserMaterials, { foreignKey: "material_id" });

UserMaterials.belongsTo(User, { foreignKey: "user_id" });
UserMaterials.belongsTo(Material, { foreignKey: "material_id" });
UserMaterials.hasMany(Progress, { foreignKey: "user_material_id" });

Progress.belongsTo(UserMaterials, { foreignKey: "user_material_id" });
Progress.belongsTo(Session, { foreignKey: "session_id" });

export { User, Material, Session, UserMaterials, Progress };