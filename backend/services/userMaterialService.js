import UserMaterialRepository from "../repositories/userMaterialRepository.js";
import SessionRepository from "../repositories/sessionRepository.js";
import ProgressRepository from "../repositories/progressRepository.js";


class UserMaterialService {
  async createNewUserMaterial(user_id, material_id) {
    // 先抓最新的次數（同一本講義但可能完成多次）
    let latestAttemptNumber = await UserMaterialRepository.findLatestAttempt(user_id, material_id);
    let newAttemptNumber = latestAttemptNumber ? latestAttemptNumber + 1 : 1;

    // 建立新的UserMaterials
    return UserMaterialRepository.createUserMaterial(
      user_id,
      material_id,
      newAttemptNumber
    )
  }

  async getAllUserMaterialsByUserId(user_id) {
    const allUserMaterials = await UserMaterialRepository.getAllUserMaterialsByUserId(user_id);

    // 取得所有 userMaterial 的進度
    const userMaterialsWithProgress = await Promise.all(
      allUserMaterials.map(async (userMaterial) => {
        const sessions = await SessionRepository.getSessionsByMaterialId(userMaterial.material_id);
        const progress = await ProgressRepository.getAllProgress(userMaterial.user_material_id, user_id);

        const sessionsCount = sessions.length;
        const completedSessionsCount = progress.filter(
          (p) =>
            (p.completion_time != null && p.completion_time !== "") &&
            (p.correction_time != null && p.correction_time !== "")
        ).length;

        const progressPercentage = sessionsCount === 0 ? 0 : Math.round((completedSessionsCount / sessionsCount) * 100);

        return {
          userMaterial,
          progressPercentage, // 將進度加入回傳的資料
        };
      })
    );

    return userMaterialsWithProgress;
  }
}

export default new UserMaterialService;