import React, { Component } from "react";

class TodoList extends Component {
  // khai báo state
  state = {
    name: "Eric",
  };

  // gán lại giá trị cho state
  render() {
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <br />
        <br />
        Hello Todo List name = {this.state.name}
      </div>
    );
  }
}
export default TodoList;
