import { Link } from "react-router-dom";
import "../../../styles/administrador.css";

const ItemPedido = () => {
  return (
    <tr>
      <td>juan</td>
      <td>2024-04-15</td>
      <td>pizza de metro</td>
      <td>Pendiente</td>
      <td>
        <Link
          to={`/administrador/editarEstado/id`}
          className="me-lg-2 btn btn-warning"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
      </td>
    </tr>
  );
};

export default ItemPedido;
