const DisplayTodo = (props) => {
  const handleDeleteTodo = () => {};

  const listTodo = props.listTodo;

  return (
    <div>
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

export default DisplayTodo;
