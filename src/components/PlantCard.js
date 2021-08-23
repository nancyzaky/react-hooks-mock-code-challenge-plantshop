import React, { useState } from "react";

function PlantCard({ item, list, setList }) {
  const { name, image, price, id } = item;
  const [outOfStock, setOutOfStock] = useState(false);
  const handleDelete = (key) => {
    fetch(`http://localhost:6001/plants/${key}`, {
      method: "Delete",
    });
    setList(
      list.filter((item) => {
        return item.id !== key;
      })
    );
  };
  return (
    <li key={id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {/* {outOfStock ? (
         <button
          onClick={() => {
            setOutOfStock(!outOfStock);
          }}
        >
          Out of Stock
        </button>
      ) : (
        <button
          onClick={() => {
            setOutOfStock(!outOfStock);
          }}
          className="primary"
        >
          In Stock
        </button>
      )} */}
      <button
        className={!outOfStock ? `primary` : null}
        onClick={() => {
          setOutOfStock(!outOfStock);
        }}
      >
        {outOfStock ? "Out Of Stock" : "in Stock"}
      </button>
      <button
        className="primary"
        onClick={() => {
          handleDelete(id);
        }}
      >
        delete
      </button>
    </li>
  );
}

export default PlantCard;
