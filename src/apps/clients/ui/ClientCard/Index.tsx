import { CardActions } from "../CardActions/Index";
import { useContext } from "react";
import { SelectedClientsContext } from "../../../shell/contexts/SelectedClientsContext";
import "./style.css";
import { DeselectAction } from "../DeselectAction/Index";

export const ClientCard = ({ client }) => {
  const { selectedClients } = useContext(SelectedClientsContext);
  const [alreadySelected] = selectedClients.filter(clientSelected => clientSelected.id == client.id);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  return <div className="client-card">
    <b>{client.name}</b>
    <div>Salário: {formatCurrency(client.salary)}</div>  
    <div>Empresa: {formatCurrency(client.companyValuation)}</div>
    {alreadySelected
      ? <DeselectAction client={client} />
      : <CardActions client={client} />
    }
  </div>
}
