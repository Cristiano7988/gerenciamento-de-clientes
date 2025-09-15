import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Button } from "../../../ui/Button/Index";
import { Title } from "../../../ui/Title/Index";
import { TextInput } from "../../../ui/TextInput/Index";
import "./style.css";

export const Welcome = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (value) => setUser({ name: value });

  return <div className="welcome">
    <Title h={1} children={'Olá, seja bem-vindo!'} />
    <TextInput onChange={handleChange} defaultValue={user.name} placeholder="Digite o seu nome:" />
    {user.name && <Button href={"/clientes"} className="btn" children={"Entrar"} />}
  </div>
}
