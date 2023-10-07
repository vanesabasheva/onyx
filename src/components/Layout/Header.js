import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <NavLink to="/">ONYX</NavLink>
        <p>pharmacy</p>
      </header>
    </>
  );
}

export default Header;
