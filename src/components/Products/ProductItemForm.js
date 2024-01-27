import { useRef, useState } from "react";

import Input from "../UI/Input";
import classes from "./ProductItemForm.module.css";
import CartIcon from "../Cart/CartIcon";

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Брой"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes[`button-container`]}>
        <span>Добави</span>
        <span>
          <CartIcon className={classes.icon} />
        </span>
      </button>

      {!amountIsValid && <p>Въведете валиден брой продукти (1-10).</p>}
    </form>
  );
};

export default ProductItemForm;
