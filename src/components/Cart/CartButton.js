import { useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

function CartButton(props) {
  const [btnIsHighlighted] = useState(false);
  
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{props.cartQuantity}</span>
    </button>
  );
}

export default CartButton;
