import { QUERY_KEYS } from "../queryKeys.js"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createNewUserMaterial } from "../../apis/userMaterialAPI.js"
import { useNavigate } from "react-router-dom";

export const useCreateNewUserMaterial = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data) => {
            const { user_id, material_id } = data;
            return createNewUserMaterial(user_id, material_id);
        },
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_MATERIALS, data.user_id] });
            navigate('/progress'); 
        },
        onError: (err) => console.log(err)
    })
}