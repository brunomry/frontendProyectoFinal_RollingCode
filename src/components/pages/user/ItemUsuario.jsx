import { Button } from 'react-bootstrap';
import '../../../styles/administrador.css';
import { editarEstadoUsuario } from '../../../helpers/queries';
import { useState } from 'react';
import Swal from 'sweetalert2';
const id_super = import.meta.env.VITE_API_SUPERADMIN;

const ItemUsuario = ({ usuario }) => {
  const [valorEstado, setValorEstado] = useState(usuario.estado);
  let res = false;
  const cambiarEstadoUsuario = async () => {
    if (usuario.estado) {
      usuario.estado = false;
    } else {
      usuario.estado = true;
    }
    await editarEstadoUsuario(usuario);
    Swal.fire({
      icon: 'success',
      title: 'El estado del usuario fue actalizado correctamente.',
    });
    setValorEstado(usuario.estado);
  };

  const adminProtegido = () => {
    if (id_super == usuario._id) {
      res = true;
    }
  };

  adminProtegido();

  return (
    <tr>
      <td>{usuario.rol}</td>
      <td>{usuario.nombreCompleto}</td>
      <td>{usuario.correo}</td>
      <td>
        {res ? (
          <Button onClick={cambiarEstadoUsuario} disabled>
            {valorEstado ? 'Habilitado' : 'Deshabilitado'}
          </Button>
        ) : (
          <Button onClick={cambiarEstadoUsuario}>
            {valorEstado ? 'Habilitado' : 'Deshabilitado'}
          </Button>
        )}
      </td>
    </tr>
  );
};

export default ItemUsuario;
