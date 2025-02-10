import { Progress } from "../models/Progress.js";

class ProgressRepository {
  async getAllProgress(user_material_id, user_id) {
    return await Progress.findAll({
      where: { user_material_id, user_id }
    })
  }

  async updateProgress(user_material_id, session_id, completion_time, correction_time, notes, user_id) {
    return await Progress.update(
      { completion_time, correction_time, notes },
      {
        where: { user_material_id, session_id, user_id },
      }
    );
  }
}

export default new ProgressRepository;