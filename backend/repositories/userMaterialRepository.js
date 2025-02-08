import { UserMaterials } from "../models"

class UserMaterialRepository {
  async findLatestAttempt(user_id, material_id) {
    return await UserMaterials.findOne({
      where: { user_id, material_id },
      order: [["attempt_number", "DESC"]]
    })
  }

  async createUserMaterial(user_id, material_id, attempt_number) {
    return await UserMaterials.create({
      user_id,
      material_id,
      attempt_number
    })
  }
}

export default UserMaterialRepository;