import { axiosInstance } from "./axiosInstance"

export const getUserById = async (id) => {
    const response = await axiosInstance.get(`/users/getUserById/${id}`);
    console.log(response.data)
    return response.data;
}