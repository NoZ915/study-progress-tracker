import { axiosInstance } from "./axiosInstance.js";

export const getAllMaterials = async () => {
    const response = await axiosInstance.get("/materials/getAllMaterials");
    return response.data;
}

export const getMaterialDetail = async (material_id) => {
    const response = await axiosInstance.get(`/materials/getMaterialDetail/${material_id}`);
    console.log(response)
    return response.data;
}