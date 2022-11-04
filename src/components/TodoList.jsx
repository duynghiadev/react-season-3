import React, { Component, useState } from "react";

// class TodoList extends Component {
//   // khai báo state
//   state = {
//     name: "",
//   };

//   // gán lại giá trị cho state
//   render() {
//     return (
//       <div>
//         <label>Name</label>
//         <input
//           type="text"
//           onChange={(event) => this.setState({ name: event.target.value })}
//         />
//         <br />
//         <br />
//         Hello Todo List name = {this.state.name}
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const [name, setName] = useState("");

  return (
    <div className="">
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br /> <br />
      Hello Todo List name = {name}
    </div>
  );
};
export default TodoList;
