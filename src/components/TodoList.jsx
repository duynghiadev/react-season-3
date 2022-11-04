import React, { Component, useState } from "react";

const TodoList = () => {
  const [name, setName] = useState("");

  const HandleClickBtn = (event, msg) => {
    console.log(">>> run check button: ", name);
  };

  return (
    <div className="">
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={(event) => HandleClickBtn(event, "buttonClick")}
      >
        Submit
      </button>
      <br /> <br />
      Hello Todo List name = {name}
    </div>
  );
};
export default TodoList;
