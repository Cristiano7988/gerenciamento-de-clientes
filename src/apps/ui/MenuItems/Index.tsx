import "./style.css";
import { ClientIcon } from '../icons/ClientIcon';
import { SelectedClientIcon } from '../icons/SelectedClientIcon';
import { HomeIcon } from '../icons/HomeIcon';
import { MenuItem } from '../MenuItem/Index';
import { CloseIcon } from "../icons/CloseIcon";

export const MenuItems = ({ setIsOpen }) => {
  return <div className="menu-items">
    <CloseIcon onClick={() =>setIsOpen(false)} className="close-icon" />

    <MenuItem to="/" icon={<HomeIcon />} label="Home" />
    <MenuItem to="/clientes" icon={<ClientIcon />} label="Clientes" />
    <MenuItem to="/clientes/selecionados" icon={<SelectedClientIcon />} label="Clientes Selecionados" />
  </div>
}
