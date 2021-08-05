import React, { useState } from "react";

function PlantCard({ item }) {
  const { name, image, price, id } = item;
  const [outOfStock, setOutOfStock] = useState(false);
  return (
    <li key={id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {outOfStock ? (
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
      )}
    </li>
  );
}

export default PlantCard;
