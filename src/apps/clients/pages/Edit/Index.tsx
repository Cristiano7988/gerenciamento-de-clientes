import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardForm } from "../../ui/CardForm/Index";
import { Message } from "../../ui/Message/Index";
import CircularProgress from "@mui/material/CircularProgress";
import "./style.css";

export const Edit = () => {
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({ text: "", status: "" });
    const { id } = useParams();

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
    const navigate = useNavigate();
    const handleClick = (e) => {
        const modalPageClicked = e.target.classList.contains("modal-page");
        if (modalPageClicked) navigate("/clientes");
    }

    const submit = async (data) => await fetch(`https://boasorte.teddybackoffice.com.br/users/${id}`, {
        body: JSON.stringify(data),
        method: "patch",
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then((r) => r.json())
    .then((response) => response)
    .catch(console.log)

    if (loading) return <CircularProgress />

    return <div onClick={handleClick} className="modal-page">
        {message.text
            ? <Message message={message} />
            : <CardForm submit={submit} title="Editar cliente:" client={client} />}
    </div>
}
