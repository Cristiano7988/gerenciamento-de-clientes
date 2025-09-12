import { Button } from '../components/ui/Button/Button'
import { Title } from '../components/ui/Title/Title'
import { TextInput } from '../components/ui/TextInput/TextInput'

export const Welcome = () => {
  return <div className="App">
    <Title h={1} children={'Olá, seja bem-vindo!'} />
    <TextInput placeholder="Digite o seu nome:" />
    <Button href="/clientes" children={"Entrar"} />
  </div>
}
