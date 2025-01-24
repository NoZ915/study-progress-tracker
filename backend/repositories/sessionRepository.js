import { Session } from "../models/Sessions.js";

class SessionRepository {
  async getAll() {
    return await Session.findAll();
  }
}

export default new SessionRepository;