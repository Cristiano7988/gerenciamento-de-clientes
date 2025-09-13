import { CardActions } from "../CardActions/Index";
import "./style.css";

export const ClientCard = ({ client }) => {
  return <div className="client-card">
    <b>{client.name}</b>
    <div>Salário: {client.salary}</div>
    <div>Empresa: {client.company}</div>
    <CardActions />
  </div>
}
