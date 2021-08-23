import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ list, setList }) {
  return (
    <ul className="cards">
      {list.map((item) => {
        return (
          <PlantCard key={item.id} item={item} setList={setList} list={list} />
        );
      })}
    </ul>
  );
}

export default PlantList;
