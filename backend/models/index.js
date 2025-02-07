import { Users } from "./Users.js";
import { Material } from "./Material.js";
import { Sessions } from "./Sessions.js";
import { UserMaterials } from "./UserMaterials.js";
import { Progress } from "./Progress.js";

// 設定關聯
Users.hasMany(UserMaterials, { foreignKey: "user_id" });
Material.hasMany(UserMaterials, { foreignKey: "material_id" });

UserMaterials.belongsTo(Users, { foreignKey: "user_id" });
UserMaterials.belongsTo(Material, { foreignKey: "material_id" });
UserMaterials.hasMany(Progress, { foreignKey: "user_material_id" });

Progress.belongsTo(UserMaterials, { foreignKey: "user_material_id" });
Progress.belongsTo(Sessions, { foreignKey: "session_id" });

export { Users, Material, Sessions, UserMaterials, Progress };