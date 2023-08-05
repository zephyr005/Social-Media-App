import React, { useEffect, useState } from "react";

import SearchLogo from "../../assets/serach.png";
import "./Search.css";

const Search = ({ setValue }) => {
  return (
    <div className="Search">
      <h1>Social Media For Travellers</h1>
      <div className="search-bar">
        <img src={SearchLogo} alt="serach icon" />
        <input
          type="text"
          placeholder="Search here..."
          className="input"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
