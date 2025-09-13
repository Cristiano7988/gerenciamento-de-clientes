import { ClientCard } from "../../ui/ClientCard/Index";
import "./style.css";
import { useState } from "react";

const client = {
  id: 1,
  name: "Cliente 1",
  salary: "R$ 1.000,00",
  company: "R$ 2.000,00",
}

export const Index = () => {
  const [clients, setClients] = useState([client, client, client, client, client, client, client, client, client, client]);

  return <div className="clients-index">
    <p><b>{clients.length}</b> clientes encontrados:</p>
    <div className="clients-grid">
      {clients.map((client, index) => <ClientCard key={index} client={client} />)}
    </div>
  </div>;
}
