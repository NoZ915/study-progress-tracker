import { axiosInstance } from "./axiosInstance"

export const createNewUserMaterial = async (user_id, material_id) => {
  const response = await axiosInstance.post("/userMaterials/createNewUserMaterial", {
    user_id,
    material_id
  });
  return response.data;
}

export const getAllUserMaterialsByUserId = async (user_id) => {
  const response = await axiosInstance.get(`/userMaterials/getAllUserMaterials/${user_id}`);
  return response.data;
}

export const deleteOneUserMaterial = async (user_material_id) => {
  const jwt = localStorage.getItem("jwt");
  const response = await axiosInstance.delete("/userMaterials/deleteOneUserMaterial",{
    headers: {
      Authorization: `Bearer ${jwt}`
    },
    params: { user_material_id }
  });
  return response.data;
}