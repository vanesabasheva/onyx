import { useParams, useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import classes from "./ProductDetail.module.css";
import ProductItemForm from "../components/Products/ProductItemForm";

function ProductDetailPage() {
  const params = useParams();
  console.log(params);
  const product = useLoaderData();

  const [isDescriptionClicked, setIsDescriptionClicked] = useState(true);
  const [isInstructionsClicked, setIsInstructionsClicked] = useState(false);

  return (
    <>
      <section className={classes[`product-container`]}>
        <img alt={product.product.name} src={product.product.image} />
        <div className={classes[`add-to-cart-container`]}>
          <Link
            to={`/category/${product.product.brand}`}
            className={classes[`product-brand-name`]}>
            <p>{product.product.brand}</p>
          </Link>

          <h2>{product.product.name}</h2>
          <div className={classes["extra-info"]}>
            <p>Тегло: {product.product.weight}кг</p>
            <p>Номер: {product.product.productNo}</p>
          </div>
          <p className={classes["product-price"]}>
            {product.product.price} лв.
          </p>
          <ProductItemForm />
        </div>
      </section>

      <section className={classes["additional-info"]}>
        <ul className={classes["button-container"]}>
          <li>
            <button
              className={`${classes.btn} ${
                isDescriptionClicked && classes["btn-active"]
              }`}
              onClick={() => {
                setIsDescriptionClicked(true);
                setIsInstructionsClicked(false);
              }}>
              Описание
            </button>
          </li>
          <li>
            <button
              className={`${classes.btn} ${
                isInstructionsClicked && classes["btn-active"]
              }`}
              onClick={() => {
                setIsDescriptionClicked(false);
                setIsInstructionsClicked(true);
              }}>
              Начин на употребa
            </button>
          </li>
        </ul>
        <div className={classes.description}>
          {isDescriptionClicked && (
            <>
              <p>{product.product.description}</p>
              <p>
                <strong>Състав:</strong> {product.product.ingredients}
              </p>
            </>
          )}

          {isInstructionsClicked && (
            <>
              <p>{product.product.instructions}</p>
              <p></p>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default ProductDetailPage;

export async function productLoader() {
  return {
    name: "",
    image: "",
    description: "",
    price: 12.99,
    sale: false,
  };
}
