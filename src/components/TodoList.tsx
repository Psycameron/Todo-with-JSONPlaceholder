"use client";

import { useTodos } from "@/hooks/useTodo";
import TodoCard from "./TodoCard";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const { data, isLoading } = useTodos();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <NewTodoForm />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
