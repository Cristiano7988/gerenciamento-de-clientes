import TrashIcon from "../assets/trash-icon.png";

export const DeleteAction = ({ client }) => {
    return <a href={"/clientes/" + client.id + "/delete"}>
      <img src={TrashIcon} alt="Excluir" width={20} />
    </a>
}
