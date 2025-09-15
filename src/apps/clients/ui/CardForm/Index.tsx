import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { NumberInput } from "../../../ui/NumberInput/Index";
import { TextInput } from "../../../ui/TextInput/Index";
import { Message } from "../Message/Index";
import { useForm } from '@inertiajs/react';
import "./style.css";

export const CardForm = ({ submit, title = "", client }) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        text: "",
        status: ""
    });
    const { data, setData } = useForm(client);

    const handleChange = (value, name) => {
        if (name !== "name") value = Number(value);
        setData(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: "", status: "" });

        submit(data)
            .then((response) => {
                if (!response) return setMessage({ status: "error", text: "Não foi possível realizar esta ação." })
                if (response.error) return setMessage({ status: "error", text: response.message });
                
                setMessage({ status: "success", text: `Cliente "${response.name}" salvo!` });
                setData("name", "");
                setData("salary", "");
                setData("companyValuation", "");
            })
            .finally(() => setLoading(false));
    }

    return <form onSubmit={handleSubmit} className="card-form">
        <b>{title}</b>
        {loading
            ? <CircularProgress className="loading-icon" />
            : <>
                <TextInput
                    required
                    defaultValue={data.name}
                    name="name"
                    onChange={handleChange}
                    className="light small-text"
                    placeholder="Digite o nome:"
                />
                <NumberInput
                    required
                    defaultValue={data.salary}
                    name="salary"
                    onChange={handleChange}
                    className="light small-text"
                    type="number"
                    step="0.1"
                    min={0}
                    placeholder="Digite o salário:"
                />
                <NumberInput
                    required
                    defaultValue={data.companyValuation}
                    name="companyValuation"
                    onChange={handleChange}
                    className="light small-text"
                    type="number"
                    step="0.1"
                    min={0}
                    placeholder="Digite o valor da empresa:"
                />
                <input
                    type="submit"
                    className="btn small-text"
                    value={title}
                />
            </>
        }
        <Message message={message} />
    </form>
}
