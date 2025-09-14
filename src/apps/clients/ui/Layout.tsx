import { AppBar } from "../../ui/AppBar/Index";
import { Outlet } from "react-router-dom";
import { Index } from "../pages/Index/Index";

export const Layout = () => {
  return <>
    <AppBar />
    <Index />
    <Outlet />
  </>
}
