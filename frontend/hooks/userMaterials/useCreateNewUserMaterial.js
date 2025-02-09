import { QUERY_KEYS } from "../queryKeys.js"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createNewUserMaterial } from "../../apis/userMaterialAPI.js"

export const useCreateNewUserMaterial = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => {
            const { user_id, material_id } = data;
            createNewUserMaterial(user_id, material_id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_MATERIALS] })
        },
        onError: (err) => console.log(err)
    })
}