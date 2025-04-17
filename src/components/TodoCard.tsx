import { Todo } from "../types/todo";

interface ITodoCardProps {
  todo: Todo;
  onDelete?: (id: number) => void;
}

const TodoCard = ({ todo }: ITodoCardProps) => {
  const { userId, title, completed } = todo;

  return (
    <li className="flex flex-col justify-between gap-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 transition hover:shadow-lg">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">User ID: {userId ?? "-"}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {completed ? "Completed" : "Pending"}
        </span>
      </div>
      <p className="text-base font-medium text-gray-800 mt-2">{title}</p>

      {/* 
      <button
        onClick={() => onDelete?.(todo.id)}
        className="mt-3 text-sm text-red-500 hover:text-red-700 self-end"
      >
        Delete
      </button>
      */}
    </li>
  );
};

export default TodoCard;
