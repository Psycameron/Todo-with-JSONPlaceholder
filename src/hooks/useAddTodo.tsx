import { addTodo } from "@/api/todoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
