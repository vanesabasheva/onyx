import { NavLink } from "react-router-dom";
import { useState } from "react";
import classes from "./MainNavigation.module.css";
import CartButton from "../Cart/CartButton";
import SearchBar from "../Layout/SearchBar";
import Header from "../Layout/Header";

export function MainNavigation() {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = () => {};

  //TO DO: optimize following search state
  const changeSearchInputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Header />

      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/otc-medicine"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end>
                Лекарства
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cosmetics"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>
                Козметика
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/supplements"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>
                Добавки
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mom-baby"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>
                Мама и Бебе
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sale"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>
                Промоции
              </NavLink>
            </li>
            <li>
              <SearchBar
                value={searchValue}
                onSearchChange={changeSearchInputHandler}
                onSearch={searchHandler}
              />
            </li>
            <li>
              <CartButton />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
