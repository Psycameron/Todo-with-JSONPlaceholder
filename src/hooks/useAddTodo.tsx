import { addTodo } from "@/api/todoApi";
import { Todo } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["todos"] });
    // },

    // optimistic update
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], [newTodo, ...prevTodos]);

      return { prevTodos };
    },

    onError: (err, newTodo, context) => {
      if (context?.prevTodos) {
        queryClient.setQueryData<Todo[]>(["todos"], context.prevTodos);
      }
    },
  });
};
