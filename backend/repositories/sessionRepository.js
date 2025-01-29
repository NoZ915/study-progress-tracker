import { Session } from "../models/Sessions.js";

class SessionRepository {
  async getAll() {
    return await Session.findAll();
  }
  async getSessionsByMaterialId(materialId){
    console.log(materialId.materialId)
    console.log(typeof materialId.materialId)
    return await Session.findAll({
      where: {
        material_id: Number(materialId.materialId)
      }
    })
  }
}

export default new SessionRepository;