import { Progress } from "../models/Progress.js";

class ProgressRepository {
  async getAllProgress(user_material_id, user_id) {
    return await Progress.findAll({
      where: { user_material_id, user_id }
    })
  }

  async updateProgress(user_material_id, session_id, completion_time, correction_time, notes, user_id) {
    const existingProgress = await Progress.findOne({
      where: { user_material_id, session_id, user_id }
    });

    if (existingProgress) {
      // 更新
      return await existingProgress.update({ completion_time, correction_time, notes });
    } else {
      // 創建
      return await Progress.create({ user_material_id, session_id, completion_time, correction_time, notes, user_id });
    }
  }
}

export default new ProgressRepository;