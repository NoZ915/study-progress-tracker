import UserMaterialService from "../services/userMaterialService.js";

export const createNewUserMaterial = async (req, res) => {
  try {
    const { user_id, material_id } = req.body;
    const newUserMaterial = await UserMaterialService.createNewUserMaterial(
      user_id,
      material_id
    )
    return res.status(201).json(newUserMaterial);
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}