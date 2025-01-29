import { useQuery } from "@tanstack/react-query"
import { getAllSessionsByMaterialId } from "../../apis/sessionAPI"

export const useGetAllSessionsByMaterialId = (materialId) => {
    return useQuery({
        queryKey: ["sessions", materialId],
        queryFn: () => getAllSessionsByMaterialId(materialId)
    })
}