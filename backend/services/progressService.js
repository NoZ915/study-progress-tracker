import ProgressRepository from "../repositories/progressRepository.js";

class ProgressService {
  async getAllProgress(user_material_id, user_id) {
    return await ProgressRepository.getAllProgress(user_material_id, user_id)
  }

  async updateProgress(user_material_id, session_id, completion_time, correction_time, notes, user_id) {
    return await ProgressRepository.updateProgress(user_material_id, session_id, completion_time, correction_time, notes, user_id)
  }
}

export default new ProgressService;