import { NavLink } from "react-router-dom";
import { useState } from "react";

import classes from "./MainNavigation.module.css";
import CartButton from "../Layout/CartButton";
import SearchBar from "../Layout/SearchBar";

function MainNavigation() {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = () => {};

  //TO DO: optimize following search state
  const changeSearchInputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/otc-medicine"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              ЛЕКАРСТВА
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cosmetics"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              КОЗМЕТИКА
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/supplements"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              ДОБАВКИ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mom-baby"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              МАМА И БЕБЕ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sale"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              ПРОМОЦИИ
            </NavLink>
          </li>
          <SearchBar
            value={searchValue}
            onSearchChange={changeSearchInputHandler}
            onSearch={searchHandler}
          />
          <CartButton />
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
