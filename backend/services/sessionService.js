import SessionRepository from "../repositories/sessionRepository.js";

class SessionService {
  async getAllSessions() {
    return await SessionRepository.getAll();
  }
}

export default new SessionService();