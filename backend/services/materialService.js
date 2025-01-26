import materialRepository from "../repositories/materialRepository.js";

class MaterialService {
    async getAllMaterials(){
        return await materialRepository.getAll();
    }
}

export default new MaterialService();