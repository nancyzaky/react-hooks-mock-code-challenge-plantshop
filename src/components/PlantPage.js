import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [list, setList] = useState([]);
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
    <main>
      <NewPlantForm list={list} setList={setList} />
      <Search list={list} setList={setList} />
      <PlantList list={list} setList={setList} />
    </main>
  );
}

export default PlantPage;
