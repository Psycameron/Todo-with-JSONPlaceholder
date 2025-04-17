import { Todo } from "@/types/todo";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`${BASE_URL}/todos?_limit=10`);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
};

export const addTodo = async (title: string): Promise<Todo> => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  if (!res.ok) throw new Error("Failed to add todo");
  return res.json();
};

export const deleteTodo = async (id: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete todo");
};
