import Category from "../components/Categories/Category";
import ProductList from "../components/Products/ProductList";
import Carousel from "../components/UI/Carousel";

import { useLoaderData } from "react-router-dom";

function ProductsPage({ icon }) {
  const loadedData = useLoaderData();

  return (
    <>
      <div className="category-heading">
        {icon}
        <h2>{loadedData.heading}</h2>
      </div>
      <div className="products-page-layout">
        <Category categories={loadedData.categories} />
        <Carousel image={loadedData.carousel_image} />
        <div className="products-position">
          <ProductList products={loadedData.products} />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
