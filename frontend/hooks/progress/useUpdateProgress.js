import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProgress } from "../../apis/progressAPI";
import { QUERY_KEYS } from "../queryKeys";

export const useUpdateProgress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => {
      const { user_material_id, session_id, completion_time, correction_time, notes } = data;
      return updateProgress(user_material_id, session_id, completion_time, correction_time, notes);
    },
    onSuccess: (updatedProgress) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROGRESS] })
      queryClient.setQueryData([QUERY_KEYS.PROGRESS, updatedProgress.session_id], updatedProgress);
    },
    onError: (err) => console.log(err)
  })
}