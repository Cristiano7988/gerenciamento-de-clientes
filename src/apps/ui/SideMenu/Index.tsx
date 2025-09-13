import MenuIcon from '@mui/icons-material/Menu';
import "./style.css";
import LogoTeddy from "../assets/logo-teddy.png";
import { useState } from 'react';
import { MenuItems } from '../MenuItems/Index';
import { MenuHeader } from '../MenuHeader/Index';

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="side-menu">
    <MenuIcon onClick={() => setIsOpen(true)} />
    <img src={LogoTeddy} alt="Logo" width={100} />
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-content">
        <MenuHeader />
        <MenuItems setIsOpen={setIsOpen} />
      </div>
      <div className="close-menu" onClick={() => setIsOpen(false)} />
    </div>
  </div>
}
