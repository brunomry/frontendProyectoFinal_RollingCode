import { Link } from 'react-router-dom';
import '../../../styles/administrador.css';
import { Button } from 'react-bootstrap';

const ItemProducto = ({ producto }) => {
  return (
    <tr className='align-middle'>
      <td>{producto.nombre}</td>
      <td>{producto.categoria}</td>
      <td>{producto.precio}</td>
      <td>
        <img src={producto.imagen} alt='' className='imgProduct' />
      </td>
      <td>{producto.estado}</td>
      <td className='d-flex flex-column gap-2 align-items-center flex-lg-row d-lg-table-cell'>
        <Link
          title='Ver producto'
          to={`/administrador/productos/verProducto/id`}
          className='me-lg-2 btn btn-secondary text-dark'
        >
          <i className='fa-solid fa-eye'></i>
        </Link>
        <Link
          title='Editar producto'
          to={`/administrador/productos/editarProducto/${producto.id}`}
          className='me-lg-2 btn btn-warning'
        >
          <i className='fa-solid fa-pen-to-square'></i>
        </Link>
        <Button variant='danger' title='Eliminar producto' className='me-lg-2'>
          <i className='fa-solid fa-trash text-dark'></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
