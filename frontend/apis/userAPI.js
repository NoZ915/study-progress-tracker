import { axiosInstance } from "./axiosInstance"

export const getUserById = async (id) => {
    const response = await axiosInstance.get(`/users/getUserById/${id}`);
    return response.data;
}

export const updateUser = async (id, userData) => {
    const response = await axiosInstance.put(`/users/updateUser/${id}`, userData);
    return response.data;
}

export const createUser = async (userData) => {
    const response = await axiosInstance.post('/users/createUser', userData);
    return response.data;
}
