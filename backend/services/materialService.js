import feedbackRepository from "../repositories/feedbackRepository.js";
import materialRepository from "../repositories/materialRepository.js";

class MaterialService {
    async getAllMaterials() {
        return await materialRepository.getAll();
    }

    async getMaterialDetail(material_id) {
        const material = await materialRepository.getMaterialById(material_id);
        const feedbacks = await feedbackRepository.getFeedbacksByMaterialId(material_id);
    }
}

export default new MaterialService();