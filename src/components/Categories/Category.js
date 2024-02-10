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
      <div>
        <ul>
          <li>
            <h4>Категории</h4>
          </li>
            {productCategories}
        </ul>
      </div>
    </div>
  );
}

export default Category;
