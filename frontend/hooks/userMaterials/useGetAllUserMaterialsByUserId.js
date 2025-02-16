import { QUERY_KEYS } from "../queryKeys"
import { useQuery } from "@tanstack/react-query"
import { getAllUserMaterialsByUserId } from "../../apis/userMaterialAPI"

export const useGetAllUserMaterialsByUserId = (user_id) => {
    console.log(user_id)
    return useQuery({
        queryKey: [QUERY_KEYS.USER_MATERIALS, user_id],
        queryFn: () => getAllUserMaterialsByUserId(user_id),
        enabled: !!user_id,
    })
}