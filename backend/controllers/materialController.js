import MaterialService from "../services/materialService.js";

export const getAllMaterials = async (req, res) => {
    try {
        const materials = await MaterialService.getAllMaterials();
        res.status(200).json(materials);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getMaterialDetail = async (req, res) => {
    try {
        const material_id = req.params.material_id;
        const materialDetail = await MaterialService.getMaterialDetail(material_id);

        res.status(200).json(materialDetail);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}