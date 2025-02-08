import UserMaterialRepository from "../repositories/userMaterialRepository";


class UserMaterialService {
  async createNewUserMaterial(user_id, material_id) {
    // 先抓最新的次數（同一本講義但可能完成多次）
    let latestAttemptNumber = await UserMaterialRepository.findLatestAttempt(user_id, material_id);
    let newAttemptNumber = latestAttemptNumber ? latestAttemptNumber + 1 : 1;

    // 建立新的UserMaterials
    return UserMaterialRepository.createUserMaterial({
      user_id,
      material_id,
      newAttemptNumber
    })
  }
}

export default UserMaterialService;