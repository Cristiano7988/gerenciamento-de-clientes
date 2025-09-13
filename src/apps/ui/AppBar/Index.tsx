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

    <div style={{ display: 'flex', gap: 33 }}>
      <Button href="/clientes" className="link" children={"Clientes"} />
      <Button href="#" className="link" children={"Clientes selecionados"} />
      <NavLink to="/" onClick={logout} className="link" children={"Sair"} />
    </div>
    
    <div>Olá, <b>{user.name}!</b></div>
  </div>
}
