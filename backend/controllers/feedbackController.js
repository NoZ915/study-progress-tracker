import feedbackService from "../services/feedbackService.js";

export const createNewFeedback = async(req, res) => {
    try{
        const user_id = req.user.user_id;
        const { material_id, rating, comment } = req.body;
        const newFeedback = await feedbackService.createNewFeedback(
            user_id, 
            material_id, 
            rating,
            comment
        );
        return res.status(200).json(newFeedback)
    }catch(err){
        return res.status(500).json({ error: err.message })
    }
}