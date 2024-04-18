import React from "react";
import { Routes, Route } from "react-router";
import Administracion from "../pages/Administracion";
import ListaUsuarios from "../pages/user/ListaUsuarios";
import ListaPedidos from "../pages/order/ListaPedidos";
import ListaProductos from "../pages/product/ListaProductos";
import FormularioProducto from "../pages/product/FormularioProducto";
import FormularioUsuario from "../pages/user/FormularioUsuario";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Administracion></Administracion>}></Route>
        <Route
          path="/usuarios"
          element={<ListaUsuarios></ListaUsuarios>}
        ></Route>
        <Route
          path="/usuarios/crearUsuario"
          element={
            <FormularioUsuario
            ></FormularioUsuario>
          }
        ></Route>
        <Route path="/pedidos" element={<ListaPedidos></ListaPedidos>}></Route>
        <Route
          path="/productos"
          element={<ListaProductos></ListaProductos>}
        ></Route>
        <Route
          path="/productos/crearProducto"
          element={
            <FormularioProducto
              editar={false}
              titulo="Nuevo producto"
              ocultar={false}
              deshabilitado={false}
              boton="Cancelar"
            />
          }
        ></Route>
        <Route
          path="/productos/editarProducto/:id"
          element={
            <FormularioProducto
              editar={true}
              deshabilitado={false}
              boton="Cancelar"
              ocultar={false}
              titulo="Editar producto"
            />
          }
        ></Route>
        <Route
          path="/productos/verProducto/:id"
          element={
            <FormularioProducto
              editar={true}
              deshabilitado={true}
              ocultar={true}
              verDetalle={true}
              boton="Volver"
              titulo="Detalle del producto"
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
