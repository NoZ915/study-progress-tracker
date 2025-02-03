import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUser } from "../../apis/userAPI";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => {
      const { id, userData } = data;
      updateUser(id, userData);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user", data.id] });
    },
    onError: (err) => console.log(err)
  })
}