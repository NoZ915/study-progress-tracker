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
            createNewUserMaterial(user_id, material_id);
            return data
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_MATERIALS] })
            queryClient.refetchQueries({ queryKey: [QUERY_KEYS.USER_MATERIALS] }).then(() => {
                navigate('/progress');
            });
        },
        onError: (err) => console.log(err)
    })
}