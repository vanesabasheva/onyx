import ProductItemForm from "./ProductItemForm";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  const addToCartHandler = (amount) => {};
  console.log(product);

  return (
    <Card>
      <article className={classes.product}>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <h4>{product.price}</h4>
        <div>
          <ProductItemForm id={product.id} onAddToCart={addToCartHandler} />
        </div>
      </article>
    </Card>
  );
}

export default ProductItem;
