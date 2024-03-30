import { Button, Table } from "react-bootstrap";
import "../../../styles/administrador.css";
import ItemUsuario from "./ItemUsuario";
import { Link } from "react-router-dom";

const ListaUsuarios = () => {
  return (
    <section className="mainSection py-5">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        <h1>Gestión de usuarios</h1>
        <Link
          className="btnNewUser border border-1 border-white fw-bold p-2 rounded-2 text-decoration-none"
          title="Nuevo usuario"
          to="/administrador/crearUsuario"
        >
          <i className="fa-solid fa-plus"></i> Nuevo usuario
        </Link>
      </div>
      <hr className="container" />
      <Table
        responsive
        hover
        className="container text-center mx-2 mx-sm-auto mt-3 mt-sm-5"
      >
        <thead>
          <tr className="text-center">
            <th>Perfil</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <ItemUsuario></ItemUsuario>
          <ItemUsuario></ItemUsuario>
          <ItemUsuario></ItemUsuario>
        </tbody>
      </Table>
    </section>
  );
};

export default ListaUsuarios;
