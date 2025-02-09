import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../queryKeys"
import { getAllProgressByUserMaterialId } from "../../apis/progressAPI"

export const useGetAllProgressByUserMaterialId = (user_material_id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROGRESS],
    queryFn: () => getAllProgressByUserMaterialId(user_material_id)
  })
}