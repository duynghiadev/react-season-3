import _ from "lodash";
import { useState } from "react";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const TodoList = () => {
  const [todo, setTodo] = useState();
  const [listTodo, setListTodo] = useState([
    { id: "todo1", name: "watching youtube" },
    { id: "todo2", name: "Using facebook" },
    { id: "todo3", name: "Reading book" },
  ]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleClickBtn = () => {
    if (!todo) {
      alert("Todo name is not empty");
    }

    let todoId = randomIntFromInterval(4, 999999);
    let todoItem = {
      id: `todo ${todoId}`, // string template
      name: todo,
    };

    let currentTodoList = _.clone(listTodo);
    currentTodoList.push(todoItem);
    setListTodo(currentTodoList);
    setTodo("");

    // setListTodo([...listTodo, todoItem]); // spread operator
  };

  const handleDeleteTodo = (id) => {
    let currentTodoList = _.clone(listTodo);
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setListTodo(currentTodoList);
  };

  const myInfor = { channel: "hoidanit", age: 20 };
  // props, state: object (key: value)
  return (
    <div>
      <AddTodo />
      <label htmlFor="">Todo's Name: </label>
      <input
        type="text"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button type="button" onClick={() => handleClickBtn()}>
        Submit
      </button>
      <br /> <br />
      <DisplayTodo
        listTodo={listTodo}
        name={"duynghia"}
        address={{ myInfor }}
      />
    </div>
  );
};
export default TodoList;
