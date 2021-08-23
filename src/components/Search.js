import React, { useState, useEffect, useRef } from "react";

function Search({ list, setList }) {
  const searchVal = useRef("");
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        ref={searchVal}
        onChange={() => {
          const searchlen = searchVal.current.value.length;
          console.log(searchlen);
          const newArr = [...list];
          if (searchlen > 0) {
            // setList(allPlants);

            const filteredArr = newArr.filter((item) => {
              console.log(
                item.name.slice(0, searchlen),
                searchVal.current.value
              );
              return item.name.slice(0, searchlen) === searchVal.current.value;
            });

            setList(filteredArr);
          } else {
            fetch("http://localhost:6001/plants")
              .then((resp) => resp.json())
              .then((data) => {
                setList(data);
              });
          }
        }}
      />
    </div>
  );
}

export default Search;
