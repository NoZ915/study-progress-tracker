import { QUERY_KEYS } from "../queryKeys.js"
import { useQuery } from "@tanstack/react-query"
import { getAllSessionsByMaterialId } from "../../apis/sessionAPI"

export const useGetAllSessionsByMaterialId = (materialId) => {
    return useQuery({
        queryKey: [QUERY_KEYS.SESSIONS, materialId],
        queryFn: () => getAllSessionsByMaterialId(materialId)
    })
}