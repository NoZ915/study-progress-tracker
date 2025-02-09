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

export const getAllUserMaterialsByUserId = async (req, res) => {
  try{
    const { user_id } = req.params;
    const allUserMaterials = await UserMaterialService.getAllUserMaterialsByUserId(user_id);
    return res.status(200).json(allUserMaterials);
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}