import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";

function RootLayout() {
  // TODO: wrap <Outlet/> in <main></main>
  // tag and apply styling: Video React COurse - 307
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
