import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

function ProductList({ products }) {
  const productList = products.map((product) => (
    <li>
      <ProductItem key={product.id} product={product}></ProductItem>
    </li>
  ));

  const numberOfProducts = products.length;

  return (
    <section className={classes.products}>
      <h2>
        Продукти
        <span className={classes[`irrelevant-info`]}>
          ({numberOfProducts} продукта)
        </span>
      </h2>

      <ul>{productList}</ul>
    </section>
  );
}

export default ProductList;
