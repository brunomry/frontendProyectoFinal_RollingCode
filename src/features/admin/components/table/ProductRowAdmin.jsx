import { Link } from "react-router-dom";
import "../../styles/admin.css";
import { Button } from "react-bootstrap";
import { useProduct } from "../../hooks/useProduct";
import useAlert from "../../../../hooks/useAlert";

const ProductRowAdmin = ({ row }) => {
  const { deletProduct } = useProduct();
  const { customAlert, autoCloseAlert } = useAlert();

  const handleDelete = async (id, customAlert, autoCloseAlert) => {
    customAlert("Estás seguro de eliminar el menú?", async() => {
      await deletProduct(id);
      autoCloseAlert("El menú fue eliminado", "success");
    });
  };

  return (
    <tr className="align-middle text-start text-secondary">
      <td className="">{row.nombre}</td>
      <td>{row.categoria}</td>
      <td>${row.precio}</td>
      <td>
        <img
          src={row.imagen}
          alt={row.nombre}
          title={row.nombre}
          className="imgProduct rounded-3"
        />
      </td>
      <td>{row.estado}</td>
      <td className="d-flex flex-column gap-2 align-items-center flex-lg-row d-lg-table-cell">
        <Link
          title="Ver menú"
          to={`/admin/productos/ver-menu/${row._id}`}
          className="me-lg-2 btn btn-secondary text-dark"
        >
          <i className="fa-solid fa-eye"></i>
        </Link>
        <Link
          title="Editar menú"
          to={`/admin/productos/editar-menu/${row._id}`}
          className="me-lg-2 btn btn-warning"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
        <Button
          variant="danger"
          title="Eliminar menú"
          className="me-lg-2"
          onClick={() => handleDelete(row._id, customAlert, autoCloseAlert)}
        >
          <i className="fa-solid fa-trash text-dark"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ProductRowAdmin;
