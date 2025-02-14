import { Feedback } from "../models/Feedback.js";

class FeedbackRepository {
  async getFeedbacksByMaterialId(material_id) {
    return Feedback.findAll({
      where: { material_id },
      include: {
        model: User,
        attributes: ["name", "avatar"]
      },
      order: [["created_at", "DESC"]],
    });
  }
}

export default new FeedbackRepository;