import { Material } from "../models/Material.js";

class MaterialRepository{
    async getAll(){
        return await Material.findAll();
    }
}

export default new MaterialRepository;