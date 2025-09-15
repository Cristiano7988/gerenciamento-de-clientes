import { CardActions } from "../CardActions/Index";
import "./style.css";

export const ClientCard = ({ client }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  return <div className="client-card">
    <b>{client.name}</b>
    <div>Salário: {formatCurrency(client.salary)}</div>  
    <div>Empresa: {formatCurrency(client.companyValuation)}</div>
    <CardActions client={client} />
  </div>
}
