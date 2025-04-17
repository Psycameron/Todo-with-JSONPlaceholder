import { deleteTodo } from "@/api/todoApi";
import { Todo } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (oldTodos = []) =>
        oldTodos.filter((todo) => todo.id !== id)
      );

      return { prevTodos };
    },

    onError: (err, newTodo, context) => {
      if (context?.prevTodos) {
        queryClient.setQueryData<Todo[]>(["todos"], context.prevTodos);
      }
    },
  });
};
