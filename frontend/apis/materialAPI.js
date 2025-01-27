import { axiosInstance } from "./axiosInstance.js";

export const getAllMaterials = async () => {
    const response = await axiosInstance.get("/materials/getAllMaterials");
    console.log(response.data)
    return response.data;
}