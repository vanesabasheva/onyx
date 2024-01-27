import Category from "../components/Categories/Category";
import Pagination from "../components/Layout/Pagination";
import ProductList from "../components/Products/ProductList";
import Carousel from "../components/UI/Carousel";
import classes from "./Products.module.css";
import { DUMMY_PRODUCTS } from "../assets/mocks/DummyData";
import { categories } from "../assets/mocks/DummyData";
import carousel_image from "../assets/img/carousel-image.webp";

import { useLoaderData } from "react-router-dom";

function ProductsPage({ icon }) {
  const loadedData = useLoaderData();

  return (
    <>
      <div className={classes[`category-heading`]}>
        {icon}
        <p>{loadedData.heading}</p>
      </div>
      <div className={classes[`products-page-layout`]}>
        <Category categories={loadedData.categories} />
        <div className={classes[`carousel-products-layout`]}>
          <Carousel image={loadedData.carousel_image} />
          <ProductList products={loadedData.products} />
        </div>
        <div className={classes.paging}>
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;

export async function productsLoader() {
  return {
    products: DUMMY_PRODUCTS,
    categories: categories,
    heading: "Козметика",
    carousel_image: carousel_image,
  };
}
