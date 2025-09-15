import PlusIcon from "../assets/plus-icon.png";
import { useContext } from "react";
import { SelectedClientsContext } from "../../../shell/contexts/SelectedClientsContext";

export const SelectAction = ({ client }) => {
    const { selectedClients, setSelectedClients } = useContext(SelectedClientsContext);

    const handleClick = () => {
        setSelectedClients([
            ...selectedClients,
            client
        ]);
    }

    return <img style={{ cursor: 'pointer' }} onClick={handleClick} src={PlusIcon} alt="Adicionar à seleção" width={20} />
}
