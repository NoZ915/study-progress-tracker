import MaterialService from "../services/materialService.js";

export const getAllMaterials = async (req, res) => {
    try {
        const materials = await MaterialService.getAllMaterials();
        res.status(200).json(materials);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}