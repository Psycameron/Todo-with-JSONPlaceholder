interface IDeleteButtonProps {
  id: number;
  onDelete: (id: number) => void;
}

const DeleteButton = ({ id, onDelete }: IDeleteButtonProps) => {
  return (
    <button
      onClick={() => onDelete(id)}
      className="mt-3 text-sm text-red-500 hover:text-red-700 self-end"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
