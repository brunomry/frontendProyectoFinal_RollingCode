import { Link } from "react-router-dom";
import "../../../styles/administrador.css";
import { Button } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <tr className="align-middle">
      <td>pizza de metro</td>
      <td>Pizzas</td>
      <td>4500</td>
      <td>
        <img
          src="https://images.pexels.com/photos/162744/tomatoes-tomato-quiche-red-yellow-162744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="imgProduct"
        />
      </td>
      <td>Disponible</td>
      <td className="d-flex flex-column gap-2 align-items-center flex-lg-row d-lg-table-cell">
        <Link
          title="Ver producto"
          to={`/administrador/verProducto/id`}
          className="me-lg-2 btn btn-secondary text-dark"
        >
          <i className="fa-solid fa-eye"></i>
        </Link>
        <Link
          title="Editar producto"
          to={`/administrador/editarProducto/id`}
          className="me-lg-2 btn btn-warning"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
        <Button variant="danger" title="Eliminar producto" className="me-lg-2">
          <i className="fa-solid fa-trash text-dark"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
