import { Link } from "react-router-dom";
import "../../../styles/administrador.css";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductosAPI } from "../../../helpers/queries";

const ItemProducto = ({ producto, setProductos }) => {
  const borrarProducto = async () => {
    Swal.fire({
      title: "¿Estás seguro que deseas eliminar el producto?",
      text: "No se puede revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#60b0fc",
      cancelButtonColor: "#f77266e2",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProductoAPI(producto._id);

        if(respuesta.status === 200){
          Swal.fire({
            title:"Producto eliminado",
            text:`El producto "${producto.nombre}" fue eliminado con éxito`,
            icon: "success",
          });

          const listaProductos = await leerProductosAPI();
          setProductos(listaProductos);
        }else{
          Swal.fire({
            title:"Ocurrió un error",
            text: `El producto "${producto.nombre}" no fue eliminado. Vuelve a intentar en unos minutos.`
          })
        }
      }
    });
  };

  return (
    <tr className='align-middle'>
      <td>{producto.nombre}</td>
      <td>{producto.categoria}</td>
      <td>{producto.precio}</td>
      <td>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          title={producto.nombre}
          className="imgProduct"
        />
      </td>
      <td>{producto.estado}</td>
      <td className='d-flex flex-column gap-2 align-items-center flex-lg-row d-lg-table-cell'>
        <Link
          title='Ver producto'
          to={`/administrador/productos/verProducto/${producto._id}`}
          className='me-lg-2 btn btn-secondary text-dark'
        >
          <i className='fa-solid fa-eye'></i>
        </Link>
        <Link
          title='Editar producto'
          to={`/administrador/productos/editarProducto/${producto._id}`}
          className='me-lg-2 btn btn-warning'
        >
          <i className='fa-solid fa-pen-to-square'></i>
        </Link>
        <Button
          variant="danger"
          title="Eliminar producto"
          className="me-lg-2"
          onClick={borrarProducto}
        >
          <i className="fa-solid fa-trash text-dark"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
