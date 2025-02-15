import ProgressService from "../services/progressService.js"

export const updateProgress = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { user_material_id, session_id, completion_time, correction_time, notes } = req.body;
    const newProgress = await ProgressService.updateProgress(user_material_id, session_id, completion_time, correction_time, notes, user_id);
    return res.status(201).json(newProgress)
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

export const exportProgressExcel = async (req, res) => {
  try{
    const user_id = req.user.user_id;
    const { user_material_id, material_id } = req.body;
    const excelBuffer = await ProgressService.exportProgressExcel(material_id, user_material_id, user_id);

    res.setHeader("Content-Disposition", 'attachment; filename="sessions.xlsx"');
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.send(excelBuffer);
    
    return res.status(200),json()
  } catch(err){
    return res.status(500).json({ error: err.message })
  }
}