import React, {useState} from "react";

function Search({updateSearch}) {

  const [search, setSearch] = useState("")


  const handleChange = (e) => {
    setSearch(e.target.value)
    updateSearch(e.target.value)
    ;};


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input  value={search} className="prompt" onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
