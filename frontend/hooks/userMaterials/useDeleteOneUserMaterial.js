import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteOneUserMaterial } from "../../apis/userMaterialAPI"
import { QUERY_KEYS } from "../queryKeys";
import { jwtDecode } from "jwt-decode";

export const useDeleteOneUserMaterial = () => {
    const queryClient = useQueryClient();
    const jwt = jwtDecode(localStorage.getItem("jwt"));
    return useMutation({
        mutationFn: async (user_material_id) => {
            return await deleteOneUserMaterial(user_material_id);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_MATERIALS, jwt.user_id] });
            await queryClient.refetchQueries({ queryKey: [QUERY_KEYS.USER_MATERIALS, jwt.user_id] });
        },
        onError: (err) => console.log(err)
    })
}