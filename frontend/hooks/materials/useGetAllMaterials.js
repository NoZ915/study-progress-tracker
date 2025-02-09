import QUERY_KEYS from "../queryKeys.js"
import { useQuery } from "@tanstack/react-query";
import { getAllMaterials } from "../../apis/materialAPI";

export const useGetAllMaterials = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.MATERIALS],
        queryFn: () => getAllMaterials()
    });
}