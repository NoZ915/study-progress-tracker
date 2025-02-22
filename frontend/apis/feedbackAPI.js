import { axiosInstance } from "./axiosInstance"

export const createNewFeedback = async (material_id, rating, comment) => {
    const jwt = localStorage.getItem("jwt");
    const response = await axiosInstance.post("/feedbacks/createNewFeedback",
        {
            material_id,
            rating,
            comment
        },
        {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }
    )
    return response.data;
}