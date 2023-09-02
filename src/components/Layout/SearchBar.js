import classes from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder="Търсене"
        value={props.value}
        onChange={props.onSearchChange}
      />
      <button onClick={props.onSearch}>Търси</button>
    </div>
  );
}

export default SearchBar;
