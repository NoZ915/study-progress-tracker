import { axiosInstance } from "./axiosInstance"

export const getAllSessionsByMaterialId = async (materialId) => {
    const response = await axiosInstance.get(`/sessions/${materialId}`);
    return response.data;
}