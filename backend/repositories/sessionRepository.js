import { Session } from "../models/Sessions.js";

class SessionRepository {
  async getAll() {
    return await Session.findAll();
  }
  async getSessionsByMaterialId(materialId){
    return await Session.findAll({
      where: {
        material_id: Number(materialId)
      }
    })
  }
}

export default new SessionRepository;