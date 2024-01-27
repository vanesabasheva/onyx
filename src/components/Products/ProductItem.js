import ProductItemForm from "./ProductItemForm";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const addToCartHandler = (amount) => {};

  return (
    <Card>
      <article className={classes.product}>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
        </Link>
        <p>{product.price}</p>
        <div>
          <ProductItemForm id={product.id} onAddToCart={addToCartHandler} />
        </div>
      </article>
    </Card>
  );
}

export default ProductItem;
