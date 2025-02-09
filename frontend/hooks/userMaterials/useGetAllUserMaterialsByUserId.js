import { QUERY_KEYS } from "../queryKeys"
import { useQuery } from "@tanstack/react-query"
import { getAllUserMaterialsByUserId } from "../../apis/userMaterialAPI"

export const useGetAllUserMaterialsByUserId = (user_id) => {
    return useQuery({
        queryKey: [QUERY_KEYS.USER_MATERIALS],
        queryFn: () => getAllUserMaterialsByUserId(user_id)
    })
}