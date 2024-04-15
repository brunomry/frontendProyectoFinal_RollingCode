import { Button } from 'react-bootstrap';
import '../../../styles/administrador.css';
import { editarEstadoUsuario } from '../../../helpers/queries';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ItemUsuario = ({ usuario }) => {
  const [valorEstado, setValorEstado] = useState(usuario.estado);
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

  return (
    <tr>
      <td>{usuario.rol}</td>
      <td>{usuario.nombreCompleto}</td>
      <td>{usuario.correo}</td>
      <td>
        <Button onClick={cambiarEstadoUsuario}>
          {valorEstado ? 'Habilitado' : 'Deshabilitado'}
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
