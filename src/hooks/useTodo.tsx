import { getTodos } from "@/api/todoApi";
import { useQuery } from "@tanstack/react-query";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
