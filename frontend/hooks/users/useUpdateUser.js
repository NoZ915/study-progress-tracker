import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUser } from "../../apis/userAPI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: (data) => {
      const { id, userData } = data;
      const updatedUser = updateUser(id, userData);
      return updatedUser;
    },
    onSuccess: (updatedUser) => {
      navigate("/");
      setUser(updatedUser);
      queryClient.invalidateQueries({ queryKey: ["user"] });

    },
    onError: (err) => console.log(err)
  })
}