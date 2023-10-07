import { NavLink } from "react-router-dom";
import classes from "./Category.module.css";

function Category(props) {
  // TODO: ADD PROPER LINK TO CATEGORY
  const productCategories = props.categories.map((category) => (
    <li>
      <NavLink to="/">{category.name}</NavLink>
    </li>
  ));

  return (
    <div className={classes.categories}>
      <h2>Категории</h2>
      <div>
        <ul>{productCategories}</ul>
      </div>
    </div>
  );
}

export default Category;
