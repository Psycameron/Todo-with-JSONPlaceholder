import { useAddTodo } from "@/hooks/useAddTodo";
import { Todo } from "@/types/todo";
import { FormEvent, useState } from "react";

const NewTodoForm = () => {
  const [textTodo, setTextTodo] = useState("");

  const { mutate } = useAddTodo();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!textTodo.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      userId: 1,
      title: textTodo,
      completed: false,
    };

    mutate(newTodo, {
      onSuccess: () => {
        setTextTodo("");
      },
      onError: (error) => {
        console.error("Adding todo error:", error);
      },
    });
  };

  return (
    <form
      className="left-[62px] top-0 flex items-center gap-2 rounded mb-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type new todo..."
        value={textTodo}
        onChange={(e) => {
          setTextTodo(e.target.value);
        }}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button
        type="submit"
        className="bg-amber-400 text-white px-4 py-[9px] rounded hover:bg-amber-700 transition-colors duration-300 cursor-pointer"
      >
        Create
      </button>
    </form>
  );
};

export default NewTodoForm;
