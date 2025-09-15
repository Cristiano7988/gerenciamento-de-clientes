import { createContext, useEffect, useState } from "react";

export const SelectedClientsContext = createContext();

export const SelectedClientsProvider = ({ children }) => {
    const selected = localStorage.getItem("selected-clients");
    const clients = selected ? JSON.parse(selected) : [];
    const [selectedClients, setSelectedClients] = useState(clients);

    useEffect(() => {
        localStorage.setItem("selected-clients", JSON.stringify(selectedClients));
    }, [selectedClients]);

    return (
        <SelectedClientsContext.Provider value={{ selectedClients, setSelectedClients }}>
            {children}
        </SelectedClientsContext.Provider>
    );
}
