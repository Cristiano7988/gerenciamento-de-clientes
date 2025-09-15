import { SelectedClientsContext } from "../../../shell/contexts/SelectedClientsContext";
import { AppBar } from "../../../ui/AppBar/Index";
import { ClientCard } from "../../ui/ClientCard/Index";
import { useContext } from "react";

export const SelectedClients = () => {
    const { selectedClients } = useContext(SelectedClientsContext);
    
    return <>
        <AppBar />
        <div className="clients-index">
            {selectedClients.length
                ? <div className="clients-grid">
                    {selectedClients.map((client, index) => <ClientCard key={index} client={client} />)}
                </div>
                : "Não há clientes selecionados"}
        </div>
    </>;
}
