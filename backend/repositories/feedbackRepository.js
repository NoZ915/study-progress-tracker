import { Feedback } from "../models/Feedbacks.js";
import User from "../models/Users.js";

class FeedbackRepository {
  async getAllFeedbacksByMaterialId(material_id) {
    return Feedback.findAll({
      where: { material_id },
      include: {
        model: User,
        as: "user",
        attributes: ["name", "avatar"]
      },
      order: [["created_at", "DESC"]],
    });
  }
}

export default new FeedbackRepository;