import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
class Todos extends Component {
  state = {
    todos: [
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
    ],
  };
  handleAdd = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuidv4(),
          title,
          completed: false,
        },
      ],
    });
  };
  handleDeleteOne = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };
  handleCompleteChange = (id, newCompleteStatus) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
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
      }),
    });
  };
  handleDeleteAll = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => !todo.completed),
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <TodoForm onSubmit={this.handleAdd} />
        <TodoList
          todos={todos}
          onCompleteChange={this.handleCompleteChange}
          onDeleteOne={this.handleDeleteOne}
          onDeleteAll={this.handleDeleteAll}
        />
      </div>
    );
  }
}

export default Todos;
