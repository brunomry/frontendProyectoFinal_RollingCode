import { Table } from "react-bootstrap";
import "../../../styles/administrador.css";
import ItemProducto from "./ItemProducto.jsx";
import { Link } from "react-router-dom";

const ListaProductos = () => {
  return (
    <section className="mainSection py-5">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        <h1>Gestión de productos</h1>
        <Link
          className="btnNewProduct border border-1 border-white fw-bold p-2 rounded-2 text-decoration-none"
          to="/administrador/productos/crearProducto"
        >
          <i className="fa-solid fa-plus"></i> Nuevo producto
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
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </section>
  );
};

export default ListaProductos;