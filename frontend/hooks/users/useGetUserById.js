import { useQuery } from "@tanstack/react-query"
import { getUserById } from "../../apis/userAPI"

export const useGetUserById = (id) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: () => getUserById(id),
        // enabled：如果沒有id值，他就不會被查詢，設置這個是為了不必要的查詢
        enabled: !!id
    })
}
