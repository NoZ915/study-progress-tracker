import SessionService from "../services/sessionService.js";

export const getAllSessions = async (req, res) => {
  try {
    const sessions = await SessionService.getAllSessions();
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

