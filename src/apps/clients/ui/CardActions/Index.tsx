import EditIcon from "../assets/edit-icon.png";
import { SelectAction } from "../SelectAction/Index";
import { DeleteAction } from "../DeleteAction/Index";
import "./style.css";

export const CardActions = ({ client }) => {

  return <div className="card-actions">
    <SelectAction client={client} />
    <a href={"/clientes/" + client.id + "/edit"}>
      <img src={EditIcon} alt="Editar" width={20} />
    </a>
    <DeleteAction client={client} />
  </div>
}
