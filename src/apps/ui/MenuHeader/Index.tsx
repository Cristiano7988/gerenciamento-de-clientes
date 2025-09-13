import "./style.css";
import LogoTeddy from "../assets/logo-teddy.png";

export const MenuHeader = () => {
  return <div className="menu-header">
    <img src={LogoTeddy} alt="Logo" width={100} />
  </div>
}
