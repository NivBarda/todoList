import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import TodoFormFC from "./TodoFormFC";

const TodosFC = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "buy pasta",
      completed: true,
    },
    {
      id: 2,
      title: "buy burger",
      completed: false,
    },
    {
      id: 3,
      title: "eat pasta",
      completed: true,
    },
    {
      id: 4,
      title: "eat burger",
      completed: false,
    },
  ]);
  const handleAdd = (title) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title,
        completed: false,
      },
    ]);
  };
  const handleDeleteOne = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleCompleteChange = (id, newCompleteStatus) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed:
              typeof newCompleteStatus === "boolean"
                ? newCompleteStatus
                : !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const handleDeleteAll = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  return (
    <div className="container">
      <TodoFormFC onSubmit={handleAdd} />
      <TodoList
        todos={todos}
        onCompleteChange={handleCompleteChange}
        onDeleteOne={handleDeleteOne}
        onDeleteAll={handleDeleteAll}
      />
    </div>
  );
};

export default TodosFC;
