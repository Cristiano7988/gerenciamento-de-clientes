import { UserContext } from "../../shell/contexts/UserContext";
import { useContext } from "react";
import "./style.css";
import { Button } from "../../ui/Button/Index";
import { SideMenu } from "../SideMenu/Index";
import { NavLink } from "react-router-dom";

export const AppBar = () => {
  const { user, setUser } = useContext(UserContext);

  const logout = () => setUser({ name: "" });

  return <div className="app-bar">
    <SideMenu />

    <div className="desktop-menu-items">
      <Button href="/clientes" className="link" children={"Clientes"} />
      <Button href="/clientes/selecionados" className="link" children={"Clientes selecionados"} />
      <NavLink to="/" onClick={logout} className="link" children={"Sair"} />
    </div>
    
    <div>
      <div>Olá, <b>{user.name}!</b></div>
      <NavLink to="/" onClick={logout} className="link mobile-menu-items" children={"Sair"} />
    </div>
  </div>
}
