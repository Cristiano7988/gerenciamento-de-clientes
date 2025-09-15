import MinusIcon from "../assets/minus-icon.png";
import { useContext } from "react";
import { SelectedClientsContext } from "../../../shell/contexts/SelectedClientsContext";

export const DeselectAction = ({ client }) => {
    const { selectedClients, setSelectedClients } = useContext(SelectedClientsContext);

    const handleClick = () => {
        const filtered = selectedClients.filter(selected => selected.id != client.id);
        setSelectedClients(filtered);
    }

    return <img style={{ cursor: 'pointer' }} onClick={handleClick} src={MinusIcon} alt="Remover da seleção" width={20} />
}
