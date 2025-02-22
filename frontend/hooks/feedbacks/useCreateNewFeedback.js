import { useMutation, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEYS } from "../queryKeys";
import { createNewFeedback } from "../../apis/feedbackAPI";

export const useCreateNewFeedback = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => {
            const { material_id, rating, comment } = data;
            return createNewFeedback(material_id, rating, comment)
        },
        onSuccess: async() => {
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MATERIAL] })
        },
        onError: (err) => console.log(err)
    })
}