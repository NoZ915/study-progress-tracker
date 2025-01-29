import SessionService from "../services/sessionService.js";

export const getAllSessions = async (req, res) => {
  try {
    const sessions = await SessionService.getAllSessions();
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getSessionsByMaterialId = async (req, res) => {
  try{
    console.log("hi there")
    const materialId = req.params;
    if(!materialId) return res.status(400).json({ error: "Material Id is needed!" });

    const sessions = await SessionService.getSessionsByMaterialId(materialId);
    res.status(200).json(sessions);
  }catch(err){
    res.status(500).json({ error: err.message });
  }
}
