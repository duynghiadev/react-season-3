const DisplayTodo = (props) => {
  const deleteTodoFromChild = (id) => {
    props.deleteTodoInParent(id);
  };

  const { listTodo } = props;

  return (
    <div>
      <div>---- List Todo ---- </div>
      {listTodo.map((item, index) => {
        return (
          <div key={item.id} onClick={() => deleteTodoFromChild(item.id)}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodo;
