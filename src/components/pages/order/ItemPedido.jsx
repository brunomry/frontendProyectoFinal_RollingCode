import { Button } from "react-bootstrap";
import "../../../styles/administrador.css";

const ItemPedido = () => {
  return (
    <tr>
      <td>juan</td>
      <td>2024-04-15</td>
      <td>pizza de metro</td>
      <td>
        <Button
          className="me-lg-2 btn btn-warning"
        >
          Pendiente
        </Button>
      </td>
    </tr>
  );
};

export default ItemPedido;
