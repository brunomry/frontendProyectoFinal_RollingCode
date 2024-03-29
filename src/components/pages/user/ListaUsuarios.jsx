import { Button, Table } from "react-bootstrap";
import "../../../styles/administrador.css";

const ListaUsuarios = () => {
  return (
    <section className="mainSection">
      <div className="container d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Usuarios registrados</h1>
        <Button className="btn btn-primary">
          <i class="fa-solid fa-plus"></i>
        </Button>
      </div>
      <hr className="container" />
      <Table responsive striped hover className="container text-center mx-2">
        <thead>
          <tr className="text-center">
            <th>Perfil</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    </section>
  );
};

export default ListaUsuarios;
