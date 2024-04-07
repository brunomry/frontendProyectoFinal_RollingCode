import "../../../styles/administrador.css";

const ItemUsuario = ({usuario}) => {
  return (
    <tr>
      <td>{usuario.rol}</td>
      <td>{usuario.nombreCompleto}</td>
      <td>{usuario.correo}</td>
      <td>{usuario.estado}</td>
    </tr>
  );
};

export default ItemUsuario;