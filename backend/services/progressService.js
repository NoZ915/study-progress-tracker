import ProgressRepository from "../repositories/progressRepository.js";

class ProgressService {
  async getAllProgress(user_material_id, user_id) {
    return await ProgressRepository.getAllProgress(user_material_id, user_id)
  }
}

export default new ProgressService;