import { useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

function CartButton(props) {
  const [btnIsHighlighted] = useState(false);

  // TODO: get full items with context
  // const cartCtx = useContext(CartContext);
  // const { items } = cartCtx;

  // const numberOfCartItems = items.reduce((curNumber, item) => {
  //  return curNumber + item.amount;
  // }, 0);

  // const numberOfCartItems = 3;
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* <span className={classes.badge}>{numberOfCartItems}</span> */}
    </button>
  );
}

export default CartButton;
