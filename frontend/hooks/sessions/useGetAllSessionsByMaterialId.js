import { QUERY_KEYS } from "../queryKeys.js"
import { useQuery } from "@tanstack/react-query"
import { getAllSessionsByMaterialId } from "../../apis/sessionAPI"

export const useGetAllSessionsByMaterialId = (material_id) => {
    return useQuery({
        queryKey: [QUERY_KEYS.SESSIONS, material_id],
        queryFn: () => getAllSessionsByMaterialId(material_id)
    })
}