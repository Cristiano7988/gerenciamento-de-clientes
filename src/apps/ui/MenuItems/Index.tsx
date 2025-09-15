import "./style.css";
import { ClientIcon } from '../icons/ClientIcon';
import { SelectedClientIcon } from '../icons/SelectedClientIcon';
import { HomeIcon } from '../icons/HomeIcon';
import { MenuItem } from '../MenuItem/Index';
import { CloseIcon } from "../icons/CloseIcon";
import { NavLink } from 'react-router-dom';

export const MenuItems = ({ setIsOpen }) => {
  return <div className="menu-items">

    <NavLink to="/clientes" onClick={() => setIsOpen(false)}>
        <CloseIcon className="close-icon" />
    </NavLink>

    <MenuItem to="/" icon={<HomeIcon />} label="Home" />
    <MenuItem to="/clientes" icon={<ClientIcon />} label="Clientes" />
    <MenuItem to="/clientes/selecionados" icon={<SelectedClientIcon />} label="Clientes Selecionados" />
  </div>
}
