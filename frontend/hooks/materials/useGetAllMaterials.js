import { useQuery } from "@tanstack/react-query";
import { getAllMaterials } from "../../apis/materialAPI";

export const useGetAllMaterials = () => {
    return useQuery({
        queryKey: ["materials"],
        queryFn: () => getAllMaterials()
    });
}