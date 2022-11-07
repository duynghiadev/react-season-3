import { useState } from "react";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");

  const [isShowDetail, setIsShowDetail] = useState(true);

  const handleClickBtn = () => {
    let object = {
      name,
      price,
      size,
      color,
    };

    let productList = localStorage.getItem("productList");
    if (productList) {
      let arr = JSON.parse(productList);
      arr.push(object);
      localStorage.setItem("productList", JSON.stringify(arr));
    } else {
      localStorage.setItem("productList", JSON.stringify([object]));
    }

    setName("");
    setSize(0);
    setPrice(0);
    setColor("");
  };

  const handleHideShow = (status) => {
    setIsShowDetail(status);
  };

  localStorage.setItem("name", "eric");
  localStorage.setItem("channel", "duynghia");

  return (
    <div>
      {isShowDetail === true && (
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
      )}

      {isShowDetail === true ? (
        <div
          onClick={() => {
            handleHideShow(false);
          }}
        >
          Hide this form
        </div>
      ) : (
        <div
          onClick={() => {
            handleHideShow(true);
          }}
        >
          Show the form
        </div>
      )}

      <div>
        List products:
        <div>{localStorage.getItem("productList")}</div>
      </div>
    </div>
  );
};

export default AddNewProduct;
