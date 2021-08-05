import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [list, setList] = useState([]);

  return (
    <main>
      <NewPlantForm list={list} setList={setList} />
      <Search list={list} setList={setList} />
      <PlantList list={list} setList={setList} />
    </main>
  );
}

export default PlantPage;
