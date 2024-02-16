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
import { categories1 } from "./assets/mocks/DummyData";
import ProductDetailPage from "./pages/ProductDetail";
import CartContextProvider from "./store/shopping-cart-context";
import FormSubmission from "./components/FormSubmission/FormSubmission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage images={SALE_IMAGES} /> },
      {
        path:"checkout",
        element: <FormSubmission />
      },
      {
        path: "category",
        children: [
          {
            path: "Лекарства",
            element: <ProductsPage icon={<MedicineIcon />} />,
            loader: () => {
              return {
                products: DUMMY_PRODUCTS,
                categories: categories1,
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
                categories: categories1,
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
                categories: categories1,
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
                categories: categories1,
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
                categories: categories1,
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
                categories: categories1,
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
                categories: categories1,
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
      <CartContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
