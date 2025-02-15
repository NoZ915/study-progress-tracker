import feedbackRepository from "../repositories/feedbackRepository.js";
import materialRepository from "../repositories/materialRepository.js";

class MaterialService {
    async getAllMaterials() {
        return await materialRepository.getAll();
    }

    async getMaterialDetail(material_id) {
        const material = await materialRepository.getMaterialById(material_id);
        const feedbacks = await feedbackRepository.getAllFeedbacksByMaterialId(material_id);

        const totalRatings = feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0);
        const averageRatings = feedbacks.length > 0 ? (totalRatings/feedbacks.length) : 0;
        return{
            ...material,
            feedbacks,
            averageRatings
        }
    }
}

export default new MaterialService();