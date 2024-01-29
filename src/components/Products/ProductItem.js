import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import CartIcon from "../Cart/CartIcon";

function ProductItem({ product }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <Card>
      <article className={classes.product}>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <h1 className={classes.title}>{product.title}</h1>
        </Link>
        <p className={classes.description}>{product.description}</p>
        <p className={classes.price}>{product.price} лв.</p>
        <div>
          <button
            className={classes[`button-container`]}
            onClick={() => addItemToCart(product.id)}>
            <span>Добави</span>
            <span>
              <CartIcon className={classes.icon} />
            </span>
          </button>
        </div>
      </article>
    </Card>
  );
}

export default ProductItem;
