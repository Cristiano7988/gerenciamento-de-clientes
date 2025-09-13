import { AppBar } from "../../ui/AppBar/Index";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return <>
    <AppBar />
    <Outlet />
  </>
}
