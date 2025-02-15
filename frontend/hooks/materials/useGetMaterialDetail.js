import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../queryKeys"
import { getMaterialDetail } from "../../apis/materialAPI"

export const useGetMaterialDetail = (material_id) => {
    return useQuery({
        queryKey: [QUERY_KEYS.MATERIAL],
        queryFn: () => getMaterialDetail(material_id)
    })
}