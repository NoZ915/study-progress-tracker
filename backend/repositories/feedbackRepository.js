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

  async createNewFeedback(){
    return await Feedback.create({
      user_id, 
      material_id, 
      rating,
      comment
    })
  }
}

export default new FeedbackRepository;