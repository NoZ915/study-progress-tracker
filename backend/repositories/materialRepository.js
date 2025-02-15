import { Material } from "../models/Material.js";

class MaterialRepository{
    async getAll(){
        return await Material.findAll();
    }

    async getMaterialById(material_id){
        return await Material.findOne({
            where: { material_id }
        })
    }
}

export default new MaterialRepository;