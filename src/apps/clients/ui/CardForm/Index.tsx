import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { NumberInput } from "../../../ui/NumberInput/Index";
import { TextInput } from "../../../ui/TextInput/Index";
import { useForm } from '@inertiajs/react';
import "./style.css";

export const CardForm = ({ submit }) => {
    const [loading, setLoading] = useState(false);
    const { data, setData } = useForm({
        name: "",
        salary: "",
        companyValuation: ""
    });

    const handleChange = (value, name) => {
        if (name !== "name") value = Number(value);
        setData(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        submit(data)
            .then(() => {
                setData("name", "");
                setData("salary", "");
                setData("companyValuation", "");
            })
            .finally(() => setLoading(false));
    }

    return <form onSubmit={handleSubmit} className="card-form">
        <b>Criar cliente:</b>
        {loading
            ? <CircularProgress sx={{ margin: 'auto' }} />
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
                    value="Criar cliente"
                />
            </>
        }
    </form>
}
