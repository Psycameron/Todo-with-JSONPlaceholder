interface IDeleteButtonProps {
  id: number;
  onDelete: (id: number) => void;
}

const DeleteButton = ({ id, onDelete }: IDeleteButtonProps) => {
  return (
    <button
      onClick={() => onDelete(id)}
      className="cursor-pointer transition border-1 rounded-full px-2 mt-3 text-sm text-red-500 hover:text-red-700 self-end"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
