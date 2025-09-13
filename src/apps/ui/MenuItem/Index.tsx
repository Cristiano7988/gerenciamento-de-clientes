import "./style.css";
import { NavLink } from "react-router-dom";

export const MenuItem = ({ icon, label, to }) => {
  return <NavLink to={to} className="menu-item">
    {icon}
    <div>{label}</div>
  </NavLink>
}
