import { Component } from "react";

class TodoForm extends Component {
  state = {
    input: "",
    error: "",
  };
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
      error: "",
    });
  };
  handleSubmit = () => {
    if (this.state.input.length < 2) {
      this.setState({
        error: "must be at least 2 chars",
      });
      return;
    }
    this.props.onSubmit(this.state.input);
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <div className="row todo-form">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            I need to ...
          </span>
          <input
            value={this.state.input}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Add
          </button>
        </div>
        {this.state.error ? (
          <span className="text-danger">{this.state.error} </span>
        ) : null}
      </div>
    );
  }
}

export default TodoForm;
