const TodoItem = ({
  todo: { id, title, completed },
  onCompleteChange = () => {},
  onDeleteOne = () => {},
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <input
        onChange={onCompleteChange}
        checked={completed}
        type="checkbox"
        className="form-check-input me-2"
      />
      <span
        className={
          "flex-fill" +
          (completed ? " text-decoration-line-through text-muted" : "")
        }
      >
        {title}
      </span>
      <button onClick={onDeleteOne} className="btn btn-danger btn-sm">
        <i className="bi bi-trash text-end"></i>
      </button>
    </li>
  );
};

export default TodoItem;
