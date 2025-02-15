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

export const updateProgress = async (user_material_id, session_id, completion_time, correction_time, notes) => {
  const jwt = localStorage.getItem("jwt");
  const response = await axiosInstance.post("/progress/updateProgress",
    {
      user_material_id,
      session_id,
      completion_time,
      correction_time,
      notes
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }
  );
  return response.data;
}

export const exportProgressExcel = async (material_id, user_material_id) => {
  const jwt = localStorage.getItem("jwt");
  const response = await axiosInstance.post("/progress/export",
    {
      user_material_id,
      material_id
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`
      },
      responseType: "blob",
    })

  return await response.data;
}