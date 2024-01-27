import classes from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar(props) {
  return (
    <div className={classes.search}>
      <input
        className={classes["search-input"]}
        type="text"
        placeholder="От какво се нуждаеш?"
        value={props.value}
        onChange={props.onSearchChange}></input>

      <button className={classes["search-button"]} onClick={props.onSearch}>
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
}

export default SearchBar;
