import { deleteTodo } from "@/api/todoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    // mutationKey: ["addTodo"],
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["todos"] });
    // },
  });
};
