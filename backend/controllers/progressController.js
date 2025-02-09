import ProgressService from "../services/progressService.js"

export const createNewProgress = async (req, res) => {
  try {

  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

export const getAllProgressByUserMaterialId = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const user_material_id = parseInt(req.query.user_material_id);
    const allProgress = await ProgressService.getAllProgress(user_material_id, user_id);
    return res.status(200).json(allProgress)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}