import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Button } from "../../../ui/Button";
import { Title } from "../../../ui/Title";
import { TextInput } from "../../../ui/TextInput";
import "./style.css";

export const Welcome = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (value) => setUser({ name: value });

  return <div className="welcome">
    <Title h={1} children={'Olá, seja bem-vindo!'} />
    <TextInput onChange={handleChange} defaultValue={user.name} placeholder="Digite o seu nome:" />
    <Button href="/clientes" children={"Entrar"} />
  </div>
}
