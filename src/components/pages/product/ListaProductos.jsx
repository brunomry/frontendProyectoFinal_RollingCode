import { Table } from "react-bootstrap";
import "../../../styles/administrador.css";
import ItemProducto from "./ItemProducto.jsx";
import { Link } from "react-router-dom";
import { leerProductosAPI } from "../../../helpers/queries.js";
import { useEffect, useState } from "react";


const ListaProductos = () => {

  const [productos, setProductos] = useState ([])

  useEffect(() =>{
    consultarAPI()
  }, [])
  
  const consultarAPI = async () =>{
    try{
      const respuesta = await leerProductosAPI();
      setProductos(respuesta)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <section className="mainSection pt-3 pb-5">
      <div className="ps-2 ps-md-5 mb-5">
        <Link
          className="btn btn-dark text-decoration-none text-white border px-3 pt-2 rounded-2"
          to="/administrador"
        >
          <i className="fa-solid fa-arrow-left"></i> Atrás
        </Link>
      </div>
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        <h1 className="titleColor">Gestión de productos</h1>
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
          {
            productos.map((producto) => <ItemProducto key={producto.id} producto={producto} setProductos={setProductos}></ItemProducto>)
          }
        </tbody>
      </Table>
    </section>
  );
};

export default ListaProductos;
