import React from "react";
import { Routes, Route } from "react-router";
import Administracion from "../pages/Administracion";
import ListaUsuarios from "../pages/user/ListaUsuarios";
import ListaPedidos from "../pages/order/ListaPedidos";
import ListaProductos from "../pages/product/ListaProductos";
import FormularioProducto from "../pages/product/FormularioProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Administracion></Administracion>}></Route>
        <Route
          path="/usuarios"
          element={<ListaUsuarios></ListaUsuarios>}
        ></Route>
        <Route path="/pedidos" element={<ListaPedidos></ListaPedidos>}></Route>
        <Route
          path="/productos"
          element={<ListaProductos></ListaProductos>}
        ></Route>
        <Route
          path="/productos/crearProducto"
          element={<FormularioProducto />}
        ></Route>
        <Route
          path="/productos/editarProducto/:id"
          element={<FormularioProducto editar={true}/>}
        ></Route>
        <Route
          path="/productos/verProducto/:id"
          element={<FormularioProducto editar={false}/>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
