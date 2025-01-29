import { axiosInstance } from "./axiosInstance.js";

export const getAllMaterials = async () => {
    const response = await axiosInstance.get("/materials/getAllMaterials");
    return response.data;
}