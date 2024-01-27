import React from "react";
import classes from "./DropdownNavigation.module.css";
import { NavLink } from "react-router-dom";

const DropdownNavigation = ({ categories, activeNav }) => {
  return (
    <div className={classes.popup}>
      <ul className={classes.subNav}>
        {categories[activeNav].map((subcategory) => (
          <li key={subcategory}>
            <NavLink
              to={`/category/${subcategory}`}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
              {subcategory}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownNavigation;
