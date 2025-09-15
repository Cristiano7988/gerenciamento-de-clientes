import TrashIcon from "../assets/trash-icon.png";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const DeleteAction = ({ client }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        const prosseguir = confirm("Deseja excluir esse cliente?");
        if (!prosseguir) return;

        setLoading(true);
        fetch(`https://boasorte.teddybackoffice.com.br/users/${client.id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .finally(() => {
                setLoading(false);
                window.location.reload();
            })
            .catch(console.log)
    }

    if (loading) return <CircularProgress />

    return <a href="#" onClick={handleClick}>
      <img src={TrashIcon} alt="Excluir" width={20} />
    </a>
}
