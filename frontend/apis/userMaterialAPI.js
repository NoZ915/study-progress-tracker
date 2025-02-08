import { axiosInstance } from "./axiosInstance"

export const createNewUserMaterial = async (user_id, material_id) => {
  const response = await axiosInstance.post("/userMaterials/createNewUserMaterial", {
    user_id,
    material_id
  });
  return response.data;
}