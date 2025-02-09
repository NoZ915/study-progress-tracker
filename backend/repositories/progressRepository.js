import { Progress } from "../models/Progress.js";

class ProgressRepository {
  async getAllProgress(user_material_id, user_id) {
    return await Progress.findAll({
      where: { user_material_id, user_id }
    })
  }
}

export default new ProgressRepository;