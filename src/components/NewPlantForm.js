import React, { useState } from "react";

function NewPlantForm({ list, setList }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImage] = useState("");
  const handleSub = (e) => {
    e.preventDefault();
    const newObj = { name: name, image: img, price: price };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    });
    setList([...list, newObj]);
    setName("");
    setImage("");
    setPrice(0);
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form type="submit" onSubmit={handleSub}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={img}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
