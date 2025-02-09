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
    return data.attempt_number;
  }

  async createUserMaterial(user_id, material_id, attempt_number) {
    return await UserMaterials.create({
      user_id,
      material_id,
      attempt_number
    })
  }
}

export default new UserMaterialRepository;