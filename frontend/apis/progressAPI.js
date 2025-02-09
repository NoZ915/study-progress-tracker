import { axiosInstance } from "./axiosInstance"

export const getAllProgressByUserMaterialId = async (user_material_id) => {
  const jwt = localStorage.getItem("jwt");
  const response = await axiosInstance.get("/progress/getAllProgressByUserMaterialId", {
    headers: {
      Authorization: `Bearer ${jwt}`
    },
    params: {
      user_material_id: user_material_id
    }
  })
  return response.data;
}