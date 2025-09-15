import "./style.css";
import { useNavigate } from "react-router-dom";
import { CardForm } from "../../ui/CardForm/Index";

export const Create = () => {
    const client = {
        name: "",
        salary: "",
        companyValuation: ""
    }
    const navigate = useNavigate();
    const handleClick = (e) => {
        const modalPageClicked = e.target.classList.contains("modal-page");
        if (modalPageClicked) navigate("/clientes");
    }

    const submit = async (data) => await fetch("https://boasorte.teddybackoffice.com.br/users", {
        body: JSON.stringify(data),
        method: "post",
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then((r) => r.json())
    .then((response) => response)
    .catch(console.log)

    return <div onClick={handleClick} className="modal-page">
        <CardForm submit={submit} title="Criar cliente:" client={client} />
    </div>
}
