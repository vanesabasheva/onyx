import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ProductsPage from "./pages/Products";
import carousel_image from "./assets/carousel-image.webp";
import { ReactComponent as MedicineIcon } from "./assets/icons/MedicineIcon.svg";
import { ReactComponent as ButterflyIcon } from "./assets/icons/ButterflyIcon.svg";
import { ReactComponent as WeightsIcon } from "./assets/icons/WeightsIcon.svg";
import { ReactComponent as BabyIcon } from "./assets/icons/BabyIcon.svg";
import { ReactComponent as TagIcon } from "./assets/icons/TagIcon.svg";
import { DUMMY_PRODUCTS } from "./assets/mocks/DummyData";
import { categories } from "./assets/mocks/DummyData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/otc-medicine",
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
        path: "cosmetics",
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
        path: "supplements",
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
        path: "mom-baby",
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
        path: "sale",
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
