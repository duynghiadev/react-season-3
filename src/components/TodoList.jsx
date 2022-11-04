import _ from "lodash";
import React, { useState } from "react";

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
    let todoId = randomIntFromInterval(4, 999999);
    let todoItem = {
      id: `todo ${todoId}`, // string template
      name: todo,
    };

    let currentTodoList = _.clone(listTodo);
    currentTodoList.push(todoItem);
    setListTodo(currentTodoList);

    // setListTodo([...listTodo, todoItem]); // spread operator
  };

  const handleDeleteTodo = (id) => {
    let currentTodoList = _.clone(listTodo);
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setListTodo(currentTodoList);
  };

  return (
    <div className="">
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
      <div>--------- List Todo --------- </div>
      {listTodo.map((item, index) => {
        console.log(">>> check item: ", item, index);
        return (
          <div key={item.id} onClick={() => handleDeleteTodo(item.id)}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
