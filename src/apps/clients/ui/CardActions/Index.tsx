import PlusIcon from "../assets/plus-icon.png";
import EditIcon from "../assets/edit-icon.png";
import TrashIcon from "../assets/trash-icon.png";
import "./style.css";

export const CardActions = () => {
  return <div className="card-actions">
    <img src={PlusIcon} alt="Adicionar" width={20} />
    <img src={EditIcon} alt="Editar" width={20} />
    <img src={TrashIcon} alt="Excluir" width={20} />
  </div>
}
