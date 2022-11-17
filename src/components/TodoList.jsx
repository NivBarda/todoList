import TodoItem from "./TodoItem";

const TodoList = ({
  todos = [],
  onCompleteChange = () => {},
  onDeleteOne = () => {},
  onDeleteAll = () => {},
}) => {
  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  return (
    <div className="row todo-list">
      <div className="col-4 mb-2">
        <span>
          {completedTasks}/{totalTasks}
        </span>
      </div>
      <div className="col-8 text-end">
        <i onClick={onDeleteAll} className="bi bi-trash text-end ms-auto"></i>
      </div>
      <ul className="list-group col-12">
        {todos
          .sort((a) => (a.completed ? 1 : -1))
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompleteChange={(e) => {
                onCompleteChange(todo.id, e.target.checked);
              }}
              onDeleteOne={() => {
                onDeleteOne(todo.id);
              }}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
