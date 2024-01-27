import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ProductsPage from "./pages/Products";
import carousel_image from "./assets/img/carousel-image.webp";
import { ReactComponent as MedicineIcon } from "./assets/icons/MedicineIcon.svg";
import { ReactComponent as ButterflyIcon } from "./assets/icons/ButterflyIcon.svg";
import { ReactComponent as WeightsIcon } from "./assets/icons/WeightsIcon.svg";
import { ReactComponent as BabyIcon } from "./assets/icons/BabyIcon.svg";
import { ReactComponent as TagIcon } from "./assets/icons/TagIcon.svg";
import { ReactComponent as WaterIcon } from "./assets/icons/WaterIcon.svg";
import { DUMMY_PRODUCTS } from "./assets/mocks/DummyData";
import { DUMMY_PRODUCT } from "./assets/mocks/DummyData";
import { SALE_IMAGES } from "./assets/mocks/DummyData";
import { categories } from "./assets/mocks/DummyData";
import ProductDetailPage from "./pages/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage images={SALE_IMAGES} /> },
      {
        path: "category",
        children: [
          {
            path: "Лекарства",
            element: <ProductsPage icon={<MedicineIcon />} />,
            loader: () => {
              return {
                products: DUMMY_PRODUCTS,
                categories: categories,
                heading: "Лекарства без лекарско предписание",
                carousel_image: carousel_image,
              };
            },
          },
          {
            path: "Козметика",
            element: <ProductsPage icon={<ButterflyIcon />} />,
            loader: () => {
              return {
                products: DUMMY_PRODUCTS,
                categories: categories,
                heading: "Козметика",
                carousel_image: carousel_image,
              };
            },
          },
          {
            path: "Хранителни добавки",
            element: <ProductsPage icon={<WeightsIcon />} />,
            loader: () => {
              return {
                products: DUMMY_PRODUCTS,
                categories: categories,
                heading: "Хранителни добавки",
                carousel_image: carousel_image,
              };
            },
          },
          {
            path: "Мама и бебе",
            element: <ProductsPage icon={<BabyIcon />} />,
            loader: () => {
              return {
                products: DUMMY_PRODUCTS,
                categories: categories,
                heading: "Мама и бебе",
                carousel_image: carousel_image,
              };
            },
          },
          {
            path: "Лична хигиена",
            element: <ProductsPage icon={<WaterIcon />} />,
            loader: () => {
              return {
                products: DUMMY_PRODUCTS,
                categories: categories,
                heading: "Лична хигиена",
                carousel_image: carousel_image,
              };
            },
          },
          {
            path: "Промоции",
            element: <ProductsPage icon={<TagIcon />} />,
            loader: () => {
              return {
                products: DUMMY_PRODUCTS,
                categories: categories,
                heading: "Промоции",
                carousel_image: carousel_image,
              };
            },
          },
          {
            path: ":categoryId",
            element: <ProductsPage />,
            loader: () => {
              return {
                products: DUMMY_PRODUCTS,
                categories: categories,
                heading: "ДИНАМИЧНА КАТЕГОРИЯ",
                carousel_image: carousel_image,
              };
            },
          },
        ],
      },

      {
        path: "/product/:productId",
        element: <ProductDetailPage />,
        loader: () => {
          return {
            product: DUMMY_PRODUCT,
          };
        },
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
