import React, { useState, useEffect, useRef } from "react";

function Search({ list, setList }) {
  console.log(list);
  const [val, setVal] = useState("");
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
          if (searchlen > 0) {
            const newArr = list.filter((item) => {
              console.log(
                item.name.slice(0, searchlen),
                searchVal.current.value
              );
              return item.name.slice(0, searchlen) === searchVal.current.value;
            });
            console.log(list);
            setList(newArr);
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
