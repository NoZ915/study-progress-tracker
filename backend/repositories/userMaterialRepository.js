import { Material } from "../models/Material.js";
import { UserMaterials } from "../models/UserMaterials.js"

class UserMaterialRepository {
  async findLatestAttempt(user_id, material_id) {
    const data = await UserMaterials.findOne({
      where: {
        user_id: user_id,
        material_id: material_id
      },
      order: [["attempt_number", "DESC"]],
      attributes: ["attempt_number"],
      raw: true
    });
    return data ? data.attempt_number : null;
  }

  async createUserMaterial(user_id, material_id, attempt_number) {
    return await UserMaterials.create({
      user_id,
      material_id,
      attempt_number
    })
  }

  async getAllUserMaterialsByUserId(user_id) {
    return await UserMaterials.findAll({
      where: { user_id: user_id },
      include: [
        {
          model: Material,
          as: "material",
          attributes: ["material_id", "title", "image_url"]
        }
      ]
    })
  }

  async deleteOneUserMaterial(user_material_id, user_id) {
    return await UserMaterials.destroy({
      where: {
        user_material_id:  user_material_id,
        user_id: user_id
      }
    })
  }
}

export default new UserMaterialRepository;