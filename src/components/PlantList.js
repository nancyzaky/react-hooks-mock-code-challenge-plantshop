import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ list, setList }) {
  const fetchUrl = () => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => {
        setList(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <ul className="cards">
      {list.map((item) => {
        return <PlantCard item={item} />;
      })}
    </ul>
  );
}

export default PlantList;
