import { useState } from "react";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");

  const handleClickBtn = () => {
    console.log(">>> check data: ", name, price, size, color);
  };

  return (
    <fieldset>
      <legend>Add New Product</legend>
      <div className="input-product">
        <label htmlFor="">Name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="input-product">
        <label htmlFor="">Price:</label>
        <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className="input-product">
        <label htmlFor="">size:</label>
        <input
          type="text"
          value={size}
          onChange={(event) => setSize(event.target.value)}
        />
      </div>
      <div className="input-product">
        <label htmlFor="">Color:</label>
        <input
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleClickBtn()}>+Add New</button>
      </div>
    </fieldset>
  );
};

export default AddNewProduct;
