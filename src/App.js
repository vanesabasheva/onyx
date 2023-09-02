import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/Layout/Header";
import RootLayout from "./pages/Root";
import OtcHealthcarePage from "./pages/OtcHealthcare";
import CosmeticsPage from "./pages/Cosmetics";
import SupplementsPage from "./pages/Supplements";
import MomAndBabyPage from "./pages/MomAndBaby";
import SalePage from "./pages/Sale";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/otc-medicine", element: <OtcHealthcarePage /> },
      { path: "/cosmetics", element: <CosmeticsPage /> },
      { path: "/supplements", element: <SupplementsPage /> },
      { path: "/mom-baby", element: <MomAndBabyPage /> },
      { path: "/sale", element: <SalePage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
