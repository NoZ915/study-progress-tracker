import FeedbackRepository from "../repositories/feedbackRepository";

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