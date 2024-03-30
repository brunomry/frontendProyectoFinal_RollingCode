import { Table } from "react-bootstrap";
import "../../../styles/administrador.css";
import ItemPedido from "./ItemPedido";

const ListaPedidos = () => {
  return (
    <section className="mainSection py-5">
    <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
      <h1>Gestión de Pedidos</h1>
    </div>
    <hr className="container" />
    <Table responsive hover className="container text-center mx-2 mx-sm-auto bgTable mt-3 mt-sm-5">
      <thead>
        <tr className="text-center">
          <th>Usuario</th>
          <th>Fecha</th>
          <th>Productos</th>
          <th>Estado</th>
          <th>Opción</th>
        </tr>
      </thead>
      <tbody>
        <ItemPedido></ItemPedido>
        <ItemPedido></ItemPedido>
        <ItemPedido></ItemPedido>
      </tbody>
    </Table>
  </section>
  );
};

export default ListaPedidos;