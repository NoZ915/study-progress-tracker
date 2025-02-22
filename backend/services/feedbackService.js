import FeedbackRepository from "../repositories/feedbackRepository.js";

class FeedbackService {
    async createNewFeedback(
        user_id, 
        material_id, 
        rating,
        comment
    ){
        return await FeedbackRepository.createNewFeedback(
            user_id, 
            material_id, 
            rating,
            comment
        );
    }
}

export default new FeedbackService;