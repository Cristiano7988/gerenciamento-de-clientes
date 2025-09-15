import PlusIcon from "../assets/plus-icon.png";
import EditIcon from "../assets/edit-icon.png";
import { DeleteAction } from "../DeleteAction/Index";
import "./style.css";

export const CardActions = ({ client }) => {

  return <div className="card-actions">
    <img src={PlusIcon} alt="Adicionar" width={20} />
    <a href={"/clientes/" + client.id + "/edit"}>
      <img src={EditIcon} alt="Editar" width={20} />
    </a>
    <DeleteAction client={client} />
  </div>
}
