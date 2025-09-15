import { useNavigate } from "react-router-dom";
import { Button } from "../../../ui/Button/Index";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Message } from "../../ui/Message/Index";
import "./style.css";

export const Delete = () => {
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({ text: "", status: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://boasorte.teddybackoffice.com.br/users/${id}`)
            .then(r => r.json())
            .then((response) => {
                if (response?.error) return setMessage({ text: response.message, status: "error" })
                setClient({
                    name: response.name,
                    salary: response.salary,
                    companyValuation: response.companyValuation
                });
            })
            .finally(() => setLoading(false));
    }, []);

    const handleClick = (e) => {
        const modalPageClicked = e.target.classList.contains("modal-page");
        if (modalPageClicked) navigate("/clientes");
    }

    const submit = () => {
        setLoading(true);
        fetch(`https://boasorte.teddybackoffice.com.br/users/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .finally(() => {
                setLoading(false);
                setMessage({ status: "success", text: `Cliente "${client.name}" excluído!` })
            })
            .catch(console.log)
    }

    if (loading) return <CircularProgress />

    return <div onClick={handleClick} className="modal-page">
        {message.text
            ? <Message message={message} />
            : <div className="card-form">
                <p><b children="Excluir cliente:" /></p>
                <p>Você está prestes a excluir o cliente: <b>{client.name}</b></p>
                <Button className="btn small-text" onClick={submit} children="Excluir cliente" />
            </div>}
    </div>
}
