import SessionRepository from "../repositories/sessionRepository.js";

class SessionService {
  async getAllSessions() {
    return await SessionRepository.getAll();
  }

  async getSessionsByMaterialId(materialId){
    return await SessionRepository.getSessionsByMaterialId(materialId);
  }
}

export default new SessionService();